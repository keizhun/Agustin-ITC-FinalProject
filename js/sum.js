function sum() {
  let i = 1;
  const n = parseInt(document.getElementById("sumInput").value);
  let sum = 0;

if (n > 0) {
  do {
    sum += i;
    i++;
  } while (i <= n)
} else {
  sum = 0
}
  document.getElementById("sumOutput").value = sum;
}
