import { Component, ViewChild } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Nivel1 } from './nivel1';
import { Router } from '@angular/router';
import { CdTimerComponent } from 'angular-cd-timer';
import { ComunicacionService } from '../comunicacion.service';

@Component({
  selector: 'app-nivel1',
  template: '<app-fin [timeFin]="timeFin"></app-fin>',
  templateUrl: './nivel1.component.html',

  //en styles iria '#zoomActual {display: none}'
  styles: ['*{margin: 0%; background-color: lightgrey;}',
    '#fondoActual {height: 70vh;}',
    '.juego{display: grid; grid-template-rows: 7vh 6vh 70vh 4vh 13vh; grid-template-columns: 1fr 20fr 1fr;}',
    '.mensaje{align-self: center; justify-self: center; grid-column: 1/4; grid-row: 1/2; font-size: 1.2em;}',
    '.zoomIn{align-items: center; justify-self: center; grid-column: 2/3; grid-row: 2/3;}',
    '.zoomIn button{background-color:lightgrey;}',
    '.zoomIn i {font-size: 3em}',
    '.izquierda{justify-self: end; align-self: center; grid-column: 1/2; grid-row: 3/4; margin-right: -200%; z-index: 3;}',
    '.izquierda button{background-color:lightgrey;}',
    '.izquierda i {font-size: 4em}',
    '.pantalla{ align-self: center; justify-self: center; grid-column: 2/3; grid-row: 3/4;}',
    '.derecha{justify-self: center; align-self: center; align-self: center; grid-column: 3/4; grid-row: 3/4;margin-left: -400%; z-index: 3; }',
    '.derecha button{background-color:lightgrey;}',
    '.derecha i {font-size: 4em}',
    '.zoomOut{ justify-self: center; grid-column: 2/3; grid-row: 4/5;}',
    '.zoomOut button{background-color:lightgrey;}',
    '.zoomOut i {font-size: 3em}',
    '.inventario{align-self: center; justify-self: center; grid-column: 2/3; grid-row: 5/6; width: 50%; }',
    '.celdas{ display: grid; grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; grid-template-rows: 1fr; height:100px; background-color: black; border-radius: 100px; }',
    '.celda1{justify-self: center; align-self: center; grid-column: 2/3;}',
    '.celda2{justify-self: center; align-self: center; grid-column: 3/4;}',
    '.celda3{justify-self: center; align-self: center; grid-column: 4/5;}',
    '.celda4{justify-self: center; align-self: center; grid-column: 5/6;}',
    '.llave {position: absolute; margin-left: -350px; margin-top: 500px; z-index: 2; height: 25px; background-color:transparent;}',
    '.goya {position: absolute; margin-left: -600px; margin-top: 200px; z-index: 2; height: 300px; background-color:transparent;}',
    '.rollo {position: absolute; margin-left: -325px; margin-top: 360px; z-index: 2; height: 90px;background-color:transparent;}',
    '.pomo {position: absolute; margin-left: -740px; margin-top: 80px; z-index: 2; height: 400px; width: 320px;background-color:transparent;}',
    '.cartel {position: absolute; margin-left: -325px; margin-top: 100px; z-index: 2; height: 280px;background-color:transparent;}',
    '.obtenido{height: 98px; background-color:black;}']

})


export class Nivel1Component{
  @ViewChild('basicTimer', { static: true })
  basicTimer!: CdTimerComponent;
  timeFin!: string;
  public title = "Bienvenido Jugador";

  //array con las imagenes de fondos
  fondos = [
    '/assets/fondos/fondo0.png',
    '/assets/fondos/fondo1.png',
    '/assets/fondos/fondo2.png',
    '/assets/fondos/fondo3.png',
  ];

  //array con las imagenes de cada fondo con zoom
  zooms = [
    'assets/zooms/zoom0.png',
    'assets/zooms/zoom1.png',
    'assets/zooms/zoom2.png',
    'assets/zooms/zoom3.png',
  ];

  //array con todas las imagenes de objetos
  objetos = [
    'assets/objetos/goya.png',
    'assets/objetos/llave.png',
    'assets/objetos/rollo.png',
    'assets/objetos/palanca.png',
    'assets/objetos/vacio.png',
    'assets/objetos/cartel.png',
  ];

  // crear variables para mostrar/ocultar y variables para añadir al inventario
  // si añadirInventario es false (if añadir false: mostrar llave, al hacer click en llave añadirInventario true y mostrar false)

  //variable con el comentario que se esta mostrando actualmente
  currentComentario;

