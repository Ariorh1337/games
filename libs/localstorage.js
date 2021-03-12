export default function iframeLocalStorageFix() {
  try {
    window.localStorage;
    window.$localStorage = window.localStorage;
  } catch (error) {
    window.$localStorage = new Object();
    window.$localStorage.setItem = function (name, value) {
      this[name] = value;
    };
    window.$localStorage.getItem = function (name) {
      return this[name];
    };
    window.$localStorage.removeItem = function (name) {
      delete this[name];
      return this;
    };
  }
}
