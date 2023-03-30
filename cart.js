document.querySelector("#cartLen").innerHTML = cart.length;

document.querySelector("#cartLen1").innerHTML = cart.length;

showCart(cart);

document
  .querySelector("#continueShopBtn")
  .addEventListener("click", function () {
    console.log("here");
    window.location.href = "bakery.html";
  });

document
  .querySelector("#emptyBasketBtn")
  .addEventListener("click", function () {
    console.log("here");
    cart = [];
    showCart(cart);
    localStorage.setItem("cartValue", JSON.stringify(cart)); /////===================================================================>
    window.location.reload();
  });
document.querySelector("#checkoutBtn").addEventListener("click", function () {
  // console.log("here")
  window.location.href = "payment.html";
});
// fetch("")
function showCart(cart) {
  var totalSub = 0;
  var totalDis = 0;
  cart.map(function (elem) {
    var row = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.textContent = elem.name;
    var td2 = document.createElement("td");
    td2.textContent = "Rs. " + elem.Price;
    var td3 = document.createElement("td");
    td3.textContent = elem.qty;
    var td4 = document.createElement("td");
    td4.textContent = "Rs. " + elem.Price;
    var td5 = document.createElement("td");
    td5.textContent = "Rs. " + (elem.Stricked - elem.Price);
    // console.log(parseInt(elem.mrp));
    totalSub += elem.Price;
    totalDis += elem.Stricked - elem.Price;
    console.log(totalDis);
    totalDis = row.append(td1, td2, td3, td4, td5);
    document.querySelector("tbody").append(row);

    // console.log(typeof totalSub);
    // console.log(td4);
    printSubtotal(totalSub);
    printDis(totalDis);
    grandTotal(totalSub, totalDis);
  });
}
// var bagLen = document.querySelector("#bagLen");
// var cartLen = document.querySelector("#cartLen");
// bagLen.textContent = cart.length;
// cartLen.textContent = cart.length;

let yourbascket = (document.querySelector("#cartLen").innerHTML = cart.length);

function printSubtotal(totalSub) {
  document.querySelector("#subTotalSum").textContent = totalSub;
  // console.log(totalSub);
}
function printDis(totalDis) {
  document.querySelector("#subTotalDis").textContent = totalDis;
  document.querySelector("#savedMoney").textContent = totalDis;
  // console.log(totalSub);
}
function grandTotal(totalSub, totalDis) {
  document.querySelector("#grandTotal1").textContent = totalSub;
  document.querySelector("#grandTotal2").textContent = totalDis;
}
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

function openPerson() {
  document.getElementById("personDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
  if (!e.target.matches(".personbtn")) {
    var myDropdown = document.getElementById("personDropdown");
    if (myDropdown.classList.contains("show")) {
      myDropdown.classList.remove("show");
    }
  }
};
