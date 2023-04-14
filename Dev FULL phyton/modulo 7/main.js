var numberA = document.getElementById("numberA");
var numberB = document.getElementById("numberB");

function validNumber(numberA, numberB) {
  var a = parseInt(numberA.value);
  var b = parseInt(numberB.value);

  if (b > a) {
    alert("Esta correto o numero B e maior que numero A");
  } else if (a === b) {
    alert("Incorreto os numeros sao iguais");
  } else {
    alert("Incorreto o numero A e maior que o numero B");
  }
}

var form = document.getElementById("form");
form.addEventListener('submit', function(event) {
  event.preventDefault(); // impedir o envio do formulário
  validNumber(numberA, numberB); // chamar a função
});

