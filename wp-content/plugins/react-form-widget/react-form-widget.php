<?php
/**
 * Plugin Name: React Contact Form Widget
 * Description: A dynamic React form rendered inside a shortcode or widget.
 * Version: 1.0
 * Author: Your Name
 */

if (!defined('ABSPATH')) exit;

// Load React bundle
function rcw_enqueue_scripts() {
    wp_enqueue_script(
        'react-form-widget-js',
        plugin_dir_url(__FILE__) . 'dist/widget.js',
        array(),
        '1.0',
        true
    );

    wp_enqueue_style(
        'react-form-widget-css',
        plugin_dir_url(__FILE__) . 'dist/widget.css'
    );
}
add_action('wp_enqueue_scripts', 'rcw_enqueue_scripts');

// Shortcode: [react_contact_form fields="..." theme="dark"]
function rcw_render_shortcode($atts) {
    $theme = $atts['theme'] ?? 'light';
    $fields = $atts['fields'] ?? '[]';

    return '<div id="react-form-widget" class="my-react-form-widget"
            data-theme="' . esc_attr($theme) . '"
            data-fields=\'' . $fields . '\' ></div>';
}
add_shortcode('react_contact_form', 'rcw_render_shortcode');
