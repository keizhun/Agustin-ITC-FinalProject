function average() {
  const n = parseInt(document.getElementById("averageInput").value);
  let average = 0;
  let sum = 0;

  if (isNaN(n) || n < 1) {
    average = 0;
  } else {
    for(let i = 1; i <= n; i++) {
      sum += i;
    }
    average = sum / n;
  }

  document.getElementById("averageOutput").value = average;
}
