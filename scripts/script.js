console.log("hola mundo");
const colores = ["red", "blue"]
console.log(colores[0])
colores[0] = 523
console.log(colores[0])
let alumno = {
    nombre : "Luis",
    edad : 20,
    imprime(){
        console.log(this.nombre + " " + this.edad )
    }
};
alumno["edad"]++
 
alumno.imprime();
const funcion = (name) =>
    console.log("Hola" + " " + name)
funcion("Luis")
