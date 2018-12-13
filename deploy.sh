#!/bin/bash
cd dist
tar -czf app.tar.gz *
scp -P 26386 app.tar.gz root@67.230.178.236:project/tmp/
ssh -p 26386 root@67.230.178.236 "cd project/m.sinwai.cn/ && rm -rf * && tar -zxf ../tmp/app.tar.gz"
