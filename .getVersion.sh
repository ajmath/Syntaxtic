cat manifest.json | sed 's/"//g' | sed 's/:/ /' | awk '/version/ {print $2}' -
