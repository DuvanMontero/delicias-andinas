/// EJEMPLO CON SWITCH ///

let saludo = alert ("Bienvenidos a las delicias Andinas")
let alergias = confirm ("¿Eres alergic@ a algun alimento?")
        const alergiasRespuesta = []
        let cantidad = 3;
 if (alergias){
    do{
        let queIngrediente = prompt("¿A cual alimento eres alergic@?");
        alergiasRespuesta.push(queIngrediente.toUpperCase());
        console.log(alergiasRespuesta);
    } while (alergiasRespuesta.length != cantidad)
   } alert ("Gracias por hacernos saber, las tendremos en cuenta")
   let cocina = prompt("¿De cual pais deseas probar tu comida; colombia, ecuador o peru?")
   function bebidas (){
    prompt ("Delicioso!.¿Que deseas de beber?")
   }
   function platillo (){
    alert ("😋Que Rico!😋") 
   }
    const colombia = ["Ajiaco", "Bandeja Paisa", "Muchacho Relleno", "Lechona", "Tamal tolimense"]

    const peru = ["Causa limeña", "Pachamanca", "Ají de gallina", "Tacu tacu", "Arroz chaufa"]
    (colombia.includes ("Ajiaco", "Bandeja Paisa", "Muchacho Relleno", "Lechona", "Tamal tolimense") || ecuador.includes ("Encebollado", "Locro de papa", "Cuy asado", "Churrasco ecuatoriano", "Mote pillo") || peru.includes ("Causa limeña", "Pachamanca", "Ají de gallina", "Tacu tacu", "Arroz chaufa") )

    const ecuador = ["Encebollado", "Locro de papa", "Cuy asado", "Churrasco ecuatoriano", "Mote pillo"]
    let loop = true
    let invalidChoiceCount = 3;
do{
    if(cocina === "colombia" || cocina === "ecuador" || cocina === "peru"){
        (prompt("Excelente eleccion!, Por favor ingrese el nombre del platillo que desea"))
        loop = false
        platillo () 
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

// const antojos = ["🍕","🥐","🍩"]
// console.log(antojos)
// antojos.push("🍨","🎂")
// antojos.unshift("👵")
// antojos.shift()
// antojos.pop()

// (colombia.includes ("Ajiaco", "Bandeja Paisa", "Muchacho Relleno", "Lechona", "Tamal tolimense") || ecuador.includes ("Encebollado", "Locro de papa", "Cuy asado", "Churrasco ecuatoriano", "Mote pillo") || peru.includes ("Causa limeña", "Pachamanca", "Ají de gallina", "Tacu tacu", "Arroz chaufa") )