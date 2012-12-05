#!/bin/sh

cat manifest.json | grep '"version"' | cut -d':' -f 2 | tr -d '",'
