let url = "http://localhost:3000/"

let register=document.getElementById("register");
let login= document.getElementById("login")
// let namefield=document.getElementById("namefield")
let title=document.getElementById("title")


//Parameshwar
let name1 = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let aboutUs2 = document.getElementById("aboutUs");

login.onclick = function(){
    namefield.style.maxHeight="0";
    title.innerHTML="Log In";

}
register.onclick = function(){
    namefield.style.maxHeight="60px";
    title.innerHTML="Register";

}

//Registration Section

register.addEventListener("click", function(){
    fetchDataFromRegister();

})

function fetchDataFromRegister()
{
    let pass = password.value;
    if(name1.value == "")
    {
        alert("Name Cannot be Empty");
    }
    else if(email.value == "")
    {
        alert("Email cannot be empty");
    }
    else if(pass.length < 4)
    {
        alert("Password is too weak, Password length should be greater tha 5")
    }
    else{

    let obj = {
        Name:name1.value,
        email: email.value,
        password:password.value


    }
    fetch(`${url}register`, {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    })
    .then((res) => res.json())
    .then((data) =>{
        console.log(data);
        alert("Register Successful");
    })
}
}


// Login Section
let count =0;
login.addEventListener("click", function(){
    let loginCount = count++;
    fetchDataForLogin(loginCount);
})

function fetchDataForLogin(loginCount)
{
    
    if(loginCount >=2)
    {
        fetch(`${url}register`)
       .then((res) => res.json())
       .then((data) =>{
        console.log("login")
        console.log(data)
        loginData(data)
       })

    }
    else{
        loginCount++;

    }
    
}

function loginData(data)
{
    console.log("login function", data)
    console.log(typeof(email.value), typeof(password.value))
    console.log(typeof(data.email), typeof(data.password))
    let flag = 0;
    data.forEach(ele => {
        if(ele.email == email.value && ele.password == password.value)
        {
            alert("Login Successfull");
            window.location.href = "index.html";
            localStorage.setItem("userName", (ele.Name));
            flag = 1;
        }
    });

    if(flag==0)
    {
        alert("Wrong Credentials");
    }

    
   
}
