// Your code goes here

const logo = document.querySelector(".logo-heading");
const button = document.querySelector('.btn');

const footer = document.querySelector("footer");

const opener = document.querySelector(".intro");
const header = document.querySelector(".intro h2")

// 1: mouseover with 180 deg flip of h1 

logo.addEventListener("mouseover", function(){
    logo.style.transform="rotate(180deg)";
})

logo.addEventListener("mouseleave", function(){
    logo.style.transform="scale(1)";
})

// 2: click on 1st button alert  

button.addEventListener('click', (event)=>{
    alert(`This trip actually sucks I would not recommend to "${event.target.textContent}"`)
})

// 3: 

document.addEventListener('keydown', function(event) {
    if (event.keyCode === 70){
        footer.style.backgroundColor = "green"; 
    }
    console.log(event.which);   
})

// create a function 
// doubleclick 

opener.addEventListener('dblclick',function(el){
    opener.style.color= "red";
    opener.style.backgroundColor="yellow";
    header.style.fontSize="8rem";
    // console.log(el);
}) 


// const buttons = document.querySelectorAll(".btn");

// buttons.forEach((el)=>{
//     el.addEventListener("click", (event)=>{
//         event.style.display="none";
//     })
// })





// allPhotos.addEventListener('scroll', function(){
//    allPhotos.style.animation = "mynewmove 4s 2";
// })

// https://www.w3schools.com/jsref/prop_style_animation.asp