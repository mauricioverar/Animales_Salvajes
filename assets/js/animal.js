export class Animal {
    #nombre;
    #edad;
    #img;
    #comentarios;
    #sonido;
  
    constructor(nombre, edad, img, comentarios, sonido) {
      this.#nombre = nombre;
      this.#edad = edad;
      this.#img = img;
      this.#comentarios = comentarios;
      this.#sonido = sonido;
    }
  
    get Nombre() {
      return this.#nombre;
    }
  
    get Edad() {
      return this.#edad;
    }
  
    get Img() {
      return this.#img;
    }
  
    get Comentarios() {
      return this.#comentarios;
    }
  
    set Comentarios(nuevosComentarios) {
      this.#comentarios = nuevosComentarios;
    }
    get Sonido() {
      return this.#sonido;
    }
  }
/*class Animal {
    
    constructor(nombre, edad, img, comentarios, sonido){
        let _nombre = nombre
        let _edad = edad
        let _img = img
        let _comentarios = comentarios
        let _sonido = sonido

        this.getNombre = () => _nombre
        this.getEdad = () => _edad
        this.getImg = () => _img
        this.getComentarios = () => _comentarios
        this.getSonido = () => _sonido
    }

    get Nombre(){
        return this.getNombre()}

    get Edad(){
        return this.getEdad()}

    get Img(){
        return this.getImg()}

    get comentarios(){
        return this.getComentarios()}

    get Sonido(){
        return this.getSonido()
    }

}

export default Animal
*/

