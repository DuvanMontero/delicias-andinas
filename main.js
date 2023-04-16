/// EJEMPLO CON SWITCH ///

let saludo = alert ("Bienvenidos a las delicias Andinas")
let alergias = confirm ("¿Eres alergic@ a algun alimento?")
 if (alergias){
   prompt("Ingresa el alimento al cual eres alegic@")}
   let cocina = prompt("¿De cual pais deseas probar tu comida; colombia, ecuador o peru?")
   function bebidas (){
   if (confirm("Excelente eleccion, ¿Deseas bebida?")){
             prompt("¿Deseas cerveza o Jugo?")
            alert("Gracias por su orden!")
            } else {
           alert("Gracias por su orden!");
       }
    }
    let loop = true
    let invalidChoiceCount = 3;
do{
    if(cocina === "colombia" || cocina === "ecuador" || cocina === "peru"){
        loop = false
        bebidas()
        let total = 0;
        for(let i = 0; i<5; i = i+1 ){
            let cuenta = Number(prompt(`Ingrese el valor de cada plato ${i}`))
            total = total + cuenta 
}
let valorCuenta = total; 
    alert(`Este es el valor de su cuenta ${total}`)
    console.log("Este es el valor de su cuenta", valorCuenta);
} else {
    invalidChoiceCount++;
    if (invalidChoiceCount >= 3) {
        alert("Lo siento, has ingresado una elección inválida demasiadas veces.");
        loop = false;
    } else {
        alert("Ingresa de nuevo tu eleccion.");
    }
}
}while(loop) 

const antojos = ["🍕","🥐","🍩"]
console.log(antojos)
antojos.push("🍨","🎂")
antojos.unshift("👵")
antojos.shift()
antojos.pop()