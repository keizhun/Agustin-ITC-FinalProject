function feetToMeters() {
  let ft = document.getElementById("textFeet").value;
  const m = ft * 0.3048;

  document.getElementById("textMeter").value = m.toFixed(2);
}
