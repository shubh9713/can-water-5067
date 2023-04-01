let brand=document.getElementById("brand");
let image=document.getElementById("image");
let title=document.getElementById("title");
let price=document.getElementById("price");
let category= document.getElementById("category")
let description= document.getElementById("description")
let country= document.getElementById("country")

let addatabutton=document.getElementById("addProducts");
let tbody=document.querySelector("tbody");



/////////////////////////////////////////

let updateimg= document.getElementById("updateimg")
let updateprice= document.getElementById("updateprice")
let updatebtn= document.getElementById("updateProducts")

async function fetchdata(){

    

    let res=await fetch("http://localhost:3000/grocery")
    let data=await res.json()
    console.log(data)
    data.forEach( (e,index)=> {
        
       tbody.append( append1(e.brand,e.price,e.image,e.title,e.id,e.category,e.country, e.description,index+1))
    });
}
fetchdata()

addatabutton.addEventListener("click",()=>{
    
    let data={
        brand:brand.value,
        image:image.value,
        title:title.value,
        price:price.value,
        category: category.value,
        description: description.value,
        country: country.value,   
    }
    addata(data)
})

async function addata(x){

    let res=await fetch("http://localhost:3000/grocery",{
        method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(x)
    })
    let data=await res.json()
    console.log(data)
}
 
let url= "http://localhost:3000/grocery"

function append1(brand,price,img,title,id,category,description,country,index){

    let tr=document.createElement("tr");
    tr.setAttribute("data-id",id)
    let brand1=document.createElement("td");
    let price1=document.createElement("td");
    let title1=document.createElement("td");
    let image1=document.createElement("img");
    let category1= document.createElement("td")
    let country1= document.createElement("td")
    let description1= document.createElement("td")
    

    image1.className="image";
    brand1.innerText=brand;
    price1.innerText=price;
    title1.innerText=title;
    category1.innerText= category;
    country1.innerText= country;
    description1.innerText= description;


    image1.src=img;
    let edit=document.createElement("button")
    let remove=document.createElement("button")
    remove.innerText="Remove Item";

    let Edit= document.createElement("button")
    remove.addEventListener("click",()=>{
        deleteitem(id)
    })


    Edit.innerText="Click Here To Edit"
    // Edit.addEventListener("click",()=>{

    //     localStorage.setItem("id",index)   
     Edit.addEventListener("click",(e)=>{
         localStorage.setItem("id", index)
          updateProducts(index);
       
     })
    
   
    tr.append(image1,brand1,title1, price1,category1,country1,description1,remove,Edit)
     return tr
    
}



///////////////////////////////////////////// function for update product

updatebtn.addEventListener("click",function(){
    let EditId = JSON.parse(localStorage.getItem("id"));
    console.log(EditId);
    updateProducts(EditId);
})


function updateProducts(getproduct){
    let obj={
        image: updateimg.value,
        price: updateprice.value
    }
    console.log(obj);
    fetch(`${url}/${getproduct}`,{
        method:"PATCH",
        headers:{
       "Content-Type":"application/json"
       },
       body:JSON.stringify(obj)
                
    })
            
  .then((res)=> res.json())
  .then((data)=>{
    console.log("updating",data);
    fetchdata();
  })
  localStorage.removeItem("id")
  .catch((err)=> console.log(err))
}






 function deleteitem(id){
    fetch(`http://localhost:3000/grocery/${id}`,{
        method:"DELETE",
        headers:{ "Content-Type":"application/json"}
    })
}


// async function edit1(id,data1){
//    let res=await fetch(`http://localhost:3000/grocery/${id}`,{
//         method:"PATCH",
//         headers:{ "Content-Type":"application/json"},
//         body:JSON.stringify(data1)

//     })
//     let data=await res.json()
//     console.log(data)
// }


















///////////////////////////////////////////////////////////