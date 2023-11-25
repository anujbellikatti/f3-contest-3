let userData = {};
userData = JSON.parse(localStorage.getItem("userData"));
console.log(userData);


let Profile_Name =  document.getElementById("Profile-Name");
let Profile_Email =  document.getElementById("Profile-Email");
let Profile_token =  document.getElementById("Profile-token");
let Profile_password =  document.getElementById("Profile-password");


Profile_Name.textContent = `your Name: ${userData.name}`;
Profile_Email.textContent = `your Email: ${userData.email}`;
Profile_token.textContent = `your Token: ${userData.token}`;
Profile_password.textContent = `your Password: ${userData.password}`;


let btn = document.getElementById("button").addEventListener("click",()=>{
     window.location.href = "./index.html"
})

