#! /bin/bash
GIT_SHA=`git rev-parse HEAD | cut -c -7`

# Build the Docker image
docker build . -t kilmc/sususite:${GIT_SHA}

# Push to DockerHub
docker push kilmc/sususite:${GIT_SHA}

# Interpolate tag into Dockerrun.aws.json file
scripts/generate_dockerrun.sh $GIT_SHA > Dockerrun.aws.json

# Push to ElasticBeanstalk
eb deploy