/**
 * Cachebuster.js
 * A library to manage cachebust_id parameters for cache control
 */

(function() {
  'use strict';

  // Generate a UUID v4
  function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  // Parse URL and get search parameters
  function getURLParams() {
    const url = new URL(window.location.href);
    return {
      url: url,
      params: url.searchParams
    };
  }

  // Main cachebuster function
  function cachebust() {
    const { url, params } = getURLParams();
    const cachebustId = params.get('cachebust_id');

    if (!cachebustId) {
      // Parameter is absent - add it and redirect
      const uuid = generateUUID();
      params.set('cachebust_id', uuid);
      url.search = params.toString();
      window.location.href = url.toString();
    } else {
      // Parameter is present - remove it without redirecting
      params.delete('cachebust_id');
      url.search = params.toString();
      
      // Update URL in browser without reloading
      if (window.history && window.history.replaceState) {
        window.history.replaceState({}, '', url.toString());
      }
    }
  }

  // Auto-execute on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', cachebust);
  } else {
    cachebust();
  }

  // Export for manual usage if needed
  window.Cachebuster = {
    run: cachebust,
    generateUUID: generateUUID
  };
})();
