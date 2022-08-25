//Capturamos los valores de los elementos y guardamos en variables
const Contador=document.getElementById("numero"); 
const Disminuir=document.getElementById("Disminuir"); 
const Reiniciar=document.getElementById("Reiniciar"); 
const Aumentar=document.getElementById("Aumentar"); 

let num=0;//Contador
let estilo=document.querySelector('#numero')

//Accion para aumentar el numero
    Aumentar.addEventListener("click", ()=>{
        num++;
        if(num > 0){
            estilo.style.color = "green";
            Contador.innerHTML = num;
        }else if(num==0){
            estilo.style.color = "black";
            Contador.innerHTML = num;
        }else{
            estilo.style.color = "red";
            Contador.innerHTML = num;
        }
    });

//Accion para disminuir el numero 
    Disminuir.addEventListener("click", ()=>{
        num--;
        if(num > 0){
            estilo.style.color = "green";
            Contador.innerHTML = num;
        }else if(num==0){
            estilo.style.color = "black";
            Contador.innerHTML = num;
        }else{
            estilo.style.color = "red";
            Contador.innerHTML = num;
        }
    });
       
//Accion para reciniciar el contador
    Reiniciar.addEventListener("click", ()=>{
       num=0;
       Contador.innerHTML = num;
       estilo.style.color = "black";
    });