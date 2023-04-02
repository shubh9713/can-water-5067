// let id = document.getElementById("id");
// let name = document.getElementById("name");
// let email = document.getElementById("email");

// fetch("http://localhost:3000/register")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     data.forEach((element) => {
//       id.append(element.id);
//       name.append(`${element.firstName} ${element.lastName}`);
//       email.append(element.email);
//     });
//   })
//   .catch((err) => console.log(err));




  ///////////////////////////////////////////////
let totalorders = document.getElementById("totalorders");
let tbody= document.querySelector("tbody")

totalorders.addEventListener("click",function(){
  let data= JSON.parse(localStorage.getItem("billingDetailsArray"))
  
  displayplay(data)
})
  
  function displayplay(data){
    tbody.innerHTML ="";
    data.forEach((ele)=>{
      tbody.append(creatingtr(ele.name, ele.email, ele.city,"Completed"))
    })
    
    
  }
  
  function creatingtr(name, email,city,address){
    
    let tr1= document.createElement("tr");
    let td1= document.createElement("td");
    let td2= document.createElement("td");
    let td3= document.createElement("td");
    let td4= document.createElement("td");
    
    td1.innerText=name;
    td2.innerText=city ;
    td3.innerText= email;
    td4.innerText= address;

    tr1.append(td1,td2,td3,td4)

    return tr1
    
  }







  

  

  

  


 
  





  

  



