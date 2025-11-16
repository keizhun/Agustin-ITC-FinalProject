function factorial() {
  let i = 1;
  const n = parseInt(document.getElementById("factorialInput").value);
  let factorial = 1;

  if (n <= 1){
    factorial = 1;
  } else {
    while (i <= n) {
      factorial *= i;
      i++;
    }
  }

  document.getElementById("factorialOutput").value = factorial;
}
