// Metodos o funciones en un objeto

const persona = {
 nombre: 'Frank',
 trabajo: 'Estudiante',
 edad: 16,
 musicaRock: true,
 mostrarInformacion() {
  console.log(`${this.nombre} es ${this.trabajo} y su edad es ${this.edad}`)
 },
}

persona.mostrarInformacion()
