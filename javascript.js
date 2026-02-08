// script.js
function calculateBMI() {
  let weight = document.getElementById('weight').value;
  let height = document.getElementById('height').value;

  if (weight === "" || height === "" || weight <= 0 || height <= 0) {
    alert("Please enter valid height and weight!");
    return;
  }

  // Convert height from cm to meters
  height = height / 100;

  // Calculate BMI
  let bmi = (weight / (height * height)).toFixed(1);

  // Display BMI
  document.getElementById('bmi-result').innerText = `Your BMI is ${bmi}`;

  // Determine category
  let category = "";
  if (bmi < 18.5) {
    category = "Underweight 😔";
  } else if (bmi < 24.9) {
    category = "Normal weight 😊";
  } else if (bmi < 29.9) {
    category = "Overweight 😐";
  } else {
    category = "Obese 😟";
  }

  document.getElementById('bmi-category').innerText = `Category: ${category}`;
}
