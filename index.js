const calculateTemp = () => {
    const input = document.getElementById('temp').value;

    const temperature = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[temperature.selectedIndex].value;

    // Celsius to Fahrenheit
    const cToF = (cel) => {
        let fahrenheit = ((cel * 9 / 5) + 32).toFixed(1);
        return fahrenheit;
    }

    // Fahrenheit to Celsius
    const fToC = (fah) => {
        let celsius = ((fah - 32) * 5 / 9).toFixed(1);
        return celsius;
    }

    if (valueTemp == 'cel') {
        document.getElementById("result").innerHTML = cToF(input) + "&#176; Fahrenheit";
    }
    else {
        document.getElementById("result").innerHTML = fToC(input) + "&#176; Celsius";
    }
}
