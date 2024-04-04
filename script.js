const header = document.querySelector('header');

window.addEventListener('scroll',function(){
   header.classList.toggle('sticky', window.scrollY>140);
});

let nav = document.querySelector('.nav')
let close1 = document.querySelector(".nav .li1")
let close2 = document.querySelector(".nav .li2")
let close3 = document.querySelector(".nav .li3")
let close4 = document.querySelector(".nav .li4")

let menu = document.querySelector('#menu-icon')

menu.addEventListener('click',show);
close1.addEventListener('click',li1);
close2.addEventListener('click',li2);
close3.addEventListener('click',li3);
close4.addEventListener('click',li4);

function show(){
   nav.style.display = "flex";
   nav.style.left = "0";
   
}

function li1(){
   nav.style.left = '-100%'
   
}
function li2(){
   nav.style.left = '-100%'
   
}
function li3(){
   nav.style.left = '-100%'
   
}
function li4(){
   nav.style.left = '-100%'
   
}

/* mana shu yerda xato bor
menu.onClick = ()=>{
   menu.classList.toggle('bx-x');
   nav.classList.toggle('open');
};

window.onscroll = ()=>{
   menu.classList.remove('bx-x')
   nav.classList.remove('open')
}
*/

