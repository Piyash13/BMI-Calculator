function bmiCalculate() {
  let height = parseFloat(document.getElementById("height").value);
  let weight = parseFloat(document.getElementById("weight").value);
  let result = document.getElementById("result");
  let clasification = "";

  let bmi = weight / (height / 100) ** 2;
  bmi = bmi.toFixed(2);
  if (bmi < 16) {
    clasification = "Good";
  } else if (bmi > 16 && bmi < 18) {
    clasification = "Very Good";
  } else if (bmi < 18 && bmi > 22) {
    clasification = "Okayyyyyyy";
  } else if (bmi < 22 && bmi > 24) {
    clasification = "Healthy";
  } else if (bmi > 25) {
    clasification = "Overweight";
  }

  result.innerHTML = `BMI Range : ${bmi} | ${clasification}`;
}
