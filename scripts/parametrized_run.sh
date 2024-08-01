#!/bin/sh

# Set default values
if [[ -z ${ENV} ]]; then
 export ENV="Acceptance"
 echo "ENV is not set, will use default ${ENV} environment"
else
  export ENV="${ENV}"
  echo "Environment is set to $ENV"
fi

# Set default values for test variables (uncomment to run locally)

# UI="${UI:-True}"
# SMOKE="${SMOKE:-True}"

# clean reports folders

npm run clean

# Run UI functional tests

if [ $UI = "True" ]; then
  npx playwright test --project=UI_tests
else
  echo "Skiping UI functional tests"
fi

# Run Smoke tests

if [ $SMOKE = "True" ]; then
  npx playwright test --project=Smoke_tests
else
  echo "Skiping tests for  Start Batch Job modal"
fi

# Generate final report

npm run posttest
