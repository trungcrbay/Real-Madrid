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
    forgotPW_block=document.querySelector('.fotgot_pw_block'),
    sub_btn = document.querySelectorAll('.btn_btn'),
    closeModal = document.querySelector('.close_modal'),
    modalLegend = document.querySelector('.modal_legend')

let legendList = [
    ['ronaldo','cristiano ronaldo',
    {
      fullname: "Cristiano Ronaldo",
      name: "ronaldo",
      birth: "05/02/1985",
      national: "Portugal",
      general: 'Talent without working hard is nothing. Without football,my life is nothing',
      appearance: 438,
      goal: 450,
      image:'./Image/cr7.png'
      
    }],
    ['stefano','alfredo di stefano',
    {
      fullname: "Alfredo Di Stefano",
      name: "stefano",
      birth: "04/07/1926",
      national: "Argentina",
      general: 'Scoring goals is like making love: everyone can do it, but nobody does it like me',
      appearance: 396,
      goal: 308,
      image:'./Image/ste.png'
    }],
    ['zidane','zinedine zidane',
    {
      fullname: "Zinedine Zidane",
      name: "zidane",
      birth: "23/06/1972",
      national: "France",
      general: 'I once cried because i had no shoes to play football,but one day i saw a man who had no feed,and i realized how rich i am',
      appearance: 155,
      goal: 37,
      image:'./Image/danhoi.png'
    }],
    ['ronaldo beo','ronaldo de lima',
    {
      fullname: "Ronaldo De Lima",
      name: "ronaldo beo",
      birth: "18/09/1976",
      national: "Brazil",
      general: 'To associate my name with the United Stations is the best thing that could have happened to me',
      appearance: 127,
      goal: 83,
      image:'./Image/robeo.png'
    }],
    ['carlos','roberto carlos',
    {
      fullname: "Roberto Carlos",
      name: "ronaldo",
      birth: "10/04/1973",
      national: "Brazil",
      general: 'Inspite of all this time i expect to be summoned, I feel so proud when this happens. Even if Brazil wins its World Cup ticket in the match against Chile,I still want to play last two qualifiers',
      appearance: 370,
      goal: 47,
      image:'./Image/carlos.png' 
    }],
    ['raul','raul gonzalez blanco',
    {
      fullname: "Raúl González",
      name: "raul",
      birth: "27/06/1977",
      national: "Spain",
      general: 'I saw the ball move just when i was about to hit it as hard as i could. I hit it with the upper part of my foot and i noticed something happen',
      appearance: 550,
      goal: 228,
      image:'./Image/raulgonzalez.png'
    }],
    ['ramos','sergio ramos',
    {
      fullname: "Sergio Ramos",
      name: "ramos",
      birth: "30/03/1986",
      national: "Spain",
      general: 'Football is to unite,not separate',
      appearance: 671 ,
      goal: 101,
      image:'./Image/tuca.png'
    }],
    ['casillas','iker casillas',
    {
      fullname: "Iker Casillas",
      name: "casillas",
      birth: "20/05/1981",
      national: "Spain",
      general: 'Most kids dream of scoring the perfect goal. I have always dreamed of stopping it',
      appearance: 510,
      goal: 0,
      image:'./Image/casillas.png'
    }],
    ['puskas','ferenc puskas',
    {
      fullname: "Ferenc Puskas",
      name: "puskas",
      birth: "01/04/1927",
      national: "Hungary",
      general: 'We did not always have boots so we played barefoot on any sandy patch we could find',
      appearance: 262,
      goal: 242,
      image:'./Image/puskas.png'
    }],
    ['chendo','miguel chendo',
    {
      fullname: "Miguel Chendo",
      name: "chendo",
      birth: "12/10/1961",
      national: "Spain",
      general: 'The Real Madrid shirt is white. It can stain of mud,sweat,and even of blood but never of shame',
      appearance: 363,
      goal: 3,
      image:'./Image/chendo.png'
    }],
    ['hierro','fernando hierro',
    {
      fullname: "Fernando Hierro",
      name: "hierro",
      birth: "23/03/1968",
      national: "Spain",
      general: 'I have been doing my job well for 17 years. People must see something in me.Otherwise,i would be over and out',
      appearance: 439,
      goal: 102,
      image:'./Image/hierro.png'
    }],
    ['marcelo','marcelo vieira',
    {
      fullname: "Marcelo Vieira",
      name: "marcelo",
      birth: "12/05/1988",
      national: "Brazil",
      general: 'Real Madrid are favourites in every championship and in every games, but we will stay humble in order to earn a victory',
      appearance: 386,
      goal: 26,
      image:'./Image/marcelo.png'
    }]
    
    
]

closeModal.addEventListener('click',()=>{
    modalLegend.style.display='none'
    overlay.style.display='none'
})

openModal =() =>{
    overlay.style.display = 'block';
    modalLegend.style.display='block';
}

upload_info= ({
    fullname,name,birth,general,national,appearance,goal,image
}) =>{
    let legendName = document.querySelector('.modal_content_name')
    legendName.textContent=`${fullname}`
    let birthday =document.querySelector('.birth')
    birthday.textContent=`Birth: ${birth}`
    let nationalityName = document.querySelector('.nationality')
    nationalityName.textContent=`Nationality: ${national}`
    let quoteModal = document.querySelector('.quote_modal')
    quoteModal.textContent=`" ${general}. "`
    let appearanceMatch = document.querySelector('.appearances')
    appearanceMatch.innerHTML=`Appearances: <br> ${appearance}`
    let allGoals = document.querySelector('.goals')
    allGoals.innerHTML=`Goals: <br> ${goal}`
    let imageModal = document.querySelector('.img_modal')
    imageModal.setAttribute("src",`${image}`)
}
let index =0;
for(let [legend, fullName , info] of legendList){
    const btn = sub_btn[index]

    // btn.removeEventListener('click',openModal)
    btn.addEventListener('click',()=>{
        openModal()
        upload_info(info)
    })

    index++
}



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
