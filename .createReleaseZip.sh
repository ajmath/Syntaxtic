mkdir releases &> /dev/null
zip -b . releases/Synataxtic_v`./.getVersion.sh`.zip -r `ls | grep -v releases`
