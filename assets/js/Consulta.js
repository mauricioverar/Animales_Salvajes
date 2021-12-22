let fauna = (() => {
    // alert(location.port)
    var puerto = location.port;
    const url = `http://localhost:${puerto}/animales.json`

    const getData = async () => {
        const res = await fetch(url)
        const data = await res.json()
        return data
    };
    
    return { getData};
})();

export default fauna;