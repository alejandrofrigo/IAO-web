/* IAO public API endpoint; health and CORS verified. */
window.IAO_API_BASE = "https://undo-propose-roses-captain.trycloudflare.com";
window.iaoApiUrl = function (path) {
  return new URL(String(path).replace(/^\/+/, ""), window.IAO_API_BASE + "/").toString();
};
