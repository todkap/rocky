#!/bin/sh
set -e

export DOCKER_ID_USER="todkap"
docker login

docker build --no-cache=true -t todkap/rocky:1.0.0 .

docker push todkap/rocky:1.0.0

helm package -d charts/docs --version 1.0.0 charts/rocky

helm repo index charts
