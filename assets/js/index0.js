//importar modulo
import {Leon, Lobo, Oso, Serpiente, Aguila} from "./animales.js";
//funcion async
(async () => {
  const Response = await fetch("animales.json");
  const {animales: Animales} = await Response.json();

  //Dom manipulation

  //const nombreAnimalItem = document.getElementById("animal");
  const edadAnimalItem = document.getElementById("edad");
  const comentariosAnimalItem = document.getElementById("comentarios");
  // const previewAnimalItem = document.getElementById("preview");
  const btnRegistrarItem = document.getElementById("btnRegistrar");
  const animalesContainerItem = document.getElementById("Animales");
  const playerItem = document.getElementById("player");

  const AnimalCards = []; // Arreglo según el botón registro

  function mostrar() {
    //alert('mostrar')
    animalesContainerItem.innerHTML = "";
    AnimalCards.forEach((animal) => {
      const Container = document.createElement("div");
      const img = document.createElement("img");
      const botonSonido = document.createElement("button");

      Container.classList.add("card", "mx-2", "my-2");
      Container.style.width = "200px";

      img.setAttribute("src", `assets/imgs/${animal.Img}`);
      img.classList.add("img-fluid", "cursor"); //agregando clases al modal
      img.addEventListener("click", () => {
        $("#modal").modal("toggle");
        console.log(animal);
        const modalBody = document.getElementById("modal-body");
        modalBody.innerHTML = `
        
          <img src="./assets/imgs/${animal.Img}" style="width: 400px" class="img-modal"/>
        
        <center><strong>Animal: </strong>${animal.Nombre}</center>
        <center><strong>Edad: </strong>${animal.Edad}</center>
        <center><strong>Comentarios: </strong>${animal.Comentarios}</center>`;
      });

      //evento sonidos

      botonSonido.classList.add("card-body", "card-boton", "p-0");
      botonSonido.innerHTML = `<img src="./assets/imgs/audio.svg" style="width: 30px"/>`;

      botonSonido.addEventListener("click", () => {
        if (animal.Nombre === "Leon") {
          animal.Rugir(playerItem);
        } else if (animal.Nombre === "Lobo") {
          animal.Aullar(playerItem);
        } else if (animal.Nombre === "Oso") {
          animal.Gruñir(playerItem);
        } else if (animal.Nombre === "Serpiente") {
          animal.Sisear(playerItem);
        } else if (animal.Nombre === "Aguila") {
          animal.Chillar(playerItem);
        }
      });

      Container.appendChild(img);
      Container.appendChild(botonSonido);

      animalesContainerItem.appendChild(Container);
    });
  }
  //evento clickear el boton
  //nombreAnimalItem.addEventListener("change", () => {
  document.getElementById("animal").addEventListener("change", () => {

    alert('nombreAnimalItem')
    //const animalElegido = nombreAnimalItem.value;
    //const animalElegido = document.getElementById("animal").value;
    const animalDevuelto = Animales.find(
      //(animal) => animal.name === animalElegido
      (animal) => animal.name === document.getElementById("animal").value
    );
    //console.log(animalElegido) // lobo

    console.log(animalDevuelto) // {name, imagen, sonido}
/*
    document.getElementById("preview").setAttribute(
    // previewAnimalItem.setAttribute(
      "src",
      `./assets/imgs/${animalDevuelto.imagen}`
    );*/
    /////////////////////////////////////////////////////////////////////////////////

    document.getElementById("preview").src = `./assets/imgs/${animalDevuelto.imagen}`
    
  });

  btnRegistrarItem.addEventListener("click", () => {
    console.log(
      nombreAnimalItem.value,
      edadAnimalItem.value,
      comentariosAnimalItem.value
    );
    let nombreAnimal = nombreAnimalItem.value;
    let edadAnimal = edadAnimalItem.value;
    let comentariosAnimal = comentariosAnimalItem.value;
    console.log(comentariosAnimal);
    console.log(comentariosAnimal.length);

    //verificar si todo fue elegido
    ((verificar) => {
      if (
        comentariosAnimal.length === 0 ||
        nombreAnimal == "Seleccione un animal" ||
        edadAnimal == "Seleccione un rango de años"
      ) {
        alert("Debes rellenar todos los campos.");
      } else {
        const animalDevuelto = Animales.find(
          (animal) => animal.name === nombreAnimal
        );

        const datos = [
          nombreAnimal,
          edadAnimal,
          animalDevuelto.imagen,
          comentariosAnimal,
          animalDevuelto.sonido,
        ];

        switch (nombreAnimal) {
          case "Leon":
            AnimalCards.push(new Leon(...datos));
            break;
          case "Lobo":
            AnimalCards.push(new Lobo(...datos));
            break;
          case "Oso":
            AnimalCards.push(new Oso(...datos));
            break;
          case "Aguila":
            AnimalCards.push(new Aguila(...datos));
            break;
          case "Serpiente":
            AnimalCards.push(new Serpiente(...datos));
            break;
        }

        //Devolver formulario a estado inicial

        let options = document.querySelectorAll("option");
        options.forEach((option) => (option.selected = option.defaultSelected));

        $("#comentarios").val("");
        // previewAnimalItem.removeAttribute("src");
        document.getElementById("preview").removeAttribute("src");


        mostrar();
      }
    })();
  });
})();

