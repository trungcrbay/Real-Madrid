//Chuyển slide
var counter = 1;
function carouselImage() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}
const sliderImage = setInterval(carouselImage, 1500)

function stopCarouselImage(radio) { //
    radio.onclick = function () {
        if (radio.checked = true) {
            clearInterval(sliderImage);
        }
    }
}

const radioButtons = document.querySelectorAll('[name="btn-radio"]');
radioButtons.forEach(stopCarouselImage); //có thể dùng forEach vì querySelectorAll trả về một danh sách các phần tử tương tự như  1 mảng(NodeList)

//Sign in / Sign up
const formOpenBtn = document.querySelector('.form-open'),
    formContainer = document.querySelector('.form_container'),
    formCloseBtn = document.querySelector('.form_close'),
    signupBtn = document.querySelector('#signup'),
    signupLink = document.querySelector('.sign_up_btn'),
    loginBtn = document.querySelector('#login'),
    pwShowHide = document.querySelectorAll('.pw_hide'),
    body = document.querySelector('body'),
    copyright = document.querySelector('.text-center'),
    cupC1 = document.querySelector('.cup_c1_real'),
    navbar_contentColor = document.querySelector('.navbar__content'),
    overlay = document.querySelector('.overlay__button'),
    createPW = document.getElementById('signup_pass'),
    confirmPW = document.getElementById('confirm'),
    confirmText = document.querySelector('.error_confirm'),
    unconfirmText = document.querySelector('.error_unconfirm'),
    forgotPW=document.querySelector('.forgot_pw'),
    forgotPW_block=document.querySelector('.fotgot_pw_block')

formOpenBtn.addEventListener("click", () => {
    formContainer.classList.remove("opacity")
    overlay.style.display = 'block';
});
formCloseBtn.addEventListener("click", () => {
    formContainer.classList.add("opacity")
    body.style.opacity = '1'
    overlay.style.display = 'none';
    forgotPW_block.style.display="none"
})

signupLink.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active")
    formContainer.classList.remove("opacity")
    overlay.style.display = 'block';
})
signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active")
    forgotPW_block.style.display="none"
})
loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.remove("active")
})

forgotPW.onclick=function(){
    forgotPW_block.style.display="block"
    
}

pwShowHide.forEach((icon) => {
    icon.addEventListener("click", () => {
        let getPwInput = icon.parentElement.querySelector("input");
        if (getPwInput.type == "password") {
            getPwInput.type = "text"
            icon.classList.replace("fa-eye-slash", "fa-eye")
        } else {
            getPwInput.type = "password";
            icon.classList.replace("fa-eye", "fa-eye-slash");
        }
    })
})




confirmPW.oninput = function() {
    if (createPW.value === confirmPW.value && confirmPW.value.length >= 6) {
        confirmText.style.display = "block";
    } else {
        confirmText.style.display = "none";
    }
};

document.onkeydown = function (e) {
    switch (e.which) {
        case 27:
            formContainer.classList.add("opacity")
            overlay.style.display = 'none';
            forgotPW_block.style.display="none"
    }
}

var icon = document.getElementById("icon")
var logoClb = document.getElementById("cup_c1")
icon.onclick = function () {
    document.body.classList.toggle("dark-theme")
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "./dark theme icon/sun.png"
        logoClb.src = "./Image/my_madrid.png";
        copyright.style.borderTop = '1px solid #fff';
        navbar_contentColor.style.boxShadow = '5px 5px 5px blue'
    } else {
        icon.src = "./dark theme icon/moon.png"
        logoClb.src = "./Image/14cupc1.png";
        navbar_contentColor.style.boxShadow = '0 2px 4px 0 rgba(0, 0, 0, 0.2)'
    }
}
