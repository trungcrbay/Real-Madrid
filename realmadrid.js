//Chuyển slide
var counter =1;
setInterval(function(){
    document.getElementById('radio' + counter).checked= true;
    counter++;
    if(counter>4){
        counter=1;
    }
},1500)
//List ảnh
