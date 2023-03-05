#!/usr/bin/env sh
# 執行後，會自動更新 main 與 gh-pages
# abort on errors
set -e

# build
npm run build


# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git remote add origin https://github.com/BarretHexschool/VueTraining_w7.git
git checkout -B main
git add -A
git commit -m 'deploy'

# if you are deploying to https://BarretHexschool.github.io
 git push -f origin main   
# git push -f git@github.com:BarretHexschool/BarretHexschool.github.io.git main

# navigate into the build output directory
cd dist

git init
git checkout -B main
git add -A
git commit -m 'deploy'
# if you are deploying to https://BarretHexschool.github.io/vuetraining_w6
git push -f git@github.com:BarretHexschool/VueTraining_w7.git main:gh-pages
cd -