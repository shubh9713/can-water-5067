let brand=document.getElementById("brand");
let image=document.getElementById("image");
let title=document.getElementById("title");
let price=document.getElementById("price");
let addatabutton=document.getElementById("addProducts");
let tbody=document.querySelector("tbody");

async function fetchdata(){

    let res=await fetch("http://localhost:3000/supplements")
    let data=await res.json()
    console.log(data)
    data.forEach(e => {
        
       tbody.append( append(e.brand,e.price,e.image,e.title,e.id))
    });
}
fetchdata()

addatabutton.addEventListener("click",()=>{
    
    let data={
        brand:brand.value,
        image:image.value,
        title:title.value,
        price:price.value,

    }
    addata(data)
})

async function addata(x){

    let res=await fetch("http://localhost:3000/supplements",{
        method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(x)
    })
    let data=await res.json()
    console.log(data)
}


function append(brand,price,img,title,id){

    let tr=document.createElement("tr");
    tr.setAttribute("data-id",id)
    let brand1=document.createElement("td");
    let price1=document.createElement("td");
    let title1=document.createElement("td");
    let image1=document.createElement("img");
    image1.className="image";
    brand1.innerText=brand;
    price1.innerText=price;
    title1.innerText=title;
    image1.src=img;
    // let edit=document.createElement("button")
    let remove=document.createElement("button")
    remove.innerText="❌";
    // edit.innerText="✏️";
    
   
//     edit.addEventListener("click",()=>{
        
//       name1.contentEditable=true;
      
      
//       let data={
//         name:name.innerText,
//         image:image.innerText,
//         title:title.innerText,
//         price:price.innerText,

//     }
//    console.log(data)
//     //    edit1(id,data);
        
//     }) 
   
    remove.addEventListener("click",()=>{
        deleteitem(id)
    })
    tr.append(image1,brand1,price1,title1,remove)
     return tr
    
}

 function deleteitem(id){
    fetch(`http://localhost:3000/supplements/${id}`,{
        method:"DELETE",
        headers:{ "Content-Type":"application/json"}
    })
}


async function edit1(id,data1){
   let res=await fetch(`http://localhost:3000/supplements/${id}`,{
        method:"PATCH",
        headers:{ "Content-Type":"application/json"},
        body:JSON.stringify(data1)

    })
    let data=await res.json()
    console.log(data)
}






///////////////////////////////////////////////////////////