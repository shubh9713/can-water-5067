let checkOut = document.querySelector(".btn");
let digits='12345abcdfgh'

let otp=''

genOtp()
function genOtp() {
  otp=''
  for (let i = 0; i < 4; i++) {
    otp+=digits[Math.floor(Math.random()*10)]
  }
  console.log(otp)
}

checkOut.addEventListener("click", (e) => {
  e.preventDefault()
  check = prompt(`Enter Otp.  ${otp}`)
  if(check==otp){
    alert("Thankyou for shopping.")
    window.location.href = "index.html";
    genOtp()
  }else{
    alert("Otp incorrect")
    genOtp()
  }
  console.log(check)
})
///////////////////////////////////////////////// saving data in local storage 


const storedData = JSON.parse(localStorage.getItem('billingDetailsArray')) || [];

const form = document.querySelector('form');
const proceedToPaymentBtn = document.querySelector('.btn');

proceedToPaymentBtn.addEventListener('click', function(event) {
  event.preventDefault();
  
  // Get form data
  
  let name= document.getElementById("name").value
  let email= document.getElementById("email").value
  let address= document.getElementById("address").value
  let city= document.getElementById("city").value
  let staus= document.createElement("h3")
 

  // Create an object with the form data
  let billingDetails = { name, email, address, city };
    storedData.push(billingDetails);

  // Save the form data in local storage
  localStorage.setItem('billingDetailsArray', JSON.stringify(storedData));

  
  console.log(storedData)
});






// // Get any existing data from local storage
// const storedData = JSON.parse(localStorage.getItem('billingDetailsArray')) || [];

// // Add the new form data to the array
// const billingDetails = { fullName, email, address, city, state, pinCode };
// storedData.push(billingDetails);

// // Save the updated array in local storage
// localStorage.setItem('billingDetailsArray', JSON.stringify(storedData));


