<?php
/**
 * Plugin Name: MMC - Anxiety Therapy PAGE
 * Description: Integration of MMC - Anxiety Therapy PAGE with WordPress
 * Version: 1.0.0
 * Author: Sravanthi Sinha
 * Text Domain: mmc-anxiety_therapy
 * License: GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Main plugin class
 * 
 * Handles integration of  MMC - Anxiety Therapy PAGE with WordPress
 */
class MMC_ANXIETY_THERAPY_App {
    /**
     * Plugin instance
     *
     * @var MMC_ANXIETY_THERAPY_App
     */
    private static $instance = null;
    
    /**
     * Plugin directory path
     *
     * @var string
     */
    private $plugin_dir;
    
    /**
     * Plugin directory URL
     *
     * @var string
     */
    private $plugin_url;
    
    /**
     * Get plugin instance
     *
     * @return MMC_ANXIETY_THERAPY_App
     */
    public static function get_instance() {
        if (null === self::$instance) {
            self::$instance = new self();
        }
        return self::$instance;
    }
    
    /**
     * Constructor
     */
    private function __construct() {
        $this->plugin_dir = plugin_dir_path(__FILE__);
        $this->plugin_url = plugin_dir_url(__FILE__);
        
        // Register shortcode
        add_shortcode('mmc_anxiety_therapy', array($this, 'render_react_app'));
        
        // Enqueue scripts and styles with high priority to ensure they load after other scripts
        add_action('wp_enqueue_scripts', array($this, 'register_assets'), 99);
        add_action('wp_enqueue_scripts', array($this, 'maybe_enqueue_assets'), 100);
        
        // Add debugging script only in development mode
        if (defined('WP_DEBUG') && WP_DEBUG) {
            add_action('wp_footer', array($this, 'add_debug_script'));
        }
        
        // Add activation/deactivation hooks
        register_activation_hook(__FILE__, array($this, 'activate'));
        register_deactivation_hook(__FILE__, array($this, 'deactivate'));
    }
    
    /**
     * Plugin activation
     */
    public function activate() {
        // Verify minimum PHP version
        if (version_compare(PHP_VERSION, '7.0', '<')) {
            deactivate_plugins(plugin_basename(__FILE__));
            wp_die(
                esc_html__('MMC ANXIETY_THERAPY requires PHP 7.0 or higher.', 'mmc-anxiety_therapy'),
                esc_html__('Plugin Activation Error', 'mmc-anxiety_therapy'),
                array('back_link' => true)
            );
        }
        
        // Check if dist directory exists
        if (!file_exists($this->plugin_dir . 'dist') || !is_dir($this->plugin_dir . 'dist')) {
            error_log('MMC ANXIETY_THERAPY Plugin: dist directory not found during activation.');
        }
        
        // Flush rewrite rules
        flush_rewrite_rules();
    }
    
    /**
     * Plugin deactivation
     */
    public function deactivate() {
        // Flush rewrite rules
        flush_rewrite_rules();
    }
    
    /**
     * Register scripts and styles
     */
    public function register_assets() {
        // Deregister React and ReactDOM if they're already registered
        // to avoid conflicts with other plugins
        wp_deregister_script('react');
        wp_deregister_script('react-dom');
        
        // Plugin directory path and URL
        $plugin_dir = $this->plugin_dir;
        $plugin_url = $this->plugin_url;
        
        // Check if dist directory exists
        if (!file_exists($plugin_dir . 'dist') || !is_dir($plugin_dir . 'dist')) {
            error_log('MMC ANXIETY_THERAPY Plugin: dist directory not found.');
            return;
        }
        
        // Check if manifest.json exists
        $manifest_file = $plugin_dir . 'dist/manifest.json';
        if (file_exists($manifest_file)) {
            $this->register_from_manifest($manifest_file);
        } else {
            $this->register_direct();
        }
    }
    
