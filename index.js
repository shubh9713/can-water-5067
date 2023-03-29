// Aviraj
let A_Read_more_Btn = document.getElementById("A_Read_more");

let A_Button_Read_More_Info = document.getElementById("A_Button_Read_More_Info");

A_Read_more_Btn.addEventListener("click",function(){

    A_Button_Read_More_Info.innerHTML = null;
    DisplayMoreInfo();
})
function DisplayMoreInfo()
{
    let para = document.createElement("p");

    let Header = document.createElement("h2");
    Header.innerText = "India’s biggest Online Supermarket";
    para.innerHTML = "bigbasket.com believes in providing the highest level of customer service and is continuously innovating to meet customer expectations. Our On-time Guarantee is one such <br> assurance where we refund 5% of the bill value if the delivery is delayed (however, due to the pandemic caused by Covid-19 our delivery might get delayed. Delivery Guarantee <br>will not be applicable). For all your order values above Rs. 1200, we provide free delivery. A wide range of imported and gourmet products are available through our express <br>delivery and slotted delivery service. If you ever find an item missing on delivery or want to return a product, you can report it to us within 48 hours for a ‘no-questions-asked’ refund. <br><br>Best quality products for our quality-conscious customers. <br>bigbasket.com is synonymous with superior quality and continues to strive for higher levels of customer trust and confidence, by taking feedback and giving our customers what <br>they want. We have added the convenience of pre-cut fruits in our Fresho range. If it’s a product category you’re looking to shop from, we’ve made it convenient for you to access all <br>products in a section easily. For instance, if you’re looking for beverages, you can order from a long list of beverages that include cool drinks, hot teas, fruit juices and more. <br><br>We are proud to be associated closely with the farmers from whom we source our fresh products. Most of our farm-fresh products are sourced directly from farmers, which not only <br>ensures the best prices and freshest products for our customers but also helps the farmers get better prices. With more than 80 Organic Fruits and Vegetables and a wide range of <br>organic staples, bigbasket has the largest range in the organic products category. <br><br> When it comes to payment, we have made it easy for our customers can pay through multiple payment channels like Credit and Debit cards, Internet Banking, e-wallets and Sodexo <br>passes or simply pay Cash on Delivery (COD).The convenience of shopping for home and daily needs, while not compromising on quality, has made bigbasket.com the online <br>supermarket of choice for thousands of happy customers across India.<br><br>"

    A_Button_Read_More_Info.append(Header,para);
}


// Himanshu
window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("h-navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