  //variable con la imagen que se esta mostrando actualmente
  currentImage;

  //botones para interactuar con el escenario
  botonZoom;
  botonVolver;
  botonLados;

  //zoomActual = this.zooms[0];
  //fondoActual = this.fondos[0];


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


  constructor(private router: Router,
    public comunicacion: ComunicacionService) {

    //inicializamos las variables con el dato que queremos

    this.currentComentario = "*Sonido de cerrar puerta* ¡Oh no! Me he quedado dormido en la entrega de premios, debo encontrar el rollo de mi película, mi premio y un cartel de recuerdo.";

    this.currentImage = this.fondos[0];

    this.botonZoom = true;
    this.botonVolver = false;
    this.botonLados = true;
    
    this.mostrarLlave = false;
    this.cogerLlave = false;

    this.mostrarGoya = false;
    this.cogerGoya = false;

    this.mostrarRollo = false;
    this.cogerRollo = false;

    this.mostrarCartel = false;
    this.cogerCartel = false;

    this.mostrarPomo = false
    this.salirPuerta = false;

  }

  irFin(){
    this.router.navigate(['fin']);
    this.basicTimer.stop;
    const min = this.basicTimer.get().minutes;
    const sec = this.basicTimer.get().seconds;
    var time = "";
    if (String(sec).length < 2 ){
      time = min + ":0" + sec;
    }
    else{
      time = min + ":" + sec;
    }
    this.timeFin = time;
    console.log(this.timeFin);
    this.comunicacion.enviar(this.timeFin);
    
  }

  //Función que se llama al hacer click en la Puerta de Salida
  Escapar(){

    //Si has recogido todos los objetos puedes salir y muestra una pantalla final
    if(this.cogerLlave==true && this.cogerGoya==true && this.cogerRollo && this.cogerCartel){
      this.salirPuerta = true;
      this.botonZoom = false;
      this.botonLados = false;
      this.botonVolver = false;

      this.irFin();

      console.log(this.cogerLlave, this.cogerGoya, this.cogerRollo)

    // Si no consigue salir muestra un comentario  
    }else{
      this.currentComentario = "No puedo irme sin mis cosas y la llave de la puerta"
      console.log(this.cogerLlave)

    }
    
  }

  //Función que se llama al hacer click en la llave
  // Lo oculta, la añade al inventario y muestra mensaje
  recogerLlave(){
    this.mostrarLlave = false
    this.cogerLlave = true
    this.currentComentario = "Has recogido una llave"


  }

  //Función que se llama al hacer click en el Goya
  // Lo oculta, la añade al inventario y muestra mensaje
  recogerGoya(){
    this.mostrarGoya = false;
    this.cogerGoya = true;
    this.currentComentario = "Has recogido el Goya de la basura"


  }

  //Función que se llama al hacer click en el rollo de pelicula
  // Lo oculta, la añade al inventario y muestra mensaje
  recogerRollo(){
    this.mostrarRollo = false;
    this.cogerRollo = true;
    this.currentComentario = "Has recogido el rollo de pelicula"

  }

  //Función que se llama al hacer click en el cartel
  // Lo oculta, la añade al inventario y muestra mensaje
  recogerCartel(){
    this.mostrarCartel = false;
    this.cogerCartel = true;
    this.currentComentario = "Has recogido el Cartel: El patrón del Móvil"

  }

  //Función que se llama al hacer click en el boton izquierda en la interfaz
  // Recorre el array de fondos y va mostrando la imagen
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

  //Función que se llama al hacer click en el boton derecha en la interfaz
  // Recorre el array de fondos y va mostrando la imagen
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

  //Función que se llama al hacer click en el boton Zoom en la interfaz
  // Recoge el fondo actual
  actualImage() {
    const currentIndex = this.fondos.indexOf(this.currentImage);
    this.currentImage = this.fondos[currentIndex];
    return currentIndex;


  }

  //Función que se llama al hacer click en el boton Zoom en la interfaz
  // Coge el fondo actual y muestra su imagen con Zoom, Oculta otros botones
  // Dependiendo de la imagen del zoom muestra tambien los objetos a recoger
  hacerZoom() {

    this.botonZoom = false;
    this.botonLados = false;

    let currentIndex = this.fondos.indexOf(this.currentImage);

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

  //Función que se llama al hacer click en el boton Zoom out en la interfaz
  // Coge el zoom actual y muestra su respectivo fondo, muestra los botones
  // oculta los objetos a recoger
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