    /**
     * Register assets using manifest file
     * 
     * @param string $manifest_file Path to manifest file
     */
    private function register_from_manifest($manifest_file) {
        $manifest = json_decode(file_get_contents($manifest_file), true);
        
        if (!$manifest || !is_array($manifest)) {
            error_log('MMC ANXIETY_THERAPY Plugin: Invalid manifest file');
            return;
        }
        
        // Register CSS files first
        foreach ($manifest as $file => $details) {
            if (!isset($details['file']) || pathinfo($details['file'], PATHINFO_EXTENSION) !== 'css') {
                continue;
            }
            
            $file_path = $this->plugin_dir . 'dist/' . $details['file'];
            $file_url = $this->plugin_url . 'dist/' . $details['file'];
            $handle = 'mmc-anxiety_therapy-' . sanitize_title(basename($details['file']));
            
            wp_register_style(
                $handle,
                $file_url,
                array(),
                file_exists($file_path) ? filemtime($file_path) : '1.0.0'
            );
        }
        
        // Prepare dependencies
        $deps = array();
        
        // Register JS files
        foreach ($manifest as $file => $details) {
            if (!isset($details['file']) || pathinfo($details['file'], PATHINFO_EXTENSION) !== 'js') {
                continue;
            }
            
            $file_path = $this->plugin_dir . 'dist/' . $details['file'];
            $file_url = $this->plugin_url . 'dist/' . $details['file'];
            $handle = 'mmc-anxiety_therapy-' . sanitize_title(basename($details['file']));
            
            // Check if this is the main entry file
            $is_main = isset($details['isEntry']) && $details['isEntry'] === true;
            
            // If it's the main file, save it for later
            if ($is_main) {
                $main_handle = $handle;
                $main_file_path = $file_path;
                $main_file_url = $file_url;
                continue;
            }
            
            wp_register_script(
                $handle,
                $file_url,
                $deps,
                file_exists($file_path) ? filemtime($file_path) : '1.0.0',
                true
            );
            
            // Add to dependencies for subsequent scripts
            $deps[] = $handle;
        }
        
        // Register the main file last with all dependencies
        if (isset($main_handle) && isset($main_file_url) && file_exists($main_file_path)) {
            wp_register_script(
                $main_handle,
                $main_file_url,
                $deps,
                filemtime($main_file_path),
                true
            );
            
            // Add localized data for the main script
            wp_localize_script(
                $main_handle,
                'mmcChinesAnxiety TherapyData',
                $this->get_localized_data()
            );
        }
    }
    
    /**
     * Register assets directly from dist directory
     */
    private function register_direct() {
        // Direct loading approach - no manifest needed
        $js_files = glob($this->plugin_dir . 'dist/assets/*.js');
        $css_files = glob($this->plugin_dir . 'dist/assets/*.css');
        
        // Register CSS files first
        foreach ($css_files as $index => $css_file) {
            if (!file_exists($css_file)) {
                continue;
            }
            
            $file_name = basename($css_file);
            $handle = 'mmc-anxiety_therapy-css-' . $index;
            
            wp_register_style(
                $handle,
                $this->plugin_url . 'dist/assets/' . $file_name,
                array(),
                filemtime($css_file)
            );
        }
        
        // Register JS files - tracking dependencies for proper loading order
        $deps = array();
        foreach ($js_files as $index => $js_file) {
            if (!file_exists($js_file)) {
                continue;
            }
            
            $file_name = basename($js_file);
            $handle = 'mmc-anxiety_therapy-js-' . $index;
            
            // The main file should depend on any other files
            if (strpos($file_name, 'main') !== false || strpos($file_name, 'index') !== false) {
                $main_handle = $handle;
                $main_file = $js_file;
                continue; // Skip for now, we'll register it last
            }
            
            wp_register_script(
                $handle,
                $this->plugin_url . 'dist/assets/' . $file_name,
                $deps,
                filemtime($js_file),
                true // Load in footer
            );
            
            // Add this script as a dependency for subsequent scripts
            $deps[] = $handle;
        }
        
        // Now register the main file with all dependencies
        if (isset($main_handle) && isset($main_file) && file_exists($main_file)) {
            $file_name = basename($main_file);
            
            wp_register_script(
                $main_handle,
                $this->plugin_url . 'dist/assets/' . $file_name,
                $deps,
                filemtime($main_file),
                true // Load in footer
            );
            
            // Add localized data for the main script
            wp_localize_script(
                $main_handle,
                'mmcChinesAnxiety TherapyData',
                $this->get_localized_data()
            );
        }
    }
    
