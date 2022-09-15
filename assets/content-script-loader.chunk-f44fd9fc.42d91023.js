(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/chunk-f44fd9fc.js")
    );
  })().catch(console.error);

})();
