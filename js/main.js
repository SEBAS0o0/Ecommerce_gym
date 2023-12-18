// Cart Open Close 
let cart_Icon = document.querySelector("#cart_icon");
let cart = document.querySelector(".cart"); 
let close_Cart = document.querySelector("#close_cart");

//Open Cart

cart_Icon.onclick = () => {
    cart.classList.add("active");
}

//Close Cart
close_Cart.onclick = () => {
    cart.classList.remove("active");
}



