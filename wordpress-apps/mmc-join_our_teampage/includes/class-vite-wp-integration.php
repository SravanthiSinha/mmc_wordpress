<?php
/**
 * Vite integration for WordPress
 */
class Vite_WP_Integration {
    /**
     * The manifest data
     */
    private $manifest = [];
    
    /**
     * The manifest file path
     */
    private $manifest_path;
    
    /**
     * The base URL for the built assets
     */
    private $base_url;
    
    /**
     * Constructor
     * 
     * @param string $manifest_path The path to the manifest.json file
     * @param string $base_url The base URL for the assets
     */
    public function __construct($manifest_path, $base_url) {
        $this->manifest_path = $manifest_path;
        $this->base_url = $base_url;
        $this->load_manifest();
    }
    
    /**
     * Load the manifest file
     */
    private function load_manifest() {
        if (file_exists($this->manifest_path)) {
            $manifest_content = file_get_contents($this->manifest_path);
            $this->manifest = json_decode($manifest_content, true) ?: [];
        }
    }
    
    /**
     * Get the URL for a file
     * 
     * @param string $file The file to get the URL for
     * @return string|null The URL or null if not found
     */
    public function get_file_url($file) {
        $file_path = $this->get_file_path($file);
        return $file_path ? $this->base_url . $file_path : null;
    }
    
    /**
     * Get the path for a file from the manifest
     * 
     * @param string $file The file to get the path for
     * @return string|null The path or null if not found
     */
    public function get_file_path($file) {
        // Check for direct match
        if (isset($this->manifest[$file])) {
            return $this->manifest[$file]['file'];
        }
        
        // Check for match with src/ prefix
        $src_file = 'src/' . $file;
        if (isset($this->manifest[$src_file])) {
            return $this->manifest[$src_file]['file'];
        }
        
        // Check for match with .jsx extension
        $jsx_file = preg_replace('/\.js$/', '.jsx', $file);
        if (isset($this->manifest[$jsx_file])) {
            return $this->manifest[$jsx_file]['file'];
        }
        
        // Check for match with src/ prefix and .jsx extension
        $src_jsx_file = 'src/' . $jsx_file;
        if (isset($this->manifest[$src_jsx_file])) {
            return $this->manifest[$src_jsx_file]['file'];
        }
        
        // The entry point might be keyed by its relative path
        foreach ($this->manifest as $key => $value) {
            // Check if the key ends with our file
            if (preg_match('/' . preg_quote($file, '/') . '$/', $key) || 
                preg_match('/' . preg_quote($jsx_file, '/') . '$/', $key)) {
                return $value['file'];
            }
        }
        
        return null;
    }
    
    /**
     * Get the CSS files for a JS file
     * 
     * @param string $file The JS file to get CSS files for
     * @return array An array of CSS file paths
     */
    public function get_css_files($file) {
        $css_files = [];
        
        // Try direct match
        if (isset($this->manifest[$file]) && isset($this->manifest[$file]['css'])) {
            return $this->manifest[$file]['css'];
        }
        
        // Try with src/ prefix
        $src_file = 'src/' . $file;
        if (isset($this->manifest[$src_file]) && isset($this->manifest[$src_file]['css'])) {
            return $this->manifest[$src_file]['css'];
        }
        
        // Try with .jsx extension
        $jsx_file = preg_replace('/\.js$/', '.jsx', $file);
        if (isset($this->manifest[$jsx_file]) && isset($this->manifest[$jsx_file]['css'])) {
            return $this->manifest[$jsx_file]['css'];
        }
        
        // Try with src/ prefix and .jsx extension
        $src_jsx_file = 'src/' . $jsx_file;
        if (isset($this->manifest[$src_jsx_file]) && isset($this->manifest[$src_jsx_file]['css'])) {
            return $this->manifest[$src_jsx_file]['css'];
        }
        
        // Check all entries for CSS files
        foreach ($this->manifest as $key => $value) {
            if (preg_match('/' . preg_quote($file, '/') . '$/', $key) || 
                preg_match('/' . preg_quote($jsx_file, '/') . '$/', $key)) {
                if (isset($value['css'])) {
                    return $value['css'];
                }
            }
        }
        
        // As a fallback, look for any CSS files in the manifest
        foreach ($this->manifest as $value) {
            if (isset($value['css'])) {
                foreach ($value['css'] as $css_file) {
                    $css_files[] = $css_file;
                }
            }
        }
        
        return array_unique($css_files);
    }
}