//Chuyển slide
var counter =1;
setInterval(function(){
    document.getElementById('radio' + counter).checked= true;
    counter++;
    if(counter>4){
        counter=1;
    }
},1500)
//Sign in / Sign up
const formOpenBtn=document.querySelector('.form-open'),
formContainer = document.querySelector('.form_container'),
formCloseBtn = document.querySelector('.form_close'),
signupBtn = document.querySelector('#signup'),
signupLink=document.querySelector('.sign_up_btn'),
loginBtn = document.querySelector('#login'),
pwShowHide = document.querySelectorAll('.pw_hide')

formOpenBtn.addEventListener("click",()=> formContainer.classList.remove("opacity"));
formCloseBtn.addEventListener("click",()=> formContainer.classList.add("opacity"))

signupLink.addEventListener("click",(e)=>{
    e.preventDefault();
    formContainer.classList.add("active")
    formContainer.classList.remove("opacity")
})
signupBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    formContainer.classList.add("active")
})
loginBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    formContainer.classList.remove("active")
})

pwShowHide.forEach((icon)=>{
    icon.addEventListener("click",() =>{
        let getPwInput = icon.parentElement.querySelector("input");
        if(getPwInput.type == "password"){
            getPwInput.type= "text"
            icon.classList.replace("fa-eye-slash","fa-eye")
        }else{
            getPwInput.type = "password";
            icon.classList.replace("fa-eye", "fa-eye-slash");
        }
    })
})


