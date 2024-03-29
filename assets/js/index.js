//importar datos de animales.js
import {Leon, Lobo, Oso, Serpiente, Aguila} from "./animales.js";
//import Imagenes from "./Imagenes.js";
//import { Leon, Lobo, Oso, Serpiente, Aguila } from "./clases/animales.js";
    //import fauna from "./Consulta.js";
    animal.selectedIndex = 0
    edad.selectedIndex = 0
    let animales = [];
    let nuevoAnimal; // podra cambiar su valor, pero solo vivirá en el bloque donde fue declarada
    let dire
    let i
    const imagenesPjTemplate  = '' // constante NO cambiara su valor
    let sonido
//asíncrono
(async () => {
  const Response = await fetch("animales.json");
  const {animales: Animales} = await Response.json();
  //////////////////////////////////////////////////////
/*
  document.getElementById("animal").addEventListener("change", () => {
    const animalDevuelto = Animales.find(
      (animal) => animal.name === document.getElementById("animal").value
    );
    console.log(animalDevuelto) // {name, imagen, sonido}
    document.getElementById("preview").src = `./assets/imgs/${animalDevuelto.imagen}`    
  });
  */
/////////////////////////////////////////////////////////////////////////////////
    
    animal.addEventListener('change', async() => { // para cambio en cel mas rapido
    //document.getElementById("animal").addEventListener("click", () => {
        const animalObjeto = Animales.find(
            (animal) => animal.name === document.getElementById("animal").value
          );
          //console.log('animalObjeto', animalObjeto) // {name, imagen, sonido}
          document.getElementById("preview").src = `./assets/imgs/${animalObjeto.imagen}`
        /*( async () =>{
            if (animal.value != 'Seleccione un animal'){
                const {animales} = await fauna.getData();
                const imagenesPjTemplate  = `url(./assets/imgs/${animales[i].imagen})`
                document.getElementById("preview").style.backgroundImage = imagenesPjTemplate 
            console.log(animales[i].imagen)
            }            
        })()*/
    })

    btnRegistrar.addEventListener('click', async(evento) => {
        evento.preventDefault();
    //document.getElementById("btnRegistrar").addEventListener("click", () => {
    let animal = document.getElementById("animal");
    let edad = document.getElementById("edad");
    let previewElement = document.getElementById("preview");
    let imagenSrcBg = previewElement.style.backgroundImage;    
    // let imagenSrcBg = previewElement.setAttribute
    let imgSrc = imagenSrcBg.slice(5, imagenSrcBg.length - 2);
    //console.log(animal.value)
    let comentarios = document.getElementById("comentarios");
        

        if (edad.value && animal.value && comentarios.value) {//exito    
        //   if (edad.value && animal.value && comentarios.value && imagenSrcBg) {//exito
            //animales.push(nuevoAnimal)

            //console.log('animal.v',animal.value)
            



            

            const animalCard = Animales.find(
                (animal) => animal.name === document.getElementById("animal").value
              );
              //console.log('animal.c',animalCard)

              // atributos del animal: propiedad nombre, propiedad imagen, etc


              const animalAtt = [
                animal.value,
                edad.value,
                document.getElementById("preview").src,
//                document.getElementById("preview").src,
                comentarios.value,
                //sonido.value,
              ];


              //console.log(animalAtt)

              
              //console.log( document.getElementById("preview").src )

              switch (animal.value) {
                case "Aguila":
                    //nuevoAnimal = new Aguila(animal.value,edad.value,imgSrc,comentarios.value,sonido);
                    animales.push(new Aguila(...animalAtt));
                    break;
                case "Leon":
                    //nuevoAnimal = new Leon(animal.value,edad.value,imgSrc,comentarios.value,sonido);
                    animales.push(new Leon(...animalAtt))
                    break;
                case "Lobo":
                    //nuevoAnimal = new Lobo(animal.value,edad.value,imgSrc,comentarios.value,sonido);
                    animales.push(new Lobo(...animalAtt))
                    break;
                case "Oso":
                    //nuevoAnimal = new Oso(animal.value,edad.value,imgSrc,comentarios.value,sonido);
                    animales.push(new Oso(...animalAtt))
                    break;
                case "Serpiente":      
                    //nuevoAnimal = new Serpiente(animal.value,edad.value,imgSrc,comentarios.value,sonido);
                    animales.push(new Serpiente(...animalAtt))
                    break;
            }



            animal.selectedIndex = 0
            edad.selectedIndex = 0
            previewElement.style.backgroundImage = "none"
            // previewElement.setAttribute = "none"
            //imagenSrcBg = previewElement.style.backgroundColor = "#343a40!important"
            //imagenSrcBg = previewElement.style.backgroundImage = "#343a40"
            // imagenSrcBg = previewElement.setAttribute = "#343a40!important"
            comentarios.value = ""
            document.getElementById("preview").src = "./assets/imgs/lion.svg"
            reloadTable()
        } else {
            // console.log(edad.value, animal.value, comentarios.value, imgSrc)
            alert("falta dato")
        }
    });

    const reloadTable = () => {
    const animalesTemplate = document.getElementById("Animales");
    animalesTemplate.innerHTML = "";

    animales.forEach((animal, i) => {
    //console.log(i)

    animalesTemplate.innerHTML += `
            <div class="px-3 pb-2 animal" nombre="${animal.getNombre()}">
                <div class="card" style="margin-left:-26px;width:160px;height:240px;">
                    <img  style="width:160px;height:200px;" type="button" data-bs-toggle="modal" data-bs-target="#${animal.getNombre()}-${i}"
                    src="${animal.Img}"
                    class="card-img-top">
                    <div class="card-body p-1  bg-secondary" onclick="activarAudio('${i}')">
                        <a href="#${animal.getNombre()}-${i}"><img class="p-1" height="30rem" src="./assets/imgs/audio.svg"/></a>  
                        <!-- <button> <img class="p-1" height="30rem" src="./assets/imgs/audio.svg"/> </button> -->
                    </div>
                </div>
            </div>
        `;
    });

    const modal = document.getElementById('modal');
        modal.innerHTML = "";
        animales.forEach((animal, i) => {
            modal.innerHTML +=
                `
            <div class="modal fade" id="${animal.getNombre()}-${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered w-25 role=document">
                <div class="modal-content bg-dark text-white">
                    <div class="modal-body" style="text-align:center;">
                        <img src="${animal.getImg()}" class="img-fluid">
                        <hr>
                        <p>${animal.getEdad()}</p>
                        <hr>
                        <h5>Comentarios</h5>
                        <p style="
                        margin-left:-4%;
                        text-align:center;
                        width:110%;
                        word-wrap: break-word;
                        ">${animal.getComentarios()}</p> 
                    </div>
                </div>
            </div>
            </div>
            `
        })

    };

    window.activarAudio = (i) => {
        const animal = animales[i]

        switch (animal.getNombre()) {
            case "Aguila":
                Aguila._sonido = `url(/assets/sounds/Chillido.mp3)`
                animal.Chillar()
                break;
            case "Leon":
                Leon._sonido = `url(/assets/sounds/Rugido.mp3)`
                animal.Rugir()
                break;
            case "Lobo":
                Lobo._sonido = `url(/assets/sounds/Aullido.mp3)`
                animal.Aullar()
                break;
            case "Oso":
                Oso._sonido = `url(/assets/sounds/Gruñido.mp3)`
                animal.Gruñir()
                break;
            case "Serpiente":
                Serpiente._sonido = `url(/assets/sounds/Siseo.mp3)`
                animal.Sesear()
                break;
        }
        reloadTable()
    }
})();