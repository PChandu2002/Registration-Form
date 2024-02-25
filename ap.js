
function validation(){
    if(document.Formfill.Username.value==""){
        document.getElementById("result").innerHTML="Enter Username*";
        return false;
    }
    else if(document.Formfill.Username.value.length<3){
        document.getElementById("result").innerHTML="Atleast three letters *";
        return false;
    }
    else if(document.Formfill.Email.value ==""){
        document.getElementById("result").innerHTML="Enter your Email ";
        return false;
    }
    else if(document.Formfill.Password.value ==""){
        document.getElementById("result").innerHTML="Enter your Password ";
        return false;
    }
    else if(document.Formfill.Password.value.length <6){
        document.getElementById("result").innerHTML="Password must be 6 char";
        return false;
    }
    else if(document.Formfill.CPassword.value ==""){
        document.getElementById("result").innerHTML="Enter confirm Password ";
        return false;
    }
    else if(document.Formfill.CPassword.value!==document.Formfill.Password.value){
        document.getElementById("result").innerHTML="Password does not matched ";
        return false;
    }
    else if(document.Formfill.Password.value ==document.Formfill.CPassword.value){
        popup.classList.add("open-slide")
        return false;
    }
   
}
var popup=document.getElementById('popup');
function Closeslide(){
    popup.classList.remove("open-slide")

}