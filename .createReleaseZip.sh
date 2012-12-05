#!/bin/sh

mkdir releases &> /dev/null
cp manifest.json manifest.json.bak
revnum=`git log --oneline | wc -l`
revnum=`echo $revnum`
cat manifest.json.bak | sed s/\"version\":\"0\"/\"version\":\"3.0."$revnum"\"/ > manifest.json
zip -b . releases/Syntaxtic_v`./.getVersion.sh`.zip -r `ls | grep -v releases`

mv manifest.json.bak manifest.json
