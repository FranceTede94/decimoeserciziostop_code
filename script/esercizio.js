document.addEventListener("DOMContentLoaded",function(){

modulo.onsubmit=function(e){
    e.preventDefault()

    const input = document.querySelectorAll("#modulo input");
    

    let immagini= ["immagini/1.png", "immagini/2.png", "immagini/3.png", "immagini/4.png"];
    let numero = parseInt(Math.random()*immagini.length);
    document.querySelector("#card img").setAttribute("src", immagini[numero]);
    document.querySelector(".nome span").innerHTML = document.getElementById("nome").value
    document.querySelector(".mail span").innerHTML = document.getElementById("email").value
    document.querySelector(".phone span").innerHTML = document.getElementById("tel").value
   
    for (let i = 0; i < input.length-1; i++){
        if (controllo(input[i])){
            input[i].classList.add("errore");
            input[i].nextElementSibling.innerHTML = "campo obbligatorio";
        } 
        else {
           input[i].classList.remove("errore");
            input[i].nextElementSibling.innerHTML = "";
           
        }
    }

    const InputEmail = document.getElementById("tel");
    if (!document.getElementById("email").classList.contains("errore")){
        VerificaEmail(document.getElementById("email"));
    }
    
    const InputTelefono = document.getElementById("tel");
    if (!document.getElementById("tel").classList.contains("errore")){
        VerificaTelefono(document.getElementById("tel"));
    }


    if(!document.getElementById("privacy").checked){
        document.getElementById("privacy").nextElementSibling.nextElementSibling.innerHTML= "accetta le condizioni per proseguire"
        document.getElementById("privacy").nextElementSibling.nextElementSibling.classList.add("errore");
    }
    else{
        document.getElementById("privacy").nextElementSibling.nextElementSibling.innerHTML= ""
        document.getElementById("privacy").nextElementSibling.nextElementSibling.classList.remove("errore");
    }
   
    if (!document.querySelectorAll("#modulo .errore").length) {
        document.getElementById("modulo").style.display = "none";
        document.getElementById("card").style.display = "block";
    }



}


});//DOMContentLoaded

function controllo(campo){
    if(campo.value == ""){
        return true
    }
    else{
        return false
    }
}


function VerificaEmail(email){

    const Email = controllaEmail(document.getElementById("email").value);
    console.log(Email);
    if(Email){
        email.classList.remove("errore");
        email.nextElementSibling.innerHTML="" 
    }
    else{
        email.classList.add("errore");
        email.nextElementSibling.innerHTML="Hai inserito una email sbagliata";
    }
 
}

function controllaEmail(email){
    const regexEmail= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
     regexEmail.test(email);
     if(regexEmail.test(email)){
        return true
     }
     else{
        return false
     }
  
}


function controllatelefono(telefono){
    const regexPhone = /^((00|\+)39[\. ]??)??3\d{2}[\. ]??\d{6,7}$/;
    regexPhone.test(telefono);
    if(regexPhone.test(telefono)){
        return true
     }
     else{
        return false
     }
}

function VerificaTelefono(telefono){

    const Phone = controllatelefono(document.getElementById("tel").value);
    console.log(Phone);
    if(Phone){
        telefono.classList.remove("errore");
        telefono.nextElementSibling.innerHTML="" 
        
    }
    else{
        telefono.classList.add("errore");
        telefono.nextElementSibling.innerHTML="Hai inserito un numero di telefono non valido.";
        
    }
 
}
