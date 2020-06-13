// Your code goes here


// 1) rotate logo 180 deg
const logoHeading = document.querySelector('.logo-heading');

logoHeading.addEventListener("mouseover", function(){
   logoHeading.style.transform = "rotate(180deg)"; 
})

logoHeading.addEventListener("mouseleave", function(){
    logoHeading.style.transform = "scale(1)";
})

// 2) button alert for 'Fun in the Sun' 

const noFunInSun = document.querySelector('.btn');

noFunInSun.addEventListener("click", (event)=>{
    alert(`This trip actually isn't fun, I would not recommend to "${event.target.textContent}`)
})

// 3) rotate desination.jpg 180 degrees upon click 

const destinationRotate = document.querySelector('.content-destination img');
// console.log("this is it", destinationRotate);

destinationRotate.addEventListener("click",(event)=>{
    event.target.parentElement.parentElement.parentElement.style.transform = "rotate(180deg)";
})

// 4 changing the default background color after a dblclick of the body

const body = document.querySelector("body");

body.addEventListener("dblclick", (event)=>{
    body.style.backgroundColor = "cornflowerblue";
})

// 4) dblclick out of the 180 degree click 

// destinationRotate.addEventListener("dblclick", function(el)=>{
//     el.target.parentElement.parentElement.parentElement.style.transform = "scale(1)";
// })