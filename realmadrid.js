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
pwShowHide = document.querySelectorAll('.pw_hide'),
body = document.querySelector('body'),
copyright=document.querySelector('.text-center'),
cupC1=document.querySelector('.cup_c1_real')

formOpenBtn.addEventListener("click",()=> {
    formContainer.classList.remove("opacity")
    body.style.opacity = '0.8'
    formContainer.style.opacity='1'
});
formCloseBtn.addEventListener("click",()=>{
    formContainer.classList.add("opacity")
    body.style.opacity = '1'
})

signupLink.addEventListener("click",(e)=>{
    e.preventDefault();
    body.style.opacity = '0.8'
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

document.onkeydown= function(e){
    switch(e.which){
        case 27:
            formContainer.classList.add("opacity")
    }
}

var icon = document.getElementById("icon")
var logoClb = document.getElementById("cup_c1")
icon.onclick=function(){
    document.body.classList.toggle("dark-theme")
    if(document.body.classList.contains("dark-theme")){
        icon.src = "./dark theme icon/sun.png"
        logoClb.src="./Image/my_madrid.png";
        copyright.style.borderTop = '1px solid #fff'
    }else{
        icon.src = "./dark theme icon/moon.png"
        logoClb.src="./Image/14cupc1.png";
        
    }
}
