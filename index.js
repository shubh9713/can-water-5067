
// Scrolling Js part
window.onscroll = function() {myFunction()};

var navbar = document.querySelector(".navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// Slide Show Part


//Parmeshwar Murmu

let groceryUrl = "http://localhost:3000/"

let slide = document.getElementById("slideShow");
let imageSlideShowSection = document.getElementById("imageSlideShowSection");
// let btn = document.querySelector("button")
let searchButton = document.getElementById("searchButton")
let spanButton  = document.getElementById("spanButton");
let searchProducts = document.getElementById("searchProducts");
let span = document.querySelector("#more");
let topOfferMainSection = document.querySelector("#BeautyandHugieneItemsMainSections");

// top offer
let BeautyandHugieneItemsMainSections = document.querySelector("#BeautyandHugieneItemsMainSections");


let imageArr = [
    "https://www.bigbasket.com/media/uploads/banner_images/YXNP13035-1200X300-280223.jpg",
    "https://www.bigbasket.com/media/uploads/banner_images/YXNP13038-1200X300-280223.jpg",
    "https://www.bigbasket.com/media/uploads/banner_images/YXNP13041-1200X300-280223.jpg",
    "https://www.bigbasket.com/media/uploads/banner_images/L1-YXNP12566-1200X300-16thFEB23.jpg",
    "https://www.bigbasket.com/media/uploads/banner_images/L1-YXNP11805-1200X300-3rdJAN23.jpg",
    "https://www.bigbasket.com/media/uploads/banner_images/YXNP14089-1200X300-16032023.jpg",
    "https://www.bigbasket.com/media/uploads/banner_images/YXNP13032-1200X300-280223.jpg",
    "https://www.bigbasket.com/media/uploads/banner_images/YXNP14092-1200X300-16thmar23.jpg"

]

window.addEventListener("load", function(){
    slideShow();
})

// btn.addEventListener("click", function(){
//     slideShow();
// })

let x;
function slideShow()
{
    let img = document.createElement("img");
    img.setAttribute("src", "https://www.bigbasket.com/media/uploads/banner_images/YXNP14089-1200X300-16032023.jpg");
    let i=0;
    x = setInterval(() => {
    if(i==imageArr.length)
    {
        i=0;
    }

    img.src = imageArr[i++];
    slide.append(img);

    }, 2000);
}

//offer slideshow



let offer123= ["MIN. 24% OFF on Fruits","MIN.30% OFF on Vegetables", "10% OfF on Dairy Products","20% OFF on non-veg items","500/- OFF on Min 2000/- shopping"];
    let nu=0
   
    
function slid(){
    if(nu==5){
        nu=0
    }
    let slideShowoffer=document.getElementById("slideShowoffer")
for(let i=0;i<1;i++){
    slideShowoffer.innerText=offer123[nu]
    nu++   
   
}
}
setInterval(slid, 1000);
