import { Component } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  //ejemplo varios elementos con varios atributos
  //'.cuadro {background-color: red; width: 50px; height: 50px;} p {color:green;}'
  styles: ['*{margin: 0%;} .juego{display: grid; grid-template-rows: 1.5fr 1fr 18fr 1fr 4fr; grid-template-columns: 1fr 20fr 1fr;} .mensaje{align-self: center; justify-self: center; grid-column: 1/4; grid-row: 1/2; font-size: 2em;} .zoomIn{align-items: center; justify-self: center; grid-column: 2/3; grid-row: 2/3;} .zoomIn button{background-color:white;} .zoomIn i {font-size: 3em} .izquierda{justify-self: end; align-self: center; grid-column: 1/2; grid-row: 3/4; margin-right: -200%; z-index: 3;} .izquierda button{background-color:white;} .izquierda i {font-size: 20em} .pantalla{ align-self: center; justify-self: center; grid-column: 2/3; grid-row: 3/4;} .derecha{justify-self: center; align-self: center; align-self: center; grid-column: 3/4; grid-row: 3/4;margin-left: -400%; z-index: 3; } .derecha button{background-color:white;} .derecha i {font-size: 20em} .zoomOut{ justify-self: center; grid-column: 2/3; grid-row: 4/5;} .zoomOut button{background-color:white;} .zoomOut i {font-size: 3em} .inventario{align-self: center; justify-self: center; grid-column: 2/3; grid-row: 5/6; width: 50%; } .celdas{ display: grid; grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; grid-template-rows: 1fr; height:150px; background-color: black; border-radius: 100px;} .celda1{justify-self: center; align-self: center; grid-column: 2/3;} .celda2{justify-self: center; align-self: center; grid-column: 3/4;} .celda3{justify-self: center; align-self: center; grid-column: 4/5;} .celda4{justify-self: center; align-self: center; grid-column: 5/6;} .llave {position: absolute; margin-left: -600px; margin-top: 800px; z-index: 2; height: 50px;} .goya {position: absolute; margin-left: -1100px; margin-top: 200px; z-index: 2; height: 600px;} .rollo {position: absolute; margin-left: -525px; margin-top: 600px; z-index: 2; height: 150px;} .pomo {position: absolute; margin-left: -1200px; margin-top: 125px; z-index: 2; height: 925px; width: 500px} .cartel {position: absolute; margin-left: -550px; margin-top: 200px; z-index: 2; height: 350px;} .obtenido{height: 150px;}']
})

export class PruebaComponent {
  public title = "Bienvenido Jugador";
  // public fondo = Nivel1;
  // public fondoRotar:Array<Nivel1>;
  fondos = [
    '/assets/fondos/fondo0.png',
    '/assets/fondos/fondo1.png',
    '/assets/fondos/fondo2.png',
    '/assets/fondos/fondo3.png',
  ];

  zooms = [
    'assets/zooms/zoom0.png',
    'assets/zooms/zoom1.png',
    'assets/zooms/zoom2.png',
    'assets/zooms/zoom3.png',
  ];

  objetos = [
    'assets/objetos/goya.png',
    'assets/objetos/llave.png',
    'assets/objetos/rollo.png',
    'assets/objetos/palanca.png',
    'assets/objetos/vacio.png',
    'assets/objetos/cartel.png',
  ];
  comentarios =[
    "*Sonido de cerrar puerta* Oh no! Me quedado dormido en la entrega de premios, debo encontrar el rollo de mi pelicula, mi premio y un cartel de recuerdo",
    "Esto es una palanca",
    "Aun me faltan cosas",
    "Escapaste",
  ]
  // crear variables para mostrar/ocultar y variables para añadir al inventario
  // si añadirInventario es false (if añadir false: mostrar llave, al hacer click en llave añadirInventario true y mostrar false)
  currentComentario;
  currentImage;
  botonZoom;
  botonVolver;
  botonLados;
  //objetos mostrar
  mostrarLlave;
  mostrarGoya;
  mostrarRollo;
  mostrarCartel;
  //objetos inventario
  cogerLlave;
  cogerGoya;
  cogerRollo;
  cogerCartel;

  //puerta
  mostrarPomo;
  salirPuerta;


  constructor() {
    this.currentImage = this.fondos[0];
    this.botonZoom = true;
    this.botonVolver = false;
    this.botonLados = true;
    this.currentComentario = this.comentarios[0];

    this.mostrarLlave = false;
    this.cogerLlave = false;

    this.mostrarGoya = false;
    this.cogerGoya = false;

    this.mostrarRollo = false;
    this.cogerRollo = false;

    this.mostrarCartel = false;
    this.cogerCartel = false;

    // this.mostrarPalanca = false;
    // this.añadirPalanca = false;


    this.mostrarPomo = false
    this.salirPuerta = false;

  }

