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

  let productImg= document.getElementById("Product");
  let productTitle= document.getElementById("Title");
  let productId= document.getElementById("Brand");
  let productStatus= document.getElementById("Status");

  ////////////////////////////////////////////////////// // 

  // let apiGlos = "http://localhost:3000/grocery";
  // let tbodyEle = document.querySelector("tbody");
  
  // async function fetchedData() {
  //   try {
  //     let response = await fetch(`${apiGlos}/1`);
  //     let data = await response.json();
  //     console.log(data);
  //     showCart(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // let arr = JSON.parse(localStorage.getItem("BasketProducts")) || [1, 2, 3, 4];
  
  // Display(arr);
  
  // function Display(arr) {
  //   tbodyEle.innerHTML = "";
  //   arr.forEach((ele) => {
  //     fetch(`${apiGlos}/${ele}`)
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((data) => {
  //         console.log(data);
  //         showCart(data);
  //       });
  //   });
  // }
  
  // function showCart(cart) {
  //   console.log("this is cart", cart);
  //   let total = document.getElementById("subTotalSum");
  //   document.getElementById("cartLen1").innerText = arr.length;
  
  //   var row = document.createElement("tr");
  
  //   var itemName = document.createElement("td");
  //   itemName.textContent = cart.brand + " " + cart.category;
  
  //   var price = document.createElement("td");
  //   price.textContent = "Rs. " + cart.price;
  
  //   var quantity = document.createElement("h3");
  //   quantity.textContent = cart.quantity;
  
  //   let increment = document.createElement("button");
  //   increment.classList.add("btn123");
  //   increment.innerText = "+";
  //   increment.addEventListener("click", () => {
  //     // total.value++;
  //     // total.innerHTML = total.value;
  //     cart = cart.quantity++;
  //     subtotal.innerText = cart;
  //     showCart();
  //   });
  //   // quantity.append(increment, decrement);
  
  //   let decrement = document.createElement("button");
  //   decrement.classList.add("btn123");
  //   decrement.innerText = "-";
  //   decrement.addEventListener("click", () => {
  //     cart = cart.decrement--;
  //     showCart();
  //   });
  
  //   let deleBtn = document.createElement("button");
  //   let delete1 = document.createElement("td");
  //   deleBtn.innerText = "Delete Item";
  //   deleBtn.addEventListener("click", () => {
  //     let filterarr = [];
  
  //     for (let i = 0; i < arr.length; i++) {
  //       if (arr[i] != cart.id) {
  //         filterarr.push(arr[i]);
  //       } else {
  //         return false;
  //       }
  //     }
  //     console.log(filterarr);
  //     localStorage.setItem("BasketProducts", JSON.stringify(filterarr));
  //     Display(filterarr);
  //   });
  
  //   // totalDis = row.append(itemName, price, quantity);
  //   // tbodyEle.append(row);
  //   // let incdecq = document.createElement("td");
  //   let incdecq = document.createElement("td");
  //   incdecq.setAttribute("id", "incdecq");
  //   // subtotal.innerText = "0";
  
  //   // incdecq.classList.add("incdecq");
  //   let subtotal = document.createElement("td");
  //   subtotal.setAttribute("id", "subtotal1");
  //   subtotal.innerText = "0";
  
  //   let hori = document.createElement("hr");
  //   incdecq.append(increment, quantity, decrement);
  //   delete1.append(deleBtn);
  //   row.append(itemName, price, incdecq, subtotal, delete1, hori);
  //   tbodyEle.append(row);
  
  //   let sum = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     sum += cart[i].price * cart[i].quantity;
  //   }
  //   total.innerText = sum;
  // }


 
  





  

  



