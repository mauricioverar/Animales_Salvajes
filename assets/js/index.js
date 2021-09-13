import { Leon, Lobo, Oso, Serpiente, Aguila } from "./clases/hijos.js";
import fauna from "./Consulta.js";


let animales = [];
let nuevoAnimal;
let dire
let i
const imagenesPjTemplate  = ''
let sonido



document.getElementById("animal").addEventListener("click", () => {
    const pj = document.getElementById("animal").value;

    switch (animal.value) {
        case "Aguila":
        i = 4
        break;

        case "Leon":
        i = 0
        break;

        case "Lobo":
        i = 1
        break;

        case "Oso":
        i = 2
        break;

        case "Serpiente":
        i = 3
        break;
    }


    ( async () =>{
        if (animal.value != 'Seleccione un animal'){
            const {animales} = await fauna.getData();
            const imagenesPjTemplate  = `url(/assets/imgs/${animales[i].imagen})`
            document.getElementById("preview").style.backgroundImage = imagenesPjTemplate 
        }
        
    })()
})

document.getElementById("btnRegistrar").addEventListener("click", () => {
  let animal = document.getElementById("animal");
  let edad = document.getElementById("edad");
  let previewElement = document.getElementById("preview");
  let imagenSrcBg = previewElement.style.backgroundImage;
  let imgSrc = imagenSrcBg.slice(5, imagenSrcBg.length - 2);


  let comentarios = document.getElementById("comentarios");  



    switch (animal.value) {
        case "Aguila":
            nuevoAnimal = new Aguila(animal.value,edad.value,imgSrc,comentarios.value,sonido);
        break;

        case "Leon":
            nuevoAnimal = new Leon(animal.value,edad.value,imgSrc,comentarios.value,sonido);

        break;

        case "Lobo":
            nuevoAnimal = new Lobo(animal.value,edad.value,imgSrc,comentarios.value,sonido);
        break;

        case "Oso":
            nuevoAnimal = new Oso(animal.value,edad.value,imgSrc,comentarios.value,sonido);
        break;

        case "Serpiente":      
            nuevoAnimal = new Serpiente(animal.value,edad.value,imgSrc,comentarios.value,sonido);
        break;
    }

        
    

  
  if (edad.value && animal.value && comentarios.value && imagenSrcBg) {//exito
        animales.push(nuevoAnimal)
        animal.selectedIndex = 0
        edad.selectedIndex = 0
        previewElement.style.backgroundImage = "none"
        imagenSrcBg = previewElement.style.backgroundColor = "#343a40!important"
        comentarios.value = ""
        reloadTable()
    } else {
        alert("falta dato")
    }
});

const reloadTable = () => {
  const animalesTemplate = document.getElementById("Animales");
  animalesTemplate.innerHTML = "";

  animales.forEach((p, i) => {

    animalesTemplate.innerHTML += `
        <div class="px-3 pb-2 animal" nombre="${p.getNombre()}">
            <div class="card" style="width:200px;height:500px;">
                <img type="button" data-bs-toggle="modal"
                src="${p.getImg()}"
                class="card-img-top" id="foto">
                <div class="card-body">
                    <h4 class="card-title">${p.getNombre()}</h4>
                    <hr class="w-20 mx-auto">
                    <h6 class="card-text">Edad: ${p.getEdad()}</h6>
                    <h6 class="card-text">Comentarios: <span class="text-danger"> ${p.getComentarios()}</span></h6>
                    <button class="btn btn-outline-warning" onclick="activarAudio('${i}')"> Audio</button>
                </div>
            </div>
        </div>
        `;
  });
  

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
