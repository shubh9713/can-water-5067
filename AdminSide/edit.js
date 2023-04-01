let brand=document.getElementById("brand");
let image=document.getElementById("img");
let title=document.getElementById("title");
let price=document.getElementById("price");
let category= document.getElementById("category")
let country= document.getElementById("country")
let editbtn=document.getElementById("editbtn");
let appendDiv = document.getElementById("output")


























// async function fetchdata(){

//     let res=await fetch("http://localhost:3000/grocery")
//     let data=await res.json()
//     console.log(data)
//     data.forEach(e => {
        
//        appenddiv.append( append(e.brand,e.price,e.image,e.title,e.category,e.country))
//     });
// }
// fetchdata()

// editbtn.addEventListener("click",()=>{
    
//     let data={
//         brand:brand.value,
//         image:image.value,
//         title:title.value,
//         price:price.value,
//         category: category.value,
//         description: description.value,
//         country: country.value,   
//     }
//     addata(data)
// })

// async function addata(x){

//     let res=await fetch("http://localhost:3000/grocery",{
//         method:"PATCH",
//             headers:{
//                 "Content-Type":"application/json"
//             },
//             body:JSON.stringify(x)
//     })
//     let data=await res.json()
//     console.log(data)
// }



    
   

   
  

//  function deleteitem(id){
//     fetch(`http://localhost:3000/grocery/${id}`,{
//         method:"DELETE",
//         headers:{ "Content-Type":"application/json"}
//     })
// }


// async function edit1(id,data1){
//     let res=await fetch(`http://localhost:3000/grocery/${id}`,{
//          method:"PATCH",
//          headers:{ "Content-Type":"application/json"},
//          body:JSON.stringify(data1)
 
//      })
//      let data=await res.json()
//      console.log(data)
//  }
 





///////////////////////////////////////////////////////////