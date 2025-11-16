function metersToFeet() {
  let m = document.getElementById("textMeter").value;
  let ft = m * 3.28084;

  document.getElementById("textFeet").value = ft.toFixed(2);
}
