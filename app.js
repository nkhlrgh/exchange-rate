// var readlineSync = require("readline-sync");

var url = "https://v6.exchangerate-api.com/v6/8bd5a86627129321d9e69b79/latest/";

var baseInput = document.querySelector("#base-currency");

var convertInput = document.querySelector("#convert-currency");

var baseValue = document.querySelector("#base-value");

var convertValue = document.querySelector("#convert-value");

function constructUrl(inp) {
  return url + inp;
}

function con() {
  return baseInput.value;
}

function changeHandler() {
  var baseCurrency = con();
  var final = convertInput.value;
  var value1 = baseValue.value;
  fetch(constructUrl(baseCurrency))
    .then((response) => response.json())
    .then((json) => {
      var converted = json.conversion_rates[final];
      convertValue.innerText = value1 * converted;
    });
}

baseInput.addEventListener("change", con);

btn.addEventListener("click", changeHandler);
