#!/usr/bin/env bash
set -e
npm run build
cd dist
touch .nojekyll
git init
git add -A
git commit -m 'deploy'
git push -f "https://${access_token}@gitee.com/chu1204505056/vue-admin-beautiful-template.git" master:gh-pages
start "https://gitee.com/chu1204505056/vue-admin-beautiful-template/pages"
cd -
cd -
rimraf dist
exec /bin/bash




