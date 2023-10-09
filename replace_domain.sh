#!/bin/bash

# Check if the two arguments are provided
if [ $# -ne 2 ]; then
  echo "Usage: $0 ATTACKER_DOMAIN TARGET_DOMAIN # only domains, without protocol (attacker will be always http and target will be always https)"
  exit 1
fi

attacker=$1
target=$2

new_folder="targets/$target"
mkdir -p "$new_folder"

for file in $(ls scripts); do
    if [[ "$OSTYPE" =~ ^darwin ]]; then
        sed -e "s/{{TARGET}}/$target/g; s/{{ATTACKER}}/$attacker/g" "scripts/$file" > "$new_folder/$file"
    else
        cp "scripts/$file" "$new_folder/$file"
        sed -i "s/{{TARGET}}/$target/g; s/{{ATTACKER}}/$attacker/g" "$new_folder/$file"
    fi
done
