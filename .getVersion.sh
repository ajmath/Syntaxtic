cat manifest.json | sed 's/"//g' | awk '/version/ {print $2}' -
