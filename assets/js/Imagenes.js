import dataBase from "./Data.js";

const animal = document.getElementById('animal');
const preview = document.getElementById('preview');

animal.addEventListener('change', async() => {
    const { animales } = await dataBase.getData();
    const nombreAnimal = animal.value;
    const animalSeleccionado = animales.find(animal => animal.name === nombreAnimal);
    const animalImagen = animalSeleccionado.imagen;
    const animalInyeccionImg = `./assets/imgs/${animalImagen}`;
    crearImagen(animalInyeccionImg)
})

const crearImagen = (path) => {
    preview.innerHTML = '';
    preview.style.backgroundImage = `url(${path})`
}

export default {}