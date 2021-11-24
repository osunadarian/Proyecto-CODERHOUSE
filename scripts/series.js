//clase peliculas
class Serie {

    //funcion constructora
    constructor(detalles) {
      this.nombre = detalles.nombre;
      this.genero = detalles.genero;
      this.anio = detalles.anio;
      this.img = detalles.img;
    }
}

const bigMouth = new Serie ({nombre: "Big Mouth", genero: "Aventuras", anio: 2008, img: "../image/series/bigmouth.png"});
const blackSummer = new Serie ({nombre: "Black Summer", genero: "Aventuras", anio: 2008, img: "../image/series/blacksummer.png"});
const castle = new Serie ({nombre: "Castlevania", genero: "Aventuras", anio: 2008, img: "../image/series/castle.png"});
const ftwd = new Serie ({nombre: "Fear Walking Dead", genero: "Aventuras", anio: 2008, img: "../image/series/ftwd.png"});
const gravity = new Serie ({nombre: "Gravity Falls", genero: "Aventuras", anio: 2008, img: "../image/series/gravity.png"});
const haunted = new Serie ({nombre: "Haunted", genero: "Aventuras", anio: 2008, img: "../image/series/haunted.png"});
const impulse = new Serie ({nombre: "Impulse", genero: "Aventuras", anio: 2008, img: "../image/series/impulse.png"});
const invincible = new Serie ({nombre: "Invincible", genero: "Aventuras", anio: 2008, img: "../image/series/invincible.png"});
const legion = new Serie ({nombre: "Legion", genero: "Aventuras", anio: 2008, img: "../image/series/legion.png"});
const mandalorian = new Serie ({nombre: "The Mandalorian", genero: "Aventuras", anio: 2008, img: "../image/series/mandalorian.png"});
const marianne = new Serie ({nombre: "Marianne", genero: "Aventuras", anio: 2008, img: "../image/series/marianne.png"});
const nationz = new Serie ({nombre: "Nation Z", genero: "Aventuras", anio: 2008, img: "../image/series/nationz.png"});
const ozark = new Serie ({nombre: "Ozark", genero: "Aventuras", anio: 2008, img: "../image/series/ozark.png"});
const punisher = new Serie ({nombre: "The Punisher", genero: "Aventuras", anio: 2008, img: "../image/series/punisher.png"});
const rickmorty = new Serie ({nombre: "Rick and Morty", genero: "Aventuras", anio: 2008, img: "../image/series/rickmorty.png"});
const riverdale = new Serie ({nombre: "Riverdale", genero: "Aventuras", anio: 2008, img: "../image/series/riverdale.png"});
const simpsons = new Serie ({nombre: "The Simpsons", genero: "Aventuras", anio: 2008, img: "../image/series/simpsons.png"});
const supernatural = new Serie ({nombre: "Supernatural", genero: "Aventuras", anio: 2008, img: "../image/series/supernatural.png"});

const series1 = [];
const series2 = [];

series1.push(bigMouth,blackSummer,castle,ftwd,gravity,haunted,impulse,invincible,castle,legion,mandalorian,marianne,nationz,ozark,punisher,rickmorty,riverdale,simpsons,supernatural);
series2.push(marianne,nationz,ozark,punisher,rickmorty,riverdale,simpsons,supernatural,bigMouth,blackSummer,castle,ftwd,gravity,haunted,impulse,invincible,castle,legion,mandalorian,);

//insertar en el DOM todas las peliculas/series del array
for(const serie of series1) {

    $(".boxSerie").append(`<div class="contenidoSerie"> 
    <img src= ${serie.img} class="fotoPortada">
    <p class="nombreSerie">${serie.nombre}</p>
    </div>`);

}

for(const serie of series2) {

    $(".boxSerie2").append(`<div class="contenidoSerie"> 
    <img src= ${serie.img} class="fotoPortada">
    <p class="nombreSerie">${serie.nombre}</p>
    </div>`);

}

$(document).ready(function()
{

    const fila = document.querySelector(".boxSerie");
    const fila2 = document.querySelector(".boxSerie2");

    const flechaIzquierda = $('#flechaIzquierda');
    const flechaDerecha = $('#flechaDerecha');
    const flechaIzquierda2 = $('#flechaIzquierda2');
    const flechaDerecha2 = $('#flechaDerecha2');


    flechaDerecha.click(function() {

        fila.scrollLeft += 200;

    });

    flechaIzquierda.click(function() {

        fila.scrollLeft -= 200;

    })

    flechaDerecha2.click(function() {

        fila2.scrollLeft += 200;

    })

    flechaIzquierda2.click(function() {

        fila2.scrollLeft -= 200;

    })


    $("#botonDescripcion").click( () => {

        $("#infoLost").toggle("slow")
        .css("font-size","1.5rem")
        .css("color","white")
        .css("visibility","initial");

    })



});
