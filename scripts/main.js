//clase peliculas
class Peliculas {

    //funcion constructora
    constructor(detalles) {
      this.nombre = detalles.nombre;
      this.genero = detalles.genero;
      this.anio = detalles.anio;
      this.img = detalles.img;
    }
}

//creacion de objetos (peliculas y series)
const breakingBad = new Peliculas ({nombre: "Breaking Bad", genero: "Drama", anio: 2008, img: "image/index/bbad.png"});
const wallE = new Peliculas ({nombre: "Wall-E", genero: "Drama", anio: 2009, img: "image/index/walle.png"});
const shrek = new Peliculas ({nombre: "Shrek", genero: "Drama", anio: 2004, img: "image/index/shrek.png"});
const fragmentado = new Peliculas ({nombre: "Fragmentado", genero: "Drama", anio: 2015, img: "image/index/fragmentado.png"});
const silenceinocentes = new Peliculas ({nombre: "El silencio de los Inocentes", genero: "Drama", anio: 1998, img: "image/index/silenceinocentes.png"});
const toyStory4 = new Peliculas ({nombre: "Toy Story 4", genero: "Aventuras", anio: 2019, img: "image/index/toy.png"});
const elOrigen = new Peliculas ({nombre: "El Origen", genero: "Thriller", anio: 2008, img: "image/index/elorigen.png"});
const sextoSentido = new Peliculas ({nombre: "Sexto Sentido", genero: "Drama", anio: 1994, img: "image/index/sextosentido.png"});
const avengers3 = new Peliculas ({nombre: "Avengers Infinity War", genero: "Drama", anio: 2019, img: "image/index/infinity.png"});
const harryPotter = new Peliculas ({nombre: "Harry Potter 7", genero: "Aventuras", anio: 2008, img: "image/index/hp.png"});
const esdla = new Peliculas ({nombre: "El señor de los anillos", genero: "Epica", anio: 2005, img: "image/index/esdla.png"});
const coco = new Peliculas ({nombre: "Coco", genero: "Aventuras", anio: 2014, img: "image/index/coco.png"});
const goodDoctor = new Peliculas ({nombre: "The Good Doctor", genero: "Drama", anio: 2019, img: "image/index/gooddcotor.png"});
const batesMotel = new Peliculas ({nombre: "Bates Motel", genero: "Suspenso", anio: 2019, img: "image/index/bates.png"});
const dexter = new Peliculas ({nombre: "Dexter", genero: "Drama", anio: 2008, img: "image/index/dexter.png"});
const avengers4 = new Peliculas ({nombre: "Avengers Endgame", genero: "Accion", anio: 2018, img: "image/index/endgame.png"});

const movies = [];

//push al array
movies.push(breakingBad, wallE, shrek, fragmentado, silenceinocentes, toyStory4, elOrigen, sextoSentido, avengers3, harryPotter, esdla, coco, goodDoctor, batesMotel, dexter, avengers4);


//insertar en el DOM todas las peliculas/series del array
for(const movie of movies) {

    let newMovie = document.createElement('div');

    newMovie.innerHTML =  `
    <img src= ${movie.img} class="foto" />
    <p>${movie.nombre} (${movie.anio})</p>

    `

    document.getElementById("oneMovie").append(newMovie);
    newMovie.classList.add("contenedorImg");
}

let contenido = document.getElementById("oneMovie");


contenido.addEventListener("click", verContenido);

//funcion que redirige al html de LOGIN

function verContenido() {

    let movies = document.getElementById("contenedorMovies");
    movies.parentNode.removeChild(movies);
    //agregar elementos
    let nuevoContenido = document.createElement("div");
    nuevoContenido.innerHTML = `<p>Para poder acceder a este contenido debe iniciar sesion </p>
    <a href="pags/login.html">Ir a login</a>`

    nuevoContenido.className = "info-mensaje";
    document.getElementById("mensajeLogin").append(nuevoContenido);
    
}