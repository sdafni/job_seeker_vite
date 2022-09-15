(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/chunk-ed9c6f89.js")
    );
  })().catch(console.error);

})();
