// scripts/build-wordpress.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';
import { promisify } from 'util';

// Convert __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Promisify exec
const execAsync = promisify(exec);

// Configuration - UPDATE THESE PATHS
const wordpressPluginPath = path.resolve('/Applications/XAMPP/xamppfiles/htdocs/mmc/wp-content/plugins/mmc-our-team-page');
// Set to false if you want to copy files manually
const autoCopy = true;

// Main function
async function buildAndDeploy() {
  // Build the app
  console.log('🏗️  Building React app...');
  try {
    await execAsync('npm run build');
    console.log('✅ Build completed successfully');
  } catch (error) {
    console.error('❌ Build failed', error);
    process.exit(1);
  }

  // Copy files to WordPress if enabled
  if (autoCopy) {
    const distPath = path.resolve(__dirname, '../dist');
    const wpDistPath = path.resolve(wordpressPluginPath, 'dist');
    
    console.log(`📦 Copying files to WordPress plugin directory:\n  ${wpDistPath}`);
    
    try {
      // Ensure the destination directory exists
      if (!fs.existsSync(wpDistPath)) {
        fs.mkdirSync(wpDistPath, { recursive: true });
        console.log('📁 Created destination directory');
      }
      
      // Copy files recursively
      copyFilesRecursively(distPath, wpDistPath);
      
      console.log('✅ Successfully copied files to WordPress');
    } catch (error) {
      console.error('❌ Failed to copy files', error);
      console.log('👉 You may need to manually copy the dist folder to your WordPress plugin');
    }
  }
}

/**
 * Copy files recursively from source to destination
 */
function copyFilesRecursively(source, destination) {
  // Get all files and directories in the source
  const entries = fs.readdirSync(source, { withFileTypes: true });
  
  // Process each entry
  for (const entry of entries) {
    const sourcePath = path.join(source, entry.name);
    const destPath = path.join(destination, entry.name);
    
    if (entry.isDirectory()) {
      // Create the directory if it doesn't exist
      if (!fs.existsSync(destPath)) {
        fs.mkdirSync(destPath, { recursive: true });
      }
      
      // Recursively copy the directory contents
      copyFilesRecursively(sourcePath, destPath);
    } else {
      // Copy the file
      fs.copyFileSync(sourcePath, destPath);
    }
  }
}

// Run the main function
buildAndDeploy().catch(err => {
  console.error('Unhandled error:', err);
  process.exit(1);
});