// assets/js/analytics.js

// Initialize dataLayer for GTM
window.dataLayer = window.dataLayer || [];

/**
 * Pushes arguments into the dataLayer, as required by gtag.js
 * @param {...*} args
 */
function gtag(){
  dataLayer.push(arguments);
}

// Load the analytics library and configure with your ID
gtag('js', new Date());
gtag('config', 'G-15WZ45EJ6N');