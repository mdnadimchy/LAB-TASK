let dark = document.querySelector('.dark');
let light = document.querySelector('.light');

dark.addEventListener('click', function(){
  dark.classList.add('dark_mode2');
});

light.addEventListener('click', function(){
  dark.classList.remove('dark_mode2');
});

let nav = document.querySelector('.navbar');
let body = document.querySelector('.full-body');
let menu = document.querySelector('.menu');

dark.addEventListener('click', function(){
  nav.classList.add('dark-mode')
  body.classList.add('dark-mode')
  menu.classList.add('dark-mode')
});
light.addEventListener('click', function(){
  nav.classList.remove('dark-mode')
  body.classList.remove('dark-mode')
  menu.classList.remove('dark-mode')
});

let main = document.querySelector('.main');
let close = document.querySelector('.close');
let user = document.querySelector('.user');

user.addEventListener('click', function(){
    main.classList.add('active');
});
close.addEventListener('click', function(){
    main.classList.remove('active');
});