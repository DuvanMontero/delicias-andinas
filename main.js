/// EJEMPLO CON SWITCH ///

alert ("Bienvenidos a las delicias Andinas")
let alergias = confirm ("¿Eres alergic@ a algun alimento?")
        const alergiasRespuesta = []
        const colombia = ["Ajiaco", "Bandeja Paisa", "Muchacho Relleno", "Lechona", "Tamal tolimense"]
        const ecuador = ["Encebollado", "Locro de papa", "Cuy asado", "Churrasco ecuatoriano", "Mote pillo"]
        const peru = ["Causa limeña", "Pachamanca", "Ají de gallina", "Tacu tacu", "Arroz chaufa"]
        let cantidad = 3;
        function detectarAlergias(){
     if (alergias){
    do{
        let queIngrediente = prompt("¿A cual alimento eres alergic@?");
        alergiasRespuesta.push(queIngrediente.toUpperCase());
        console.log(alergiasRespuesta);
    } while (alergiasRespuesta.length != cantidad)
   } alert ("Gracias por hacernos saber, las tendremos en cuenta")
}
function elegirPais (){
   let pais = prompt("¿De cual pais deseas probar tu comida; colombia, ecuador o peru?").toLocaleLowerCase()
    while (!(pais === "colombia" || pais === "ecuador" || pais === "peru")){
  pais = prompt("Por favor ingrese una opcion del menu. \n¿De cual pais deseas probar tu comida; Colombia, Ecuador o Peru?").toLocaleLowerCase() 
}
  return pais
} 
   function platillo (pais){
    let platos = []
    switch(pais){
        case "colombia":
            platos = colombia
            break
        case "ecuador":
            platos = ecuador
            break
        case "peru":
        platos = peru
        break
        default:
            console.log("Pais inesperado")  
    }
let menu = "Los platos disponibles son: Ajiaco, Bandeja Paisa, Muchacho Relleno, Lechona, Tamal tolimense, Encebollado, Locro de papa, Cuy asado, Churrasco ecuatoriano, Mote pillo, Causa limeña, Pachamanca, Ají de gallina, Tacu tacu, Arroz chaufa"
platos.forEach(platos =>{
    menu += `\n ${platos}`
})
let esta = false
alert ("Excelente eleccion!, Por favor ingrese el nombre del platillo que desea")
let platoDeseado = prompt(menu)    
do{
    esta = platos.includes(platoDeseado)
    console.log("esta", esta)
    if(!esta){
        alert("Por favor ingrese nuevamente su elección")
        platoDeseado = prompt(menu)
    }
} while(!esta)
alert ("😋Que Rico!😋") 
return platoDeseado
   } 
   function bebidas (){
      let bebidaElegida =  prompt ("Delicioso!.¿Que deseas de beber?")
       return bebidaElegida
    }
function app(){
    detectarAlergias()
    let paisElegido = elegirPais()
    let platoElegido = platillo (paisElegido)
    let bebidaElegida = bebidas()
    alert(`Ya le traemos su ${platoElegido} con ${bebidaElegida} para tomar de ${paisElegido}. Disfrute de su pedido`)
}


//     (colombia.includes ("Ajiaco", "Bandeja Paisa", "Muchacho Relleno", "Lechona", "Tamal tolimense") || ecuador.includes ("Encebollado", "Locro de papa", "Cuy asado", "Churrasco ecuatoriano", "Mote pillo") || peru.includes ("Causa limeña", "Pachamanca", "Ají de gallina", "Tacu tacu", "Arroz chaufa") )
//     let loop = true
//     let invalidChoiceCount = 3;
// do{
//     if(cocina === "colombia" || cocina === "ecuador" || cocina === "peru"){
//         (prompt("Excelente eleccion!, Por favor ingrese el nombre del platillo que desea"))
//         loop = false
//         platillo () 
//         bebidas()
//         let total = 0;
//         for(let i = 0; i<5; i = i+1 ){
//             let cuenta = Number(prompt(`Ingrese el valor de cada plato ${i}`))
//             total = total + cuenta 
// }
// let valorCuenta = total; 
//     alert(`Este es el valor de su cuenta ${total}`)
//     console.log("Este es el valor de su cuenta", valorCuenta);
// } else {
//     invalidChoiceCount++;
//     if (invalidChoiceCount >= 3) {
//         alert("Lo siento, has ingresado una elección inválida demasiadas veces.");
//         loop = false;
//     } else {
//         alert("Ingresa de nuevo tu eleccion.");
//     }
// }
// }while(loop) 

// const antojos = ["🍕","🥐","🍩"]
// console.log(antojos)
// antojos.push("🍨","🎂")
// antojos.unshift("👵")
// antojos.shift()
// antojos.pop()

// function bebidas (){
//     prompt ("Delicioso!.¿Que deseas de beber?")
//    }

// (colombia.includes ("Ajiaco", "Bandeja Paisa", "Muchacho Relleno", "Lechona", "Tamal tolimense") || ecuador.includes ("Encebollado", "Locro de papa", "Cuy asado", "Churrasco ecuatoriano", "Mote pillo") || peru.includes ("Causa limeña", "Pachamanca", "Ají de gallina", "Tacu tacu", "Arroz chaufa") )