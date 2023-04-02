
/// EJEMPLO CON IF ///

// let saludo = alert   ("Bienvenidos a las delicias Andinas")
// let alergias = confirm ("¿Eres alergic@ a algun alimento?")
// if (alergias){
//    prompt ("Ingresa el alimento al cual eres alegic@")}
// else (alergias)
 //   prompt("¿Que tipo de comida deseas probar, Colombiana, Peruana o Ecuatoriana?")

//  console.log ("alergias")


/// EJEMPLO CON SWITCH ///

let saludo = alert ("Bienvenidos a las delicias Andinas")
let alergias = confirm ("¿Eres alergic@ a algun alimento?")
 if (alergias){
   prompt("Ingresa el alimento al cual eres alegic@")}
var cocina = prompt("¿De cual pais deseas probar tu comida; colombia, ecuador o peru?")
switch (cocina){
    case "colombia":
        if (confirm("Excelente eleccion, ¿Deseas bebida?")){
            prompt("¿Deseas cerveza o Jugo?")
            alert("Gracias por su orden!")
        } else {
            alert("Gracias por su orden!");
        }
        break;
    case "ecuador":
        if (confirm("Excelente eleccion, ¿Deseas bebida?")){
            prompt("¿Deseas cerveza o Jugo?")
            alert("Gracias por su orden!")
        } else {
            alert("Gracias por su orden!");
        }
        break;
    case "peru":
        if (confirm("Excelente eleccion, ¿Deseas bebida?")){
            prompt("¿Deseas cerveza o Jugo?")
            alert("Gracias por su orden!")
        } else {
            alert("Gracias por su orden!");
        }
        break;
    default:
        alert("Ingresa de nuevo tu eleccion");
}

let total = 0;
for(let i = 0; i<5; i = i+1 ){
    let cuenta = Number(prompt(`Ingrese el valor de cada plato ${i}`))
    total = total + cuenta 
}
let ValorCuenta = total; alert(`Este es el valor de su cuenta ${total}`)

console.log("Este es el valor de su cuenta", ValorCuenta);

