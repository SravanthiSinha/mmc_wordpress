#!/bin/bash

# Script to remove dist folder if exists and run build:wp
# Usage: ./remove_dist.sh <folder_name>

# Check if folder name is provided as argument
if [ $# -eq 0 ]; then
    echo "Error: No folder name provided"
    echo "Usage: $0 <folder_name>"
    exit 1
fi

FOLDER_NAME="$1"
DIST_PATH="/Applications/XAMPP/xamppfiles/htdocs/mmc/wp-content/plugins/$FOLDER_NAME/dist"

# Check if the target folder exists
if [ ! -d "$FOLDER_NAME" ]; then
    echo "Error: Folder '$FOLDER_NAME' does not exist"
    exit 1
fi

# Remove dist folder if it exists
if [ -d "$DIST_PATH" ]; then
    echo "Removing existing dist folder..."
    rm -rf "$DIST_PATH"
    echo "Dist folder removed"
fi

# Change to the target directory and run build:wp command
echo "Running build command..."
cd "$FOLDER_NAME"
npm run build:wp

echo "Build completed"

# Create zip file of the plugin folder
PLUGIN_PATH="/Applications/XAMPP/xamppfiles/htdocs/mmc/wp-content/plugins/$FOLDER_NAME"
ZIP_PATH="/Applications/XAMPP/xamppfiles/htdocs/mmc/wp-content/plugins/$FOLDER_NAME.zip"

echo "Creating zip file..."

# Remove existing zip if it exists
if [ -f "$ZIP_PATH" ]; then
    rm "$ZIP_PATH"
fi

# Change to plugins directory and create zip
cd "/Applications/XAMPP/xamppfiles/htdocs/mmc/wp-content/plugins"
zip -r "$FOLDER_NAME.zip" "$FOLDER_NAME"

echo "Zip file created: $ZIP_PATH"

# Copy zip file to ../wordpress-plugin directory
DEST_DIR="/Users/shellzero/mmc_wordpress/wordpress-plugin"
echo "Copying zip file to $DEST_DIR..."

# Create destination directory if it doesn't exist
mkdir -p "$DEST_DIR"

# Copy the zip file
cp "$ZIP_PATH" "$DEST_DIR/"

if [ $? -eq 0 ]; then
    echo "Zip file successfully copied to $DEST_DIR/$FOLDER_NAME.zip"
else
    echo "Error: Failed to copy zip file to $DEST_DIR"
    exit 1
fi