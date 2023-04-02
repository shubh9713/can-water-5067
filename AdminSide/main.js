let url = "http://localhost:3000/grocery";

let tbody = document.querySelector("tbody");
let productImage = document.getElementById("productImage");
let productPrice = document.getElementById("productPrice");
let updatProductBtn = document.getElementById("updatProductBtn");
let totalitems = document.getElementById("totalitems");
let addBtn = document.getElementById("addBtn");
let productDiv = document.getElementById("productDiv");

let addProductsBtn = document.getElementById("addProducts");
let image = document.getElementById("image");
let brand = document.getElementById("brand");
let title = document.getElementById('title');
let price = document.getElementById("price");
let category = document.getElementById("category");
let description = document.getElementById("description");
let country = document.getElementById("country");
let seasonal = document.getElementById("seasonal");
let quantity = document.getElementById("quantity");
let data = document.getElementById("data");

let pagination = document.getElementById("pagination");

// window.addEventListener("load", function(){
    fetchGroceryData();
// })
// let totalDatalen = totalitems.innerText
// console.log(totalDatalen, "totla", typeof(totalDatalen))
function fetchGroceryData(pageNumber)
{
    anger()
    fetch(`${url}?_limit=6&_page=${pageNumber}`)
    .then((res) => {
        let totalItems = 40;
        // console.log(res.length)
        createPagination(totalItems);

        return res.json()
    })
    .then((data) => {
        console.log(data)
        appendData(data);
       
    })

    
}

 function anger(){
    fetch(url)
    .then((res) => res.json())
    .then((data)=>{
        totalitems.innerText = data.length;
    })
 }

function createPagination(totalItems)
{
    let totalBuutons = Math.ceil(totalItems/6);
    pagination.innerHTML = "";
    for(let i=1; i<=totalBuutons; i++)
    {
        pagination.append(getButton(i));
    }
}

function getButton(i){
    let btn = document.createElement("button");
    btn.setAttribute("class", "paginateButton");
    btn.setAttribute("data-id", i);
    btn.innerText = i;

    btn.addEventListener("click", function(e){
        fetchGroceryData(e.target.dataset.id)
    })

    return btn
}



function appendData(data)
{
    tbody.innerHTML = "";
    // totalitems.innerText = ele.length;
    data.forEach((ele) => {
        tbody.append(getCard(ele.image, ele.title, ele.brand, ele.price, ele.category, ele.description, ele.country, ele.id));
        
    });

    // for(let i=ele.length-1; i>=0; i--)
    // {
    //     tbody.append(getCard(ele[i].image, ele[i].title, ele[i].brand, ele[i].price, ele[i].category, ele[i].description, ele[i].country, ele[i].id));

    // }
}



function getCard(productImg, title, brand, price, category, description,country, id){

    let tr = document.createElement("tr");


    let td1 = document.createElement("td");
    let image = document.createElement('img')
    image.setAttribute("src", productImg);
    td1.append(image);

    let td2 = document.createElement("td");
    let p2 = document.createElement("p")
    p2.innerText = title;
    td2.append(p2);

    let td3 = document.createElement("td");
    let p3 = document.createElement("p")
    p3.innerText = brand;
    td3.append(p3);

    let td4 = document.createElement("td");
    let p4 = document.createElement("p")
    p4.innerText = price;
    td4.append(p4)

    let td5 = document.createElement("td");
    let p5 = document.createElement("p")
    p5.innerText =category;
    td5.append(p5)

    let td6 = document.createElement("td");
    let p6 = document.createElement("p")
    p6.innerText = description;
    td6.append(p6)

    let td7 = document.createElement("td");
    let p7 = document.createElement("p");
    p7.innerText = country;
    td7.append(p7);

    // let td8 = document.createElement("td");
    // let updateProductBtn = document.createElement("button");
    // updateProductBtn.innerText = "ADD PRODUCT"
    // td8.append(updateProductBtn);
   

    let td9 = document.createElement("td");
    let removeBtn = document.createElement("button");
    removeBtn.setAttribute("id", "removeBtn")
    removeBtn.innerText = "DELETE"
    td9.append(removeBtn);

    removeBtn.addEventListener("click", function(){
        // console.log(id)
        deleteCategoryItem(id);
    })

    let td10 = document.createElement("td");
    let editBtn = document.createElement("button");
    editBtn.setAttribute("id", "editBtn")
    editBtn.innerText = "EDIT";
    td10.append(editBtn);

    editBtn.addEventListener("click", function(){
        productDiv.style.display = "block";
        // data.style.width = "100%"
        // data.style.width= "0%";
        data.style.marginLeft = "50px";
        editProductDetails(id);
    })

    tr.append(td1, td2, td3, td4, td5, td6, td7,  td9, td10);

    return tr

    
}


//Deleting item from grocery
function deleteCategoryItem(id)
{
    fetch(`${url}/${id}`, {
        method:"DELETE"
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        alert("Item Deleted Successfully");
    })
}


//editing items in grocery

function editProductDetails(id){
    updatProductBtn.addEventListener("click", function(){
        update(id);
    })
}

function update(id)
{
    let obj = {
        image: productImage.value,
        price: productPrice.value
    }
    fetch(`${url}/${id}`, {
        method: "PATCH",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
        

    })
    .then((res) => res.json())
    .then((data) =>{
        console.log(data);
        alert("Item Updated Successfully");
    })
}


addBtn.addEventListener("click", function(){
    productDiv.style.display = "block";
    data.style.marginLeft = "50px";
})


// ADDING ITEMS

addProductsBtn.addEventListener("click", function(){
    if(image.value == "")
    {
        alert("Image cannot be empty");
    }
    else if(brand.value == "")
    {
        alert("Brand canno be empty")
    }
    else if(title.value == "")
    {
        alert("Title cannot be empty");
    }
    else if(price.value == "")
    {
        alert("Price cannot be empty")
    }
    else if(category.value == "")
    {
        alert("Category cannot be empty")
    }
    else if(description.value == "")
    {
        alert("Description cannot bee empty")
    }
    else if(country.value == "")
    {
        alert("Country cannot be empty");
    }
    else if(seasonal.value == "")
    {
        alert("seasonal cannot be empty");
    }
    else if(quantity.value == "")
    {
        alert("quantity cannot be empty");
    }
    else{
        let obj = {
            image : image.value,
            title: title.value,
            price :price.value,
            category:category.value,
            description:description.value,
            brand:brand.value,
            seasonal:seasonal.value,
            country: country.value,
            quantity:quantity.value

        }

        addProductToData(obj);
    }
})

function addProductToData(obj)
{
    fetch(url, {
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(obj)
    })
    .then((res) => res.json())
    .then((data) =>{
        console.log("Posted Successfully", data)
        reverseData();
    })
}

function reverseData(){
    fetch(url)
    .then((res) => res.json())
    .then((data) =>{
    //   newlyAddedData(data);
    alert("Product added Successfully");
    })
}

// function newlyAddedData(ele){
//     tbody.innerHTML = "";
//     for(let i=ele.length-1; i>=0; i--)
//     {
//         tbody.append(getCard(ele[i].image, ele[i].title, ele[i].brand, ele[i].price, ele[i].category, ele[i].description, ele[i].country, ele[i].id));

//     }
// }

























///////////////////////////////////////////////////////////