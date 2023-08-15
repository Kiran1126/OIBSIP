const outputResult = document.querySelector("#otpTmp");
const degree = document.querySelector("#inpTmp");
const convertBtn = document.querySelector("#convert-btn");
const temperatureType = document.querySelector("#tmpType");

window.addEventListener("load", () => {
    degree.value="";
    outputResult.innerHTML="";
});

convertBtn.addEventListener("click", (e) => {
    e.preventDefault();
    convertTmp();
    convertBtn.innerHTML = "<span>Converting...</span>";
    setTimeout(() => {
    convertBtn.innerHTML ="<span>Convert</span>"
  }, 1000);
});

function convertTmp() {
    let inputValue = degree.value;
    setTimeout( () => {
        if (temperatureType.value === "fahrenheit") {
            const FahrenheitToCelsius = (inputValue - 32) * (5 / 9);
            outputResult.innerHTML = `${FahrenheitToCelsius.toFixed(3)} &deg;c`;
        }
        else if (temperatureType.value === "celsius") {
            const CelsiusToFahrenheit = (inputValue * (9 / 5)) + 32;
            outputResult.innerHTML = `${CelsiusToFahrenheit.toFixed(3)} &deg;f`;
        }
    }, 1200);
}