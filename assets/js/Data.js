const dataBase = (() => {
    const URL = './animales.json';
    const getData = async() => {
        const respuesta = await fetch(URL);
        const data = await respuesta.json();
        return data
    };
    return { getData };
})();

export default dataBase;