  Escapar(){
    if(this.cogerLlave==true && this.cogerGoya==true && this.cogerRollo && this.cogerCartel){
      this.currentComentario = this.comentarios[3]
      this.currentComentario = "ESCAPASTE!!! Hasta nunca Auditorio Príncipe Felipe"
      this.currentImage = 'assets/fondos/auditorio.jpg'
      this.botonZoom = false;
      this.salirPuerta = true;
      this.botonLados = false;
      this.botonVolver = false;


      console.log(this.cogerLlave, this.cogerGoya, this.cogerRollo)
    }else{
      this.currentComentario = "No puedo irme sin mis cosas y la llave de la puerta"
      console.log(this.cogerLlave)

    }
    
  }
  recogerLlave(){
    this.mostrarLlave = false
    this.cogerLlave = true
    this.currentComentario = "Has recogido una llave"


  }
  recogerGoya(){
    this.mostrarGoya = false;
    this.cogerGoya = true;
    this.currentComentario = "Has recogido el Goya de la basura"


  }
  recogerRollo(){
    this.mostrarRollo = false;
    this.cogerRollo = true;
    this.currentComentario = "Has recogido el rollo de pelicula"

  }

  recogerCartel(){
    this.mostrarCartel = false;
    this.cogerCartel = true;
    this.currentComentario = "Has recogido el Cartel: El patrón del Móvil"

  }
  // recogerPalanca(){
  //   this.mostrarPalanca = false;
  //   this.añadirPalanca = true;

  // }

  previousImage() {
    let currentIndex = this.fondos.indexOf(this.currentImage);
    let previusIndex;
    if(currentIndex==0){
      previusIndex = 3

    }else{
      previusIndex = currentIndex - 1;

    }
    this.currentImage = this.fondos[previusIndex];

  }

  nextImage() {
    let currentIndex = this.fondos.indexOf(this.currentImage);
    let nextIndex;
    if(currentIndex==3){
      nextIndex = 0

    }else{
      nextIndex = currentIndex + 1;

    }
    this.currentImage = this.fondos[nextIndex];


  }
  actualImage() {
    const currentIndex = this.fondos.indexOf(this.currentImage);
    this.currentImage = this.fondos[currentIndex];
    return currentIndex;


  }

  //---------------------------------------------------------------------
  hacerZoom() {


    this.botonZoom = false;
    this.botonLados = false;


    let currentIndex = this.fondos.indexOf(this.currentImage);
    //let currentNav = currentIndex
    if (this.fondos[this.actualImage()] == this.fondos[0]) {
      this.currentImage = this.zooms[currentIndex];

      if(this.cogerRollo==false){
        this.mostrarRollo = true;
      }

    } else if (this.fondos[this.actualImage()] == this.fondos[1]) {
      this.currentImage = this.zooms[currentIndex];

      if(this.cogerCartel==false){
        this.mostrarCartel = true;
      }
      if(this.salirPuerta==false){
        this.mostrarPomo = true;
      }

    } else if (this.fondos[this.actualImage()] == this.fondos[2]) {
      this.currentImage = this.zooms[currentIndex];

      if(this.cogerLlave==false){
        this.mostrarLlave = true;
      }

    } else if (this.fondos[this.actualImage()] == this.fondos[3]) {
      this.currentImage = this.zooms[currentIndex];

      if(this.cogerGoya==false){
        this.mostrarGoya = true;
      }
      

    } 
    this.botonVolver = true


  }
  volverzoom() {

    this.botonVolver = false

    let currentZoom = this.zooms.indexOf(this.currentImage);
    console.log(currentZoom + " = Esto es el zoom actual")
    if (currentZoom==0) {
      this.currentImage = this.fondos[0];
      console.log(this.currentImage + " Vuelve a 0")

      if(this.cogerRollo==false){
        this.mostrarRollo = false;
      }

    } else if (currentZoom==1) {
      this.currentImage = this.fondos[1];
      console.log(this.currentImage + " Vuelve a 1")

      if(this.cogerCartel==false){
        this.mostrarCartel = false;
      }
      if(this.salirPuerta==false){
        this.mostrarPomo = false;
      }

    } else if (currentZoom==2) {
      this.currentImage = this.fondos[2];
      console.log(this.currentImage + " Vuelve a 2")

      if(this.cogerLlave==false){
        this.mostrarLlave = false;
      }

    } else if (currentZoom==3) {
      this.currentImage = this.fondos[3];
      console.log(this.currentImage + " Vuelve a 3")

      if(this.cogerGoya==false){
        this.mostrarGoya = false;
      }
      
    }

    this.botonLados = true;
    this.botonZoom = true;
    console.log(this.fondos)

  }

  ngOnInit() {
    // console.log(this.fondo);
  }

}