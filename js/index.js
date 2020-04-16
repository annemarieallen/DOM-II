// Your code goes here


// mouseover with 180 deg flip of h1 
const logo = document.querySelector(".logo-heading");

logo.addEventListener("mouseover", function(){
    logo.style.transform="rotate(180deg)";
})

logo.addEventListener("mouseleave", function(){
    logo.style.transform="scale(1)";
})

// keydown 

const buttons = document.querySelectorAll(".btn");

buttons.forEach((el)=>{
    el.addEventListener("keydown", ()=>{
        el.style.display="none";
    })
})


// allPhotos.addEventListener('scroll', function(){
//    allPhotos.style.animation = "mynewmove 4s 2";
// })