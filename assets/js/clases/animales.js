import {Animal} from "./animal.js";

export class Leon extends Animal {
  Rugir() {
    player.src = `./assets/sounds/${this.Sonido}`;
    player.load();
    player.play();
  }
}

export class Lobo extends Animal {
  Aullar() {
    player.src = `./assets/sounds/${this.Sonido}`;
    player.load();
    player.play();
  }
}

export class Oso extends Animal {
  Gruñir() {
    player.src = `./assets/sounds/${this.Sonido}`;
    player.load();
    player.play();
  }
}

export class Serpiente extends Animal {
  Sisear() {
    player.src = `./assets/sounds/${this.Sonido}`;
    player.load();
    player.play();
  }
}

export class Aguila extends Animal {
  Chillar() {
    player.src = `./assets/sounds/${this.Sonido}`;
    player.load();
    player.play();
  }
}

/*import {Animal} from "./animal.js"

// import Animal from "./animal.js"

const reproductorAudio = document.getElementById("player")

class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super (nombre, edad, img, comentarios, sonido)
    }

    Rugir() {
        reproductorAudio.src = `assets/sounds/Rugido.mp3` //inyectar en componente html        
        reproductorAudio.play()
    }
}

class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super (nombre, edad, img, comentarios, sonido)
    }

    Aullar() {
        reproductorAudio.src = `assets/sounds/Aullido.mp3`
        reproductorAudio.play()
    }
}

class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super (nombre, edad, img, comentarios, sonido)
    }

    Gruñir() {
        reproductorAudio.src = `assets/sounds/Gruñido.mp3`
        reproductorAudio.play()
    }
}

class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super (nombre, edad, img, comentarios, sonido)
    }

    Sesear() {
        reproductorAudio.src = `assets/sounds/Siseo.mp3`     
        reproductorAudio.play()
    }
}

class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super (nombre, edad, img, comentarios, sonido)
    }

    Chillar() {
        reproductorAudio.src = `assets/sounds/Chillido.mp3`
        reproductorAudio.play()
    }
}

export { Leon, Lobo, Oso, Serpiente, Aguila}
console.log(new Aguila("Aguila","0 - 1 años","vuela alto","Chillido","Chillar"))// instancia
*/