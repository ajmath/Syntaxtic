mkdir releases &> /dev/null
zip -b . releases/Syntaxtic_v`./.getVersion.sh`.zip -r `ls | grep -v releases`
