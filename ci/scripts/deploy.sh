#!/bin/bash

########################################################################################################
###  usage: /bin/bash deploy.sh {appName} {appEnv:dev|qa|uat|prd} {artifactoryGroup} {kubeNameSpace} {kubeCluster} ###
########################################################################################################

if [ $# -lt 5 ]; then
   echo "usage: /bin/bash deploy.sh {appName} {appEnv} {artifactoryGroup} {kubeNameSpace} {kubeCluster} {}"
   exit 1;
fi

echo '##########################################################################'
echo '1/5 deploy.sh start'
echo '##########################################################################'

echo '2/5 check environment variables'
echo '##########################################################################'

if [ "x$IMAGE_REPO" = "x" ]; then
    IMAGE_REPO=repo.cicc.com.cn
fi

if [ "x$REPLICAS" = "x"]; then
    REPLICAS=1
fi

echo '##########################################################################'

echo '3/5 get imageFullName'
echo '##########################################################################'

if [ "x$TARGET_DEPLOYMENT_FILE" = "x" ]; then
    TARGET_DEPLOYMENT_FILE=ci/k8s.yml
fi

ARTIFACTORY_GROUP=$3
imageBase=$IMAGE_REPO/$ARTIFACTORY_GROUP/
appName=$1
appEnv=$2
kubeNameSpace=$4
kubeCluster=$5
gitBranch=`git rev-parse --abbrev-ref HEAD | awk -F '/' '{print $NF}'`
currDate=`date "+%Y%m%d%H%M%S"`
commitId=`git log -1 --abbrev=8 --pretty=format:%h`
imageFullName=${imageBase}${appEnv}/${appName}':'${gitBranch}-${currDate}-${commitId}
echo imageFullName=${imageFullName}
echo kubeNameSpace=${kubeNameSpace}
echo kubeCluster=${kubeCluster}
echo '##########################################################################'

echo '4/5 deploy image to qingyun'
echo '##########################################################################'

if [ ! -d target ]; then
    mkdir target
fi

cp -f $TARGET_DEPLOYMENT_FILE target/deployment.yml

sed -i 's#${APP_NAME}#'$appName'#g' target/deployment.yml
sed -i 's#${NAMESPACE}#'$kubeNameSpace'#g' target/deployment.yml
sed -i 's#${IMAGE_FULL_NAME}#'$imageFullName'#g' target/deployment.yml
#sed -i 's#${REPLICAS}#'$REPLICAS'#g' target/deployment.yml
echo '##########################################################################'

echo '#########################echo kubectl log #################################'
echo `kubectl --kubeconfig /home/hudson/${kubeCluster}.conf apply -f target/deployment.yml`
echo '##########################################################################'

echo '5/5 deploy.sh end'
echo '##########################################################################'
