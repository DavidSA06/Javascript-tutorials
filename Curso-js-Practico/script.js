// h1 { color: red }
// .parrafito { ... }
// #pid { ... }

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
//const parrafito = document.querySelector('.parrafito');
const parrafito = document.getElementsByClassName('parrafito');
//const pid = document.querySelector('#pid');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value);

console.log({
  h1,
  p,
  parrafito,
  pid,
  input,
}); //muestra una lista con los atributos de cada elemento

h1.innerHTML = 'Patito <br> Feo'; //modifica el html del elemento pero es inseguro
h1.innerText = 'Patito <br> Feo'; //modifica el texto del elemento para mayor seguridad
//console.log(h1.getAttribute('pantalla')); //obtiene el atributo del elemento
//h1.setAttribute('class', 'rojo'); //cambia el atributo del elemento

h1.classList.add('rojo'); //añade caracteres a la clase
h1.classList.remove('verde'); //quita los caracteres a la clase si existen
//h1.classList.toggle('rojo');  //intercambia 
//h1.classList.contains('rojo');  //devuelve un booleano dependiendo a la existencia

input.value = "456"; //mete un valor por defecto en el atributo que queramos

const img = document.createElement('img');
img.setAttribute('src', 'https://imgur.com/UeH54dK.jpg');
console.log(img);

//pid.innerHTML = ""; //borra el párrafo
pid.appendChild(img);