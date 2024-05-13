#!/bin/sh
set -ex

#nginx

pm2 start npm --name "jwc-frontend" -- start
