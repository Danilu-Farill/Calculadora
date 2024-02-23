/*
let a = Number(prompt("primer numero"));
let b = Number(prompt('segundo numero'));

let c = a + b;

console.log(c);
*/


//funciona con cualquera de las dos opciones para los numeros, pero para que aparezca nan es con parseint o parsefloat


function boton(){
    const form = document.getElementById("form1");
    let operating1 = form["operatingA"];
    let operating2 = form['operatingB'];
    let result1 = parseFloat(operating1.value) + parseFloat(operating2.value);
    if(isNaN(result1)){
        alert('NO HAS COLOCADO NINGÚN NÚMERO');
        
    }
        document.getElementById("result").innerHTML = `RESULTADO: ${result1}`;
    
}

/*
function boton(){
    const form = document.getElementById("form1");
    let operating1 = form["operatingA"];
    let operating2 = form['operatingB'];
    let result1 = Number(operating1.value) + Number(operating2.value);
    if(result1 => 0){
       if(isNaN(result1)){
        alert('NO HAS COLOCADO NINGÚN NÚMERO');
        
    }
        document.getElementById("result").innerHTML = `RESULTADO: ${result1}`;
}
*/

   
