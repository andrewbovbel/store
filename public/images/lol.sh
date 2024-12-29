#!/bin/bash

# Ensure the script stops on errors
set -e

# Counter for the new file names
index=1

# Iterate over all .jpg files in the current directory
for file in *.jpg; do
  # Check if there are any .jpg files
  if [ ! -e "$file" ]; then
    echo "No .jpg files found in the current directory."
    exit 1
  fi

  # Generate the new file name
  new_name="${index}.jpg"

  # Avoid overwriting files
  if [ -e "$new_name" ]; then
    echo "Error: ${new_name} already exists. Aborting to prevent data loss."
    exit 1
  fi

  # Rename the file
  mv "$file" "$new_name"

  # Increment the index
  index=$((index + 1))
done

echo "Renamed all .jpg files sequentially!"
