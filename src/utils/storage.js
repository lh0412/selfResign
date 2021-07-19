export default {
  put: function (key, value) {
    window.sessionStorage.setItem(key, value);
  },

  get: function (key) {
    return window.sessionStorage.getItem(key);
  },

  remove: function (key) {
    return window.sessionStorage.removeItem(key);
  },

  clear: function () {
    window.sessionStorage.clear();
  }
}