function celToFahr() {
  var c = document.getElementById("textCelsius").value;
  var f = ((9/5) * c) + 32;

  document.getElementById("textFahr").value = f.toFixed(2) + "°";
}
