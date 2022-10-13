const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

// form.addEventListener('submit', sumarInputValues); //el ultimo boton de un form es tipo submit

// function sumarInputValues() {
//   //console.log({event});
//   event.preventDefault(); //evitar que la página se reinicie
//   const sumaInputs = input1.value + input2.value;
//   pResult.innerText = "Resultado: " + sumaInputs;
// }

btn.addEventListener('click', sumarInputValues);  //si escribimos explicitamente el tipo boton podemos dejarlo como estaba:

function sumarInputValues() {
  //console.log({event});
  event.preventDefault(); //evitar que la página se reinicie
  const sumaInputs = input1.value + input2.value;
  pResult.innerText = "Resultado: " + sumaInputs;
}