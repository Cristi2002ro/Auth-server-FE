let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");
 
signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
});
 
login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});

document.getElementById("submit").onclick= async function getToken(){
  let username=document.getElementById("username").value
  let password=document.getElementById("password").value
  
  const postSettings={
    //mode:"no-cors", nu mege, pt ca se va trimite plain text      
   method: 'PUT',
    body:JSON.stringify({
    "username":username,
    "password":password
    }),
   headers: {
    'Content-type':'application/json; charset=UTF-8'
    }
  }
  let promise=await fetch('http://localhost:8080/validatePassword',postSettings)
  let json=await promise.status;
  console.log(json);

  if(json==200){
    fetch('http://localhost:8080/otp/sendOtp?username='+username,{
      method: 'PUT',
     headers: {
      'Content-type':'application/json; charset=UTF-8'
      }
    }).then(
      resp=>{console.log(resp)}
    )
  window.location.href="otp.html";
  }
}
