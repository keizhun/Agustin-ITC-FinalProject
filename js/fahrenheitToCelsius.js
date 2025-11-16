function fahrToCel() {
  var f = document.getElementById("textFahr").value;
  var c = (f - 32) * 5/9;

  document.getElementById("textCelsius").value = c.toFixed(2) + "°";
}
