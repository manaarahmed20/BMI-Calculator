function calculateBMI() {
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    if (height > 0 && weight > 0) {
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        document.getElementById('bmi-value').textContent = bmi;

        let status = '';
        if (bmi < 18.5) {
            status = 'You are Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            status = 'You have Normal weight';
        } else if (bmi >= 25 && bmi < 29.9) {
            status = 'You are Overweight';
        } else {
            status = 'You are Obese';
        }
        document.getElementById('bmi-status').textContent = status;
    } else {
        alert('Please enter valid height and weight');
    }
}
