class Poro {
    constructor(nombre, tamaño, bigote) {
      this.nombre = nombre;
      this.tamaño = tamaño;
      this.bigote = bigote;
    }

// alimentar al poro
    alimentar() {
      if (this.tamaño < 9) {
        this.tamaño = this.tamaño + 1;
        console.log ("El tamaño de " + this.nombre + " es " + this.tamaño + ".")
      } else {
        console.log ("¡¡¡PUM!!!")
      }
    }

// bigotes del poro
    braum() {
        if (this.bigote === 0) {
        this.bigote = this.bigote + 1;
    }
    {
        if (this.bigote <= 0) {
            this.bigote = flase;
        } else {
            this.bigote = true;
            console.log ("Este Poro tiene un bigote muy fachero")
        }
    }
  }

  // tomar un nuevo porito luego de que el poro alimentado creió hasta explotar y dejar muchos poritos
  nuevoPoro() {
    if (this.tamaño >= 9) {
        this.tamaño = 1;
        console.log ("Has tomado un nuevo poro con tamaño " + this.tamaño + ".")
      } 
    }
  }

//   Nombre, tamaño y bigote del poro
  let poro = new Poro("Porito", 1, 0);
  
  console.log("Nombre: " + poro.nombre + ".");
  console.log("El tamaño de " + poro.nombre + " es " + poro.tamaño + ".");