/*import { Leon, Lobo, Oso, Serpiente, Aguila } from "./clases/animales.js";
//import fauna from "./Consulta.js";


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
            const imagenesPjTemplate  = `url(./assets/imgs/${animales[i].imagen})`
            document.getElementById("preview").style.backgroundImage = imagenesPjTemplate 
        console.log(animales[i].imagen)

            // document.getElementById("preview").setAttribute(
            //     "src",
            //     `./assets/imgs/${animales[i].imagen}`
            //   )
        }
        
    })()
})

document.getElementById("btnRegistrar").addEventListener("click", () => {
  let animal = document.getElementById("animal");
  let edad = document.getElementById("edad");
  let previewElement = document.getElementById("preview");
  let imagenSrcBg = previewElement.style.backgroundImage;
  
// let imagenSrcBg = previewElement.setAttribute
  let imgSrc = imagenSrcBg.slice(5, imagenSrcBg.length - 2);
  //console.log(animal.value)

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

        
    

    if (edad.value && animal.value && comentarios.value) {//exito
  
//   if (edad.value && animal.value && comentarios.value && imagenSrcBg) {//exito
        animales.push(nuevoAnimal)
        console.log(nuevoAnimal.getImg())
        animal.selectedIndex = 0
        edad.selectedIndex = 0
        previewElement.style.backgroundImage = "none"
        // previewElement.setAttribute = "none"

         imagenSrcBg = previewElement.style.backgroundColor = "#343a40!important"
        //imagenSrcBg = previewElement.style.backgroundImage = "#343a40"

        // imagenSrcBg = previewElement.setAttribute = "#343a40!important"

        comentarios.value = ""
        reloadTable()
    } else {
        console.log(edad.value, animal.value, comentarios.value, imgSrc)
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
                <img type="button" data-bs-toggle="modal" data-bs-target="#${p.getNombre()}-${i}"
                src="${p.getImg()}"
                class="card-img-top">
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

  const modal = document.getElementById('modal');
    modal.innerHTML = "";
    animales.forEach((animal, i) => {
        modal.innerHTML +=
            `
        <!-- Modal ${animal.getNombre()} - ${i} -->
        <div class="modal fade" id="${animal.getNombre()}-${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered w-25 role=document">
            <div class="modal-content bg-dark text-white">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">${animal.getNombre()}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <img src="${animal.getImg()}" class="img-fluid">
                <hr>
                <h5>Edad</h5>
                <p>${animal.getEdad()}</p>
                <hr>
                <h5>Comentarios</h5>
                <p>${animal.getComentarios()}</p> 
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
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
*/