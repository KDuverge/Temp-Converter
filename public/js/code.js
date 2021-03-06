let celciusInput = document.querySelector("#celcius > input");
let farenheightInput = document.querySelector("#farenheight > input");
let kelvinInput = document.querySelector("#kelvin > input");

var roundNum = num => Math.round(num * 100)/100;

var cToFtoKelvin = () => {
    const cTemp = parseFloat(celciusInput.value);
    const fTemp = (cTemp * (9/5) + 32);
    const kTemp = cTemp + 273.15;
    farenheightInput.value = roundNum(fTemp);
    kelvinInput.value = roundNum(kTemp);
}

var ftoCtoKelvin = () => {
    const fTemp = parseFloat(farenheightInput.value);
    const cTemp = (fTemp - 32) * (5/9);
    const kTemp = (fTemp + 459.67) * (5/9);
    celciusInput.value = roundNum(cTemp);
    kelvinInput.value = roundNum(kTemp);
}

var kToFtoCelcius = () => {
    const kTemp = parseFloat(kelvinInput.value);
    const cTemp = kTemp - 273.15;
    const fTemp = 9/5 * (kTemp - 273) + 32;
    celciusInput.value = roundNum(cTemp);
    farenheightInput.value = roundNum(fTemp);
}

var main = () => {
    celciusInput.addEventListener("input", cToFtoKelvin);
    farenheightInput.addEventListener("input", ftoCtoKelvin);
    kelvinInput.addEventListener("input", kToFtoCelcius);
}


main();