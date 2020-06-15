// Your code goes here

// 1) rotate logo 180 deg
const logoHeading = document.querySelector(".logo-heading");

logoHeading.addEventListener("mouseover", function () {
  logoHeading.style.transform = "rotate(180deg)";
});

logoHeading.addEventListener("mouseleave", function () {
  logoHeading.style.transform = "scale(1)";
});

// 2) keydown a or b to change the background color to black or green

document.addEventListener("keydown", (e) => {
  if (e.key === "a") {
    document.body.style = "color: white; background-color: black";
  } else if (e.key === "b") {
    document.body.style = "color: pink; background-color: green";
  }
});

// 3) button alert for 'Fun in the Sun' upon dblclick

const noFunInSun = document.querySelector(".btn");

noFunInSun.addEventListener("dblclick", (event) => {
  alert(
    `This trip actually isn't fun, I would recommend "${event.target.textContent}`
  );
});


// 4) rotate desination.jpg 180 degrees upon click

const destinationRotate = document.querySelector("img");
// console.log("this is it", destinationRotate);

destinationRotate.addEventListener("click", (event) => {
  event.target.parentElement.parentElement.parentElement.style.transform =
    "rotate(180deg)";
});

// 5) wheel zoom on fun-bus picture!! 

const funBus = document.querySelector(".intro img");
// console.log("this right hur", funBus);
let scale = 1;
funBus.onwheel = zoom;

function zoom(event) {
  event.preventDefault();

  scale += event.deltaY * -0.01;

  // Restrict scale
  scale = Math.min(Math.max(0.125, scale), 4);

  // Apply scale transform
  funBus.style.transform = `scale(${scale})`;
}


// 6) changing the default background color after a dblclick of the body

const body = document.querySelector("body");

body.addEventListener("dblclick", (event)=>{
    body.style.backgroundColor = "cornflowerblue";
})


// 7) drag // load 

window.addEventListener('load', (event) => {
    // console.log('this page is fully loaded :)');
  });


// 8) focus on Home anchor to turn pink 

const homeAnchor = document.querySelector('.nav-link')

homeAnchor.addEventListener('focus', (event)=>{
  event.target.style.background = 'pink';
})

// 9) resize window 

window.addEventListener('resize', (event)=>{
  // console.log('window was resized!')
})

// 10) change inner text of button upon click 

noFunInSun.addEventListener("click", (event)=>{
  noFunInSun.innerText = "do not do it!"
})
