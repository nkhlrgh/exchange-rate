// var readlineSync = require("readline-sync");

var url = "https://v6.exchangerate-api.com/v6/8bd5a86627129321d9e69b79/latest/";

var baseInput = document.querySelector("#base-currency");

var convertInput = document.querySelector("#convert-currency");

function constructUrl(inp) {
  return url + inp;
}

function con() {
  return baseInput.value;
}

function changeHandler() {
  var baseCurrency = con();
  var final = convertInput.value;
  fetch(constructUrl(baseCurrency))
    .then((response) => response.json())
    .then((json) => {
      console.log(json.conversion_rates[final]);
    });
}

baseInput.addEventListener("change", con);

convertInput.addEventListener("change", changeHandler);
