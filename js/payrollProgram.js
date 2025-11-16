var payroll = [];
function formatCurrency(input) {
  let value = input.value.replace(/[^\d]/g, "");

  if (!value) {
    input.value = "";
    return;
  }

  let numberValue = parseFloat(value);

  input.value = "₱" + numberValue.toLocaleString("en-PH");
}
function parseCurrency(input) {
  return parseFloat(input.value.replace(/[^\d.-]/g, ""));
}
function showEmployees() {
  let tb = "";
  let ln = 1;

  let totalGross = 0;
  let totalDeduction = 0;
  let totalNet = 0;

  for (let emp of payroll) {
    tb += "<tr>"
      + "<td class='numdata'>" + ln + "</td>"
      + "<td>" + emp.name + "</td>"
      + "<td class='numdata'>" + emp.daysworked + "</td>"
      + "<td class='numdata'>₱" + emp.dailyrate.toLocaleString("en-PH", {minimumFractionDigits: 2}) + "</td>"
      + "<td class='numdata'>₱" + emp.grosspay.toLocaleString("en-PH", {minimumFractionDigits: 2}) + "</td>"
      + "<td class='numdata'>₱" + emp.deduction.toLocaleString("en-PH", {minimumFractionDigits: 2}) + "</td>"
      + "<td class='numdata'>₱" + emp.netpay.toLocaleString("en-PH", {minimumFractionDigits: 2}) + "</td>"
      + "</tr>";

    totalGross += emp.grosspay;
    totalDeduction += emp.deduction;
    totalNet += emp.netpay;

    ln++;
  }

  document.getElementById("tableBody").innerHTML = tb;

  document.getElementById("tGrossPay").innerHTML = "₱" + totalGross.toLocaleString("en-PH", {minimumFractionDigits: 2});
  document.getElementById("tDeduction").innerHTML = "₱" + totalDeduction.toLocaleString("en-PH", {minimumFractionDigits: 2});
  document.getElementById("tNetPay").innerHTML = "₱" + totalNet.toLocaleString("en-PH", {minimumFractionDigits: 2});
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btnAdd").addEventListener("click", () => {
    let name = document.getElementById("textEmpName").value.trim();
    let days = parseCurrency(document.getElementById("textDaysWorked"));
    let rate = parseCurrency(document.getElementById("textDailyRate"));
    let ded  = parseCurrency(document.getElementById("textDeduction"));

    if (name === "" || isNaN(days) || isNaN(rate) || isNaN(ded)) {
      alert("Complete all fields");
      return;
    }

    let gross = days * rate;
    let net = gross - ded;

    payroll.push({
      name: name,
      daysworked: days,
      dailyrate: rate,
      grosspay: gross,
      deduction: ded,
      netpay: net
    });

    showEmployees();

    document.getElementById("textEmpName").value = "";
    document.getElementById("textDaysWorked").value = "";
    document.getElementById("textDailyRate").value = "";
    document.getElementById("textDeduction").value = "";
  });

  const dlgDelete = document.getElementById("dlgDelete");
  const dlgDeleteMsg = document.getElementById("dlgDeleteMsg");
  const dlgDeleteAllConfirm = document.getElementById("dlgDeleteAllConfirm");

  let deleteIndex = -1;

  document.getElementById("btnDelete").addEventListener("click", () => {
    let num = parseInt(document.getElementById("textDeleteNo").value);
    if (isNaN(num) || num < 1 || num > payroll.length) return;

    deleteIndex = num - 1;

    dlgDeleteMsg.innerHTML =
      "Delete Employee No. " + num + "<br><br>" + payroll[deleteIndex].name;

    dlgDelete.showModal();
  });

  document.getElementById("btnDeleteAll").addEventListener("click", () => {
    deleteIndex = -999;
    dlgDeleteMsg.innerHTML = "Clear all payroll records?";
    dlgDelete.showModal();
  });

  dlgDelete.addEventListener("close", () => {
    if (dlgDelete.returnValue === "confirm") {
      if (deleteIndex === -999) {
        dlgDeleteAllConfirm.showModal();
      } else if (deleteIndex >= 0) {
        payroll.splice(deleteIndex, 1);
        showEmployees();
      }
    }

    document.getElementById("textDeleteNo").value = "";
  });

  dlgDeleteAllConfirm.addEventListener("close", () => {
    if (dlgDeleteAllConfirm.returnValue === "yes") {
      payroll = [];
      showEmployees();
    }
  });
});
