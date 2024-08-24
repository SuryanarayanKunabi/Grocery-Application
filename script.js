let serachForm=document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
serachForm.classList.toggle('active');

shoppingCart.classList.remove('active');
LoginForm.classList.remove('active');
menu.classList.remove('active');
}
let shoppingCart=document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    serachForm.classList.remove('active');
    LoginForm.classList.remove('active');
    menu.classList.remove('active');
}
let LoginForm=document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () =>{
    LoginForm.classList.toggle('active');
    serachForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    menu.classList.remove('active');
}

let menu=document.querySelector(".navbar");
document.querySelector("#menu-btn").onclick = () =>{
menu.classList.toggle('active');
serachForm.classList.remove('active');
shoppingCart.classList.remove('active');
LoginForm.classList.remove('active');
}

window.onscroll=() =>{
    serachForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    LoginForm.classList.remove('active');
    menu.classList.remove('active');
}


  
    
    
  

