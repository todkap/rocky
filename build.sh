#!/bin/sh
set -e

export DOCKER_ID_USER="todkap"
docker login

docker build --no-cache=true -t todkap/rocky:1.0.0 .

docker push todkap/rocky:1.0.0

