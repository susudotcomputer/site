#! /bin/bash
GIT_SHA=`git rev-parse HEAD | cut -c -7`

# Build the Docker image
docker build . -t kilmc/susu:${GIT_SHA}

# Push to DockerHub
docker push kilmc/susu:${GIT_SHA}

# Interpolate tag into Dockerrun.aws.json file
generate_dockerrun.sh > Dockerrun.aws.json

# Push to ElasticBeanstalk
eb deploy