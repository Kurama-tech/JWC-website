#!/bin/sh
set -ex

#nginx

docker compose down && docker compose pull && docker compose up -d 