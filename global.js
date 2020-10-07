const btnEmpezar = document.getElementById("btnEmpezar");
const celeste = document.getElementById("celeste");
const violeta = document.getElementById("violeta");
const naranja = document.getElementById("naranja");
const verde = document.getElementById("verde");
const UltimoNivel = 10;
swal("hola!!")
class juego {
   constructor(){
      
      this.iniciar()
      this.generarSecuencia()
      setTimeout(() => {
         this.siguienteNivel()  
      }, 500);
      
   }
   iniciar(){
      this.elegirColor = this.elegirColor.bind(this)
      btnEmpezar.classList.add("hide");
      this.nivel = 1;
      this.colores = {
         celeste,
         violeta,
         naranja,
         verde
      };

   }
   generarSecuencia(){
      this.secuencia = new Array(UltimoNivel).fill(0).map(n => Math.floor(Math.random() * 4 ))
   }
   siguienteNivel(){
      this.subNivel = 0
      this.iluminarSecuencia()
      this.agregarEventosClick()
   }
   transformar(numero){
      switch (numero){
         case 0:
         return "celeste"
         case 1:
         return "violeta"
         case 2:
         return "naranja"
         case 3:
         return "verde"
      }

   }
   transformar2(color){
      switch (color){
         case "celeste":
         return 0
         case "violeta":
         return 1
         case "naranja":
         return 2
         case "verde":
         return 3
      }

   }
   iluminarSecuencia(){
      for (let i = 0; i < this.nivel; i++ ){
         const color = this.transformar(this.secuencia[i]);
         setTimeout(() => this.iluminarColor(color), 1000 * i) } }
   
   
   
         iluminarColor(color){
      this.colores[color].classList.add("light");
      setTimeout(() => this.apagarColor(color), 350);

   }
   apagarColor(color){
      this.colores[color].classList.remove("light");
   }
 

   agregarEventosClick(){
      this.colores.celeste.addEventListener("click",this.elegirColor);
      this.colores.verde.addEventListener("click", this.elegirColor);
      this.colores.violeta.addEventListener("click", this.elegirColor);
      this.colores.naranja.addEventListener("click", this.elegirColor);
   } 

   eliminarEventosClick(){
      this.colores.celeste.removeEventListener("click",this.elegirColor);
      this.colores.verde.removeEventListener("click", this.elegirColor);
      this.colores.violeta.removeEventListener("click", this.elegirColor);
      this.colores.naranja.removeEventListener("click", this.elegirColor);
   } 

   elegirColor(ev){
      const nombreColor = ev.target.dataset.color
      const numeroColor = this.transformar2(nombreColor)
      this.iluminarColor(nombreColor)
      if (numeroColor === this.secuencia[this.subNivel]){
         this.subNivel++
         if (this.subNivel === this.nivel){
            this.nivel++
            this.eliminarEventosClick()
            if (this.nivel === (UltimoNivel +1)){
               // GANO?!!

            }else {
               setTimeout(this.siguienteNivel.bind(this), 1500);
            }

         }else {
            // perdió
         }
      }

   


   }

}
function empezarJuego(){   

window.juego = new juego(); } 
