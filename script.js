const image = document.getElementById('bouncingImage');
const jobs = document.querySelectorAll('#trabajos a');
const flipCard = document.querySelector('.flip-card')
const flipCardInner = document.querySelector('.flip-card-inner');
let bounceInterval;


window.onload = () => {
  checkHoverSupport();
  startBouncing();
};
window.addEventListener('resize', checkHoverSupport);


// Función para hacer "saltito"
function startBouncing() {
  bounceInterval = setInterval(() => {
    image.style.animation = 'bounce 0.5s'; // Añade la animación de salto
    setTimeout(() => {
      image.style.animation = ''; // Elimina la animación después de que termina
    }, 500);
  }, 3000);
}


function eliminarSaltos() {
  clearInterval(bounceInterval);
  image.style.animation = '';
}

function eventListenerImageMovil() {
  eliminarSaltos();
  flipCardInner.classList.toggle('clicked');
}


function checkHoverSupport() {
  if (window.matchMedia('(hover: hover)').matches) { //SI ESTÁ EN UN ORDENADOR
    for (let job of jobs) {
      job.style.setProperty('--width-before', '100%');
      job.style.removeProperty('color')
    }
    // Detener el "saltito" al hacer mouseover
    image.addEventListener('mouseover', eliminarSaltos);
    flipCard.removeEventListener('click', eventListenerImageMovil);
    document.body.classList.remove("movil");
    flipCardInner.classList.remove("clicked");

  } else {
    for (let job of jobs) {
      job.style.setProperty('--width-before', '0%');
      job.style.color = 'black';
    }
    // Detener el "saltito" al hacer click
    flipCard.addEventListener('click', eventListenerImageMovil);
    image.removeEventListener('mouseover', eliminarSaltos);
    document.body.classList.add("movil");
  }
}
