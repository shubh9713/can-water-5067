let apiGlos = "http://localhost:3000/grocery";
let tbodyEle = document.querySelector("tbody");

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
let arr = JSON.parse(localStorage.getItem("BasketProducts")) || [1, 2, 3, 4];

Display(arr);

function Display(arr) {
  tbodyEle.innerHTML = "";
  arr.forEach((ele) => {
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
  console.log("this is cart", cart);
  let total = document.getElementById("subTotalSum");
  document.getElementById("cartLen1").innerText = arr.length;

  var row = document.createElement("tr");

  var itemName = document.createElement("td");
  itemName.textContent = cart.brand + " " + cart.category;

  var price = document.createElement("td");
  price.textContent = "Rs. " + cart.price;

  var quantity = document.createElement("h3");
  quantity.textContent = cart.quantity;

  let increment = document.createElement("button");
  increment.classList.add("btn123");
  increment.innerText = "+";
  increment.addEventListener("click", () => {
    // total.value++;
    // total.innerHTML = total.value;
    cart = cart.quantity++;
    subtotal.innerText = cart;
    showCart();
  });
  // quantity.append(increment, decrement);

  let decrement = document.createElement("button");
  decrement.classList.add("btn123");
  decrement.innerText = "-";
  decrement.addEventListener("click", () => {
    cart = cart.decrement--;
    showCart();
  });

  let deleBtn = document.createElement("button");
  let delete1 = document.createElement("td");
  deleBtn.innerText = "Delete Item";
  deleBtn.addEventListener("click", () => {
    let filterarr = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] != cart.id) {
        filterarr.push(arr[i]);
      } else {
        return false;
      }
    }
    console.log(filterarr);
    localStorage.setItem("BasketProducts", JSON.stringify(filterarr));
    Display(filterarr);
  });

  // totalDis = row.append(itemName, price, quantity);
  // tbodyEle.append(row);
  // let incdecq = document.createElement("td");
  let incdecq = document.createElement("td");
  incdecq.setAttribute("id", "incdecq");
  // subtotal.innerText = "0";

  // incdecq.classList.add("incdecq");
  let subtotal = document.createElement("td");
  subtotal.setAttribute("id", "subtotal1");
  subtotal.innerText = "0";

  let hori = document.createElement("hr");
  incdecq.append(increment, quantity, decrement);
  delete1.append(deleBtn);
  row.append(itemName, price, incdecq, subtotal, delete1, hori);
  tbodyEle.append(row);

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += cart[i].price * cart[i].quantity;
  }
  total.innerText = sum;
}

// // document.querySelector("#cartLen").innerHTML = cart.length;

// document.querySelector("#cartLen1").innerHTML = cart.length;

// showCart(cart);

// document
//   .querySelector("#continueShopBtn")
//   .addEventListener("click", function () {
//     console.log("here");
//     window.location.href = "bakery.html";
//   });

// document
//   .querySelector("#emptyBasketBtn")
//   .addEventListener("click", function () {
//     console.log("here");
//     cart = [];
//     showCart(cart);
//     localStorage.setItem("cartValue", JSON.stringify(cart)); /////===================================================================>
//     window.location.reload();
//   });
// document.querySelector("#checkoutBtn").addEventListener("click", function () {
//   // console.log("here")
//   window.location.href = "payment.html";
// });
// // Appending using fetch

// async function fetchedData() {
//   try {
//     let response = await fetch(`http://localhost:3000/grocery`);
//     let data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// function showCart(cart) {
//   var totalSub = 0;
//   var totalDis = 0;
//   cart.map(function (elem) {
//     var row = document.createElement("tr");
//     var td1 = document.createElement("td");
//     td1.textContent = elem.name;
//     var td2 = document.createElement("td");
//     td2.textContent = "Rs. " + elem.Price;
//     var td3 = document.createElement("td");
//     td3.textContent = elem.qty;
//     var td4 = document.createElement("td");
//     td4.textContent = "Rs. " + elem.Price;
//     var td5 = document.createElement("td");
//     td5.textContent = "Rs. " + (elem.Stricked - elem.Price);
//     // console.log(parseInt(elem.mrp));
//     totalSub += elem.Price;
//     totalDis += elem.Stricked - elem.Price;
//     console.log(totalDis);
//     totalDis = row.append(td1, td2, td3, td4, td5);
//     document.querySelector("tbody").append(row);

//     // console.log(typeof totalSub);
//     // console.log(td4);
//     printSubtotal(totalSub);
//     printDis(totalDis);
//     grandTotal(totalSub, totalDis);
//   });
// }
// // var bagLen = document.querySelector("#bagLen");
// // var cartLen = document.querySelector("#cartLen");
// // bagLen.textContent = cart.length;
// // cartLen.textContent = cart.length;

// let yourbascket = (document.querySelector("#cartLen1").innerHTML = cart.length);

// function printSubtotal(totalSub) {
//   document.querySelector("#subTotalSum").textContent = totalSub;
//   // console.log(totalSub);
// }
// function printDis(totalDis) {
//   document.querySelector("#subTotalDis").textContent = totalDis;
//   document.querySelector("#savedMoney").textContent = totalDis;
//   // console.log(totalSub);
// }
// function grandTotal(totalSub, totalDis) {
//   document.querySelector("#grandTotal1").textContent = totalSub;
//   document.querySelector("#grandTotal2").textContent = totalDis;
// }
// function openNav() {
//   document.getElementById("mySidepanel").style.width = "250px";
// }

// /* Set the width of the sidebar to 0 (hide it) */
// function closeNav() {
//   document.getElementById("mySidepanel").style.width = "0";
// }

// function openPerson() {
//   document.getElementById("personDropdown").classList.toggle("show");
// }

// // Close the dropdown if the user clicks outside of it
