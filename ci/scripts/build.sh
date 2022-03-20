#! /bin/bash
echo '##########################################################################'
echo "1/4 Start build"
echo '##########################################################################'
npm -v
#rm -rf package-lock.json
rm -rf node_modules
echo "2/4 Run install"
echo '##########################################################################'
npm --registry  https://repo.cicc.com.cn/artifactory/api/npm/public-npm-virtual/  install

echo "3/4 Run build"
echo '##########################################################################'
npm run build

echo "4/4 Finish build"
echo '##########################################################################'
exit 0
