function formatCurrency(input) {
  let value = input.value.replace(/[^\d]/g, "");

  if (!value) {
    input.value = "";
    return;
  }

  let numberValue = parseFloat(value);

  input.value = "₱" + numberValue.toLocaleString("en-PH");
}
function incomeTaxCalculator() {

  let salary = document.getElementById("monthlySalary").value;

  salary = Number(salary.replace(/[^0-9]/g, ""));

  let tax = 0;

  if (salary <= 250000) {

  } else if (salary <= 400000) {
    tax = (salary - 250000) * 0.20;
  } else if (salary <= 800000) {
    tax = 30000 + (salary - 400000) * 0.25;
  } else if (salary <= 2000000) {
    tax = 130000 + (salary - 800000) * 0.30;
  } else if (salary <= 8000000) {
    tax = 490000 + (salary - 2000000) * 0.32;
  } else {
    tax = 2410000 + (salary - 8000000) * 0.35;
  }

  tax = tax.toLocaleString("en-PH", {
    style: "currency",
    currency: "PHP"})

  document.getElementById("incomeTax").value = tax;
}
