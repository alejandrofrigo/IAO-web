/* IAO public API endpoint; updated after live E2E verification. */
window.IAO_API_BASE = "https://emphasis-mic-sitemap-straight.trycloudflare.com";
window.iaoApiUrl = function (path) {
  return new URL(String(path).replace(/^\/+/, ""), window.IAO_API_BASE + "/").toString();
};
