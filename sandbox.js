let gascalulate = document.getElementById("gascalulate");
let tipCalculate = document.getElementById("tipCalculate");
let paycheckCalculate = document.getElementById("paycheckCalculate");
let gradeCalculate = document.getElementById("gradeCalculate");

document.getElementById("gasCalculate").addEventListener("click", function () {
  gaspriceinput = document.getElementById("gasPriceinput").value;
  gastankinput = document.getElementById("gasTankinput").value;

  let gasCostoutput = gaspriceinput * gastankinput;

  document.getElementById("gasCostoutput").textContent = gasCostoutput;
});

document.getElementById("tipCalculate").addEventListener("click", function () {
  billAmountinput = document.getElementById("billAmountinput").value;
  tipPercentage = document.getElementById("tipPercentageinput").value;

  let tipAmountoutput = billAmountinput * tipPercentage;

  document.getElementById("tipAmountoutput").textContent = tipAmountoutput;
});

document.getElementById("gradeCalculate").addEventListener("click", function () {
    gradePointsEarnedinput = document.getElementById("gradePointsEarnedinput").value;
    totalPointsinput = document.getElementById("totalPointsinput").value;
    let gradePercentage = (gradePointsEarnedinput / totalPointsinput) * 100;
    document.getElementById("gradePercentage").textContent =
      gradePercentage.toFixed(2) + "%";
  });


  
document
  .getElementById("paycheckCalculate")
  .addEventListener("click", function () {
    hoursWorkedinput = document.getElementById("hoursWorkedinput").value;
    hourlyRateinput = document.getElementById("hourlyRateinput").value;
    let paycheckAmount = hoursWorkedinput * hourlyRateinput;
    document.getElementById("paycheckAmount").textContent = paycheckAmount;
  });