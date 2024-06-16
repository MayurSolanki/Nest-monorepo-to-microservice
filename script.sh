#!/bin/bash
initCMD='npx concurrently'

cyanColor="\033[0;36m"

for app in $(cd ./apps && ls); do
    echo -e "${cyanColor}${app%/*} service starting ..."
    initCMD+=" \"npx nest start ${app%/*}\""
done

eval "$initCMD"

# For not closing terminal if we face an error
read -p "Press any key to continue" x