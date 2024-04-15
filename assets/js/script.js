
let nombreV = "";
let apellidoV ="";
let edadV = 0;


let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let edad = document.getElementById("edad");

let btnEnviar = document.getElementById("btnEnviar");

btnEnviar.addEventListener("click", (e)=>{
    e.preventDefault();
    nombreV = nombre.value;
    apellidoV = apellido.value;
    edadV = edad.value;
    
    if(nombreV ===""){
        alert("Ponte vio")
        return;
    }
    if(apellidoV ===""){
        alert("Ya po oe")
        return;
    }
    if(edadV ===""){
        alert("Para la wea po")
        return;
    }



    console.log(`Nombre : ${nombreV} y le apellido es ${apellidoV} y la edad es: ${edadV}`);


})

