#!/bin/bash

VERSION=$(cat ./package.json | grep '@playwright/test' | awk -F: '{ print $2 }' | sed 's/[",]//g' |tr  -d ^ | xargs)

# export CI variable to limit parallel workers on CI
export CI=true

# build image

docker build -t  playwright-test:latest  -f ./utils/Docker/Dockerfile  --build-arg PW_VERSION="v$VERSION" .

# run tests

docker run --rm -i -v $(pwd):/app -w /app playwright-test:latest npx playwright test
