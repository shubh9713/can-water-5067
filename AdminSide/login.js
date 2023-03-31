let email= document.getElementById("email")
let pass= document.getElementById("password")


let button = document.getElementById("button")
button.addEventListener("click",()=>{

      
    

    fetch("http://localhost:3000/admin")
    .then((res)=> res.json())
    .then((data)=> {
        console.log(data)
        data.forEach(element => {
            if(element.email==email.value && element.password==pass.value){
                alert("login succes")
                location.replace("dashboard.html")
                
            }
            else{
                alert("Only admin can access")
            }
        });
    })
    .catch((err)=> console.log(err))
    
})
