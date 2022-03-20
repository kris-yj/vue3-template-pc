#!/bin/bash

##########################################################################
###  usage: /bin/bash package.sh {appName} {appEnv:dev|qa|uat|prd]} {artifactoryGroup}  ###
##########################################################################

if [ $# -lt 3 ]; then
   echo "usage: /bin/bash upload.sh {appName} {appEnv} {artifactoryGroup}"
   exit 1;
fi

echo '##########################################################################'
echo '1/8 package.sh start'
echo '##########################################################################'

echo '2/8 check environment variables'
echo '##########################################################################'
if [ "x$IMAGE_REPO" = "x" ]; then
    IMAGE_REPO=repo.cicc.com.cn
fi

if [ "x$TARGET_DOCKERFILE" = "x" ]; then
    TARGET_DOCKERFILE=ci/Dockerfile
fi

echo IMAGE_REPO="$IMAGE_REPO"
echo TARGET_DOCKERFILE=$TARGET_DOCKERFILE

echo '##########################################################################'

echo '3/8 create imageFullName'
echo '##########################################################################'
ARTIFACTORY_GROUP=$3
imageBase=$IMAGE_REPO/$ARTIFACTORY_GROUP/
appName=$1
appEnv=$2
gitBranch=`git rev-parse --abbrev-ref HEAD | awk -F '/' '{print $NF}'`

if [ ! "x$GIT_BRANCH" = "x" ]; then
    gitBranch=`echo $GIT_BRANCH | awk -F '/' '{print $NF}'`
fi

currDate=`date "+%Y%m%d%H%M%S"`

commitId=`git log -1 --abbrev=8 --pretty=format:%h`
imageFullName=${imageBase}${appEnv}/${appName}':'${gitBranch}-${currDate}-${commitId}
echo imageFullName=${imageFullName}
echo '##########################################################################'

echo '4/8 build project'
echo '##########################################################################'
/bin/bash ci/scripts/build.sh
echo '##########################################################################'

echo '5/8 build image'
echo '##########################################################################'
docker build -f $TARGET_DOCKERFILE -t ${imageFullName} .
echo '##########################################################################'

echo '6/8 push image'
echo '##########################################################################'

/usr/install/jfrogv2/jfrog rt dp  ${imageFullName} $HARBOR_GROUP
docker rmi ${imageFullName}

docker logout $IMAGE_REPO
echo '##########################################################################'

echo '7/8 phecda callback'
echo '##########################################################################'
curl -X POST -F "imageName=${imageFullName}" -F "crid=${CR_ID}" -F "compileId=${COMPILE_ID}" -F "appName=${APP_NAME}" http://phecda.cicc.group/package-switch/callBack

echo '##########################################################################'

echo '8/8 package.sh end'
echo '##########################################################################'
