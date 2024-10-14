let person = {
  firstName: "Jonathan",
  weight: 62,
  height: 1.75,
  CalculateBMI: function () {
    return this.weight / (this.height * this.height);
  },
  displayInfo: function (bmi, category) {
    console.log("Berat: " + this.weight + " kg");
    console.log("Tinggi: " + this.height + " m");
    console.log("BMI: " + bmi.toFixed(2));
    console.log("Kategori: " + category);
  },
  checkBMICategory: function () {
    let bmi = this.CalculateBMI();
    let category = "";

    if (bmi >= 40.0) {
      category = "Morbidly Obese";
    } else if (bmi >= 35.0 && bmi <= 39.9) {
      category = "Severely Obese";
    } else if (bmi >= 30.0 && bmi <= 34.9) {
      category = "Moderately Obese";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
      category = "Overweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      category = "Normal";
    } else if (bmi >= 16.0 && bmi <= 18.4) {
      category = "Underweight";
    } else {
      category = "Severely Underweight";
    }

    this.displayInfo(bmi, category);
  },
};

person.checkBMICategory();
