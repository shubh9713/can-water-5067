
let apiUrl = "http://localhost:3000/grocery";

let appending = document.getElementById("data");
let pagination = document.getElementById("pagination");

//appending the data to dom.
//1. GET
async function renderTable(pageNumber) {
    try {
        
        let response = await fetch(`${apiUrl}/posts?_limit=5&_page=${pageNumber}`);
        let totalPosts = response.headers.get("X-Total-Count");
        let totalButton = Math.ceil(totalPosts / 5)
        // console.log(totalButton);
        // console.log(totalPosts);
        pagination.innerHTML = null
        appending.innerHTML = null;
        for (let i = 1; i <= totalButton; i++){
            pagination.append(domButton(i));
        }
        let data = await response.json();
     
        // console.log(data);
        data.forEach((e) => {
            let tr = document.createElement("tr");
            let title = document.createElement("td");
            let price = document.createElement("td");
            let des = document.createElement("td");
            let button = document.createElement("button");
            button.innerText = "delete"
            button.addEventListener("click", () => {
                // console.log(e.id)
                deleteProduct(e.id);
            })
            title.innerText = e.title
            price.innerText = e.price;
            des.innerText = e.description;
            tr.append(title, price, des, button);
            // console.log(tr) 
            appending.append(tr);
        })
    }
    catch (e) {
        console.log(e)
    }
}

function domButton(i) {
    let button = document.createElement("button");
    button.setAttribute("data-id", i);
    button.innerText = i;
    button.addEventListener("click", (e) => {
        // console.log(e);
        // console.log(e.target.dataset.id);
        renderTable(e.target.dataset.id);
    })
    return button;
}

renderTable(1);
// 2. POST

async function addProduct() {
    try {
         let data = {
           title: document.getElementById("title").value,
           price: document.getElementById("price").value,
           description: document.getElementById("description").value,
         };
    //  console.log(data); we are getting;
        let response = await fetch(`${apiUrl}/posts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        let d = await response.json();
        console.log(d);
    }
    catch (e) {
        console.log(e);
    }
}

//PATCH- to update the data;

async function updateData() {
    try {
        let update_data = {
            title: document.getElementById("update-title").value,
            price: document.getElementById("update-price").value,
            description: document.getElementById("update-description").value
        }
        // console.log(update_data);
        let id = document.getElementById("update-id").value;

        let response = await fetch(`${apiUrl}/posts/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(update_data)

        })
        let d = await response.json();
        console.log(d);
    }
    catch (e) {
        console.log(e);
    }
}

//DELETE- to delete entire data

async function deleteProduct(id) {
    try {
        let response = await fetch(`${apiUrl}/posts/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
        let d = await response.json();
        console.log(d);
    }
    catch (e) {
        console.log(e);
    }
}

//PUT--- replaces entire data

async function replace() {
    try {
        let replace = {
            name: document.getElementById("replace_title").value,
            price: document.getElementById("replace_price").value
    
        };
        // console.log(replace);
        let id = document.getElementById("replace_id").value;
        let response = await fetch(`${apiUrl}/posts/${id}`, {
            method: "PUT",
            body: JSON.stringify(replace),
            headers: {
                "Content-Type": "application/json",
            }
        })
        let d = await response.json();
        console.log(d)
    }
    catch (e) {
        console.log(e);
    }
}