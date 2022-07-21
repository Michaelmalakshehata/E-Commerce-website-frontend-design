//import module
import {NameValidation, PasswordValidation} from './Validate.js'


document.getElementById("FullName").onblur=function(){
    try{
        NameValidation(this.value);
        //if editing error input then we need to remove the error
        this.classList.remove("is-invalid");
        this.nextElementSibling.innerText = '';
    }
    catch(e){
        //console.log(this.nextElementSibling)
        this.classList.add("is-invalid");
        this.nextElementSibling.innerText = e.message;
    }
}
document.getElementById("Password").onblur=function(){
    try{
        PasswordValidation(this.value);
        //if editing error input then we need to remove the error
        this.classList.remove("is-invalid");
        this.nextElementSibling.innerText = '';
    }
    catch(e){
        //console.log(this.nextElementSibling)
        this.classList.add("is-invalid");
        this.nextElementSibling.innerText = e.message;
    }
}


document.forms[0].onsubmit = function(eve){
    var name = document.getElementById("FullName").value;
    var password = document.getElementById("Password").value;
    try{
     
        NameValidation(name);
        PasswordValidation(password);
        var nm= localStorage.getItem('username');
        var pass=localStorage.getItem('password');
    if(name==nm&&password==pass)
    {
        alert('you are logged in.');
    }
    else{
        alert('Enter correct user name and password');
        eve.preventDefault();
    }
       }
    catch(e){
        eve.preventDefault();
        alert(e.message);
    }
    
    
}