function calculateBMI() {
    var height = Number(document.getElementById("height").value);
    var weight = Number(document.getElementById("weight").value);

    var BMI = weight / Math.pow(height, 2);

    document.getElementById("result").innerHTML = "YOUR BMI IS " + Math.round(BMI * 100)/100;
    if (BMI < 18.5) document.getElementById("stats").innerHTML = "YOU ARE IN THE UNDERWEIGHT RANGE";
    if (BMI >= 18.5 && BMI <= 25) document.getElementById("stats").innerHTML = "YOU ARE IN THE NORMAL WEIGHT RANGE";
    if (BMI >= 25 && BMI <= 30) document.getElementById("stats").innerHTML = "YOU ARE IN THE OBESE WEIGHT RANGE";
    if (BMI > 30) document.getElementById("stats").innerHTML = "YOU ARE IN THE OVERWEIGHT RANGE";
    document.getElementById("calculation").value = result;
}