#! /bin/bash
GIT_SHA=$1

cat << EOF
{
  "AWSEBDockerrunVersion": "1",
  "Image": {
    "Name": "kilmc/sususite:$GIT_SHA",
    "Update": "true"
  },
  "Ports": [
    {
      "ContainerPort": "8000"
    }
  ]
}
EOF



