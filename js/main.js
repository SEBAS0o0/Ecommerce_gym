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


//maring add to cart 
//Cart woring JS

if(document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready);

}else{
    ready();
}


//maring Fuction
function ready() {
    //remove item From Cart
    var removeCartButtons = document.getElementsByClassName("cart_remove");
    for (var i = 0; i< removeCartButtons.length; i++){
        var button = removeCartButtons[i];
        button.addEventListener("click", removeCartItem);
    }

    //Quantity Change 
    var quantityInputs= document.getElementsByClassName("cart_quantity");
    for (var i = 0; i< quantityInputs.length; i++){
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }

    //add to cart
    var addCart = document.getElementsByClassName("add-cart");
    for (var i = 0; i< addCart.length; i++){
        var button = addCart[i];
        button.addEventListener("click", addCartClicked);
    } 
    

}

//Remove  Cart Item 
function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
   
}

//Quantity change
function quantityChanged(event){
    var input = event.target;
    if(isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updatetotal();
    
}


//add Cart Function 
function  addCartClicked(event){
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName("product_title")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product_img")[0].src;
    addProductToCart(title,price,productImg);
    updatetotal();
    console.log("si funciona");

}

function  addProductToCart(title,price,productImg){
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart_box");
    var  cartItems = document.getElementsByClassName("cart_content")[0];
    var cartItemsNames = cartItems.getElementsByClassName("cart_product_title");
    for(var i = 0;  i < cartItemsNames.length; i++){
        if(cartItemsNames[i].innerText == title) {
            alert("ya has añadido este artículo al carrito");
            return;
        }
    }

    var cartBoxContent =`
    <img src="${productImg}" alt="" class="cart_img">
    <div class="detail_box">
        <div class="cart_product_title">${title}</div>
        <div  class="cart_price">${price}</div>
        <input
            type="number"
            name=""
            id=""
            value="1"
            class="cart_quantity"
        />
    </div>
    <!--Remove Item-->
    <i class='bx bx-trash cart_remove'></i>`;
    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox
       .getElementsByClassName("cart_remove")[0]
       .addEventListener("click",removeCartItem);
    cartShopBox
       .getElementsByClassName("cart_quantity")[0]
       .addEventListener("change", quantityChanged);

      

}



//Update Total
function updatetotal(){
    var cartContent = document.getElementsByClassName("cart_content")[0]
    var cartBoxes = cartContent.getElementsByClassName("cart_box");
    var total = 0;
    for(var i = 0; i < cartBoxes.length; i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart_price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart_quantity")[0];
        var price= parseFloat(priceElement.innerText.replace("$",""));
        var quantity = quantityElement.value;
        total += price * quantity;

        document.getElementsByClassName("total_price")[0].innerText = '$' + total;
    }
    // If  price contain some cents 
    total = Math.round(total * 100)/100;
    document.getElementsByClassName("total_price")[0].innerText = "$" + total;

  
    

}









