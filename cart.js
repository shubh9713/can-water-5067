let apiGlos = "http://localhost:3000/grocery";
let tbodyEle = document.querySelector("tbody");
let total = document.getElementById("subTotalSum");
let grandTotal1= document.getElementById("grandTotal1");
let checkoutBtn = document.getElementById("checkoutBtn");

let arr = JSON.parse(localStorage.getItem("BasketProducts"))||[]

Display(arr);
document.getElementById("cartLen1").innerText = arr.length;

function Display(arr) {
  tbodyEle.innerHTML = "";
  arr.forEach((ele) => {
    console.log(typeof(ele));
    fetch(`${apiGlos}/${ele}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        showCart(data);
      });
  });
}

function showCart(cart) {
  // console.log("this is cart", cart);
  


  var row = document.createElement("tr");

  var itemName = document.createElement("td");
  itemName.textContent = cart.title;

  var price = document.createElement("td");
  price.textContent = "Rs. " + cart.price;

  var quantity = document.createElement("h3");
  quantity.textContent = cart.quantity;

  let increment = document.createElement("button");
  increment.classList.add("btn123");
  increment.innerText = "+";
  increment.addEventListener("click", function () {
    cart.quantity = cart.quantity + 1;
    quantity.innerText = cart.quantity;
    subtotal.innerText = `${Number(cart.price.split(" ")[0]) * cart.quantity}`
    grandTotal.innerText = subtotal.innerText;

})


  let decrement = document.createElement("button");
  decrement.classList.add("btn123");
  decrement.innerText = "-";
  decrement.addEventListener("click", function () {
    if(cart.quantity!=0){
      cart.quantity = cart.quantity -1;
      quantity.innerText = cart.quantity;
    }
    subtotal.innerText = `${Number(cart.price.split(" ")[0]) * cart.quantity}`

   
})


  
  let deleBtn = document.createElement("button");
  deleBtn.classList.add("deletec")
  deleBtn.innerText="DELETE"

  deleBtn.addEventListener("click", () => {

  });


  let incdecq = document.createElement("td");
  incdecq.setAttribute("id", "incdecq");
  // subtotal.innerText = "0";


  let subtotal = document.createElement("td");
  subtotal.setAttribute("id", "subtotal1");
  subtotal.innerText = `${Number(cart.price.split(" ")[0]) * cart.quantity}`;

  

  let hori = document.createElement("hr");
  incdecq.append(increment, quantity, decrement);

  row.append(itemName, price, incdecq, subtotal,hori,deleBtn);
  tbodyEle.append(row);

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += cart[i].price * cart[i].quantity;
  }
  total.innerText = sum;
}

let grandTotal = document.getElementById("grandTotal1");
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i].price * arr[i].quantity;
}
grandTotal.innerText =  sum;

checkoutBtn.addEventListener("click", function(){
  window.location.href = "payment.html";
})

// let url = "http://localhost:3000/grocery";

// displayData(arr);

// function displayData(arr)
// {
//   tbody.innerHTML = "";
//   arr.forEach(ele => {
//     console.log(ele)
//     // tbody.append(getCard)
//     fetch(`${url}/${ele}`)
//     .then((res) => res.json())
//     .then((data) =>{
//       console.log(data);
//       tbody.append(getCard(data));
//     })

//   });
// }

// function getCard(data)
// {
//   let tr = document.createElement("tr");

//   let td1 = document.createElement("td");
//   let p1 = document.createElement("p");
//   p1.innerText = data.title;
//   td1.append(p1);

//   let td2 = document.createElement("td");
//   let p2 = document.createElement("p");
//   p2.innerText = data.price;
//   td2.append(p2);

//   let td3 = document.createElement("td");
//   let p3 = document.createElement("p");
//   p3.innerText = data.quantity;
//   td3.append(p3);

//   let td1 = document.createElement("td");
//   let p1 = document.createElement("p");
//   p1.innerText = data.title;
//   td1.append(p1);





// }

