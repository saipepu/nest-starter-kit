#!/bin/bash

# URL of the JSON content
URL="http://localhost:8080/swagger-json"

# Output file name
OUTPUT_FILE="./public/swagger.json"

# Download the JSON content
curl -o $OUTPUT_FILE $URL

# Check if the download was successful
if [ $? -eq 0 ]; then
    echo "JSON content downloaded successfully to $OUTPUT_FILE"
else
    echo "Failed to download JSON content from $URL"
fi