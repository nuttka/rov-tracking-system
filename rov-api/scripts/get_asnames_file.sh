#!/bin/bash
wget http://bgp.potaroo.net/cidr/autnums.html
grep '^<a' autnums.html | awk -F'>' '{ print $2 FS $3 }' | sed 's/<\/a>//g' |
sed 's/[[:space:]]\+/|/' | sed 's/^AS//g' | sed "s/\"/\`/g" | sed "s/'/\`/g" > asnames.txt
rm autnums.html


