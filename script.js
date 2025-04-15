//dom

const horas = document.querySelector("#horas");
const minutos = document.querySelector("#minutos");
const segundos = document.querySelector("#segundos");
const calendario = document.querySelector('#data')
const fundo = document.querySelector('body')

const relogio = setInterval(() => {
  let sistema = new Date();

  let hr = sistema.getHours();
  let min = sistema.getMinutes();
  let seg = sistema.getSeconds();
  let dataDeHoje = sistema.toLocaleDateString('pt-br')

  if (hr < 10) {
    hr = "0" + hr;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (seg < 10) {
    seg = "0" + seg;
  }

  if(hr>=18 && hr<5){
    fundo.classList.add('darkMode')
  }
  else{
    fundo.classList.remove('darkMode')
  }

  horas.textContent = hr;

  minutos.textContent = min;

  segundos.textContent = seg;

  calendario.textContent = dataDeHoje

}, 1000);