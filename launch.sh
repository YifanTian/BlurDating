#!/bin/bash
fuser -k 3000/tcp

service redis_6379 start
cd ./server
npm install
npm start &
cd ../client
npm install
ng build --watch &


echo "=================================================="
read -p "PRESS [ENTER] TO TERMINATE PROCESSES." PRESSKEY

fuser -k 3000/tcp
service redis_6379 stop