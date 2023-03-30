let register=document.getElementById("register");
let login= document.getElementById("login")
let namefield=document.getElementById("namefield")
let title=document.getElementById("title")


login.onclick = function(){
    namefield.style.maxHeight="0";
    title.innerHTML="Log In";

}
register.onclick = function(){
    namefield.style.maxHeight="60px";
    title.innerHTML="Register";

}