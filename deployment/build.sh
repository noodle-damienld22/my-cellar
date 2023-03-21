#!/bin/bash

PARENT_PATH=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
BACK_RELATIVE_LOCATION=../back


echo "Building my-cellar..."

#####################
# Build back docker image
#####################
echo "Building my-cellar-back Docker image..."
# Go to the back directory
cd $PARENT_PATH
cd $BACK_RELATIVE_LOCATION

# Build the docker image
docker build -t my-cellar-back .
echo "my-cellar-back Docker image built !"