    /**
     * Conditionally enqueue assets only when shortcode is used
     */
    public function maybe_enqueue_assets() {
        global $post;
        
        // Only load assets when the shortcode is used
        if (is_a($post, 'WP_Post') && has_shortcode($post->post_content, 'mmc_anxiety_therapy')) {
            // Enqueue all registered styles
            $styles = wp_styles();
            foreach ($styles->registered as $handle => $style) {
                if (strpos($handle, 'mmc-anxiety_therapy') === 0) {
                    wp_enqueue_style($handle);
                }
            }
            
            // Enqueue all registered scripts
            $scripts = wp_scripts();
            foreach ($scripts->registered as $handle => $script) {
                if (strpos($handle, 'mmc-anxiety_therapy') === 0) {
                    wp_enqueue_script($handle);
                }
            }
        }
    }
    
    /**
     * Get localized data for the React app
     * 
     * @return array
     */
    private function get_localized_data() {
        return apply_filters('mmc_anxiety_therapy_localized_data', array(
            'ajaxUrl' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('mmc_anxiety_therapy_nonce'),
            'homeUrl' => home_url(),
            'siteUrl' => site_url(),
            'pluginUrl' => $this->plugin_url,
            'restUrl' => rest_url(),
            'restNonce' => wp_create_nonce('wp_rest'),
        ));
    }
    
    /**
     * Shortcode to render the React app
     * 
     * @param array $atts Shortcode attributes
     * @return string HTML output
     */
    public function render_react_app($atts) {
        // Extract shortcode attributes
        $atts = shortcode_atts(array(
            'id' => 'mmc-anxiety_therapy-' . uniqid(), // Generate a unique ID
            'class' => '',
            'category' => '', // Optional category filter
        ), $atts, 'mmc_anxiety_therapy');
        
        // Build data attributes
        $data_attrs = '';
        foreach ($atts as $key => $value) {
            if ($key !== 'id' && $key !== 'class') {
                $data_attrs .= sprintf(' data-%s="%s"', esc_attr($key), esc_attr($value));
            }
        }
        
        // Return the container for the React app with both ID and class
        return sprintf(
            '<div id="%s" class="wp-react-app-container %s"%s>' . 
            '<noscript>' . esc_html__('JavaScript is required to view the ANXIETY_THERAPY content.', 'mmc-anxiety_therapy') . '</noscript>' .
            '<p class="react-loading-placeholder">%s</p>' .
            '</div>',
            esc_attr($atts['id']),
            esc_attr($atts['class']),
            $data_attrs,
            esc_html__('Loading ANXIETY_THERAPY content...', 'mmc-anxiety_therapy')
        );
    }
    
    /**
     * Add debugging script to the footer
     * Only loaded when WP_DEBUG is true
     */
    public function add_debug_script() {
        ?>
        <script>
        (function() {
            console.group('MMC ANXIETY_THERAPY Debug Information');
            
            document.addEventListener('DOMContentLoaded', function() {
                console.log('DOMContentLoaded triggered');
                
                // Check if containers exist
                const containers = document.querySelectorAll('.wp-react-app-container');
                console.log('Found ' + containers.length + ' React containers');
                
                // Check if our placeholder is still there after 5 seconds
                setTimeout(function() {
                    const placeholders = document.querySelectorAll('.react-loading-placeholder');
                    if (placeholders.length > 0) {
                        console.error('React app did not initialize. Placeholders still exist after 5 seconds.');
                        
                        // Check which scripts were loaded
                        const scripts = document.querySelectorAll('script');
                        const reactScripts = Array.from(scripts).filter(script => 
                            script.src && (script.src.includes('mmc-anxiety_therapy') || script.src.includes('dist/assets'))
                        );
                        
                        if (reactScripts.length === 0) {
                            console.error('No React scripts were loaded from the plugin');
                        } else {
                            console.log('React scripts:', reactScripts.map(s => s.src));
                        }
                    } else {
                        console.log('React app initialized successfully');
                    }
                }, 5000);
            });
            
            console.groupEnd();
        })();
        </script>
        <?php
    }
}

/**
 * Return the plugin instance
 * 
 * @return MMC_ANXIETY_THERAPY_App
 */
function mmc_anxiety_therapy_plugin() {
    return MMC_ANXIETY_THERAPY_App::get_instance();
}

// Initialize the plugin
mmc_anxiety_therapy_plugin();