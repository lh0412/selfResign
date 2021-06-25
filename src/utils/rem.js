function setRootFontSize() {
  var width = document.documentElement.clientWidth,
    fontSize;
  if (width > 750) {
    width = 750;
  }
  fontSize = (width / 750) * 100;
  document.getElementsByTagName("html")[0].style["font-size"] =
    fontSize + "px";
}
setRootFontSize();
window.addEventListener(
  "resize",
  function () {
    setRootFontSize();
  },
  false
);