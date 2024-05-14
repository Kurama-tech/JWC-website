#!/bin/sh
set -ex

#nginx

#pm2 start npm --name "jwc-frontend" -- start --no-daemon
npm start
#pm2 logs
