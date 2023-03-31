let id = document.getElementById("id");
let name = document.getElementById("name");
let email = document.getElementById("email");

fetch("http://localhost:3000/register")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data.forEach((element) => {
      id.append(element.id);
      name.append(`${element.firstName} ${element.lastName}`);
      email.append(element.email);
    });
  })
  .catch((err) => console.log(err));

  

  



