// ============================
// DARK MODE
// ============================

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){

showToast("Light Mode Enabled ☀️");

}else{

showToast("Dark Mode Enabled 🌙");

}

});

// ============================
// WHATSAPP ORDERING
// ============================

function orderItem(item){

let number = "918696252070";

let message =
`Hello Bagicho Bistro,%0A%0AI want to order:%0A${item}`;

window.open(
`https://wa.me/${number}?text=${message}`,
"_blank"
);

}

// ============================
// TABLE RESERVATION
// ============================

const reservationForm =
document.getElementById("reservationForm");

reservationForm.addEventListener(
"submit",
function(e){

e.preventDefault();

showToast(
"Table Reserved Successfully ✅"
);

reservationForm.reset();

}
);

// ============================
// REVIEW SYSTEM
// ============================

let reviewContainer =
document.querySelector(".reviews .container");

function addReview(name,text){

let div =
document.createElement("div");

div.classList.add("review-box");

div.innerHTML = `
<h3>⭐⭐⭐⭐⭐</h3>
<p><strong>${name}</strong></p>
<p>${text}</p>
`;

reviewContainer.appendChild(div);

showToast("Review Added Successfully ⭐");

}

// Example

addReview(
"Rahul",
"Excellent ambience and food."
);

// ============================
// LANGUAGE SWITCHER
// ============================

const languageSelect =
document.getElementById("languageSelect");

languageSelect.addEventListener(
"change",
function(){

let lang = this.value;

if(lang==="hi"){

translateHindi();

}

else if(lang==="gu"){

translateGujarati();

}

else{

translateEnglish();

}

}
);

function translateEnglish(){

document.querySelector(".hero h1")
.innerText = "Bagicho Bistro";

document.querySelector(".hero h3")
.innerText = "Cafe & Restro";

document.querySelector(".hero p")
.innerText = "Good Food • Good Mood";

}

function translateHindi(){

document.querySelector(".hero h1")
.innerText = "बगीचो बिस्ट्रो";

document.querySelector(".hero h3")
.innerText = "कैफे और रेस्ट्रो";

document.querySelector(".hero p")
.innerText = "अच्छा खाना • अच्छा मूड";

}

function translateGujarati(){

document.querySelector(".hero h1")
.innerText = "બગીચો બિસ્ટ્રો";

document.querySelector(".hero h3")
.innerText = "કેફે અને રેસ્ટ્રો";

document.querySelector(".hero p")
.innerText = "સારો ખોરાક • સારો મૂડ";

}

// ============================
// TOAST NOTIFICATION
// ============================

function showToast(message){

const toast =
document.createElement("div");

toast.innerText = message;

toast.style.position = "fixed";
toast.style.bottom = "20px";
toast.style.right = "20px";
toast.style.background = "#fbbf24";
toast.style.color = "#000";
toast.style.padding = "15px 20px";
toast.style.borderRadius = "10px";
toast.style.zIndex = "99999";
toast.style.fontWeight = "bold";

document.body.appendChild(toast);

setTimeout(()=>{

toast.remove();

},3000);

}

// ============================
// SCROLL ANIMATION
// ============================

const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity = "1";

entry.target.style.transform =
"translateY(0px)";

}

});

});

document.querySelectorAll(
".food-card,.review-box,.gallery img"
).forEach(el=>{

el.style.opacity="0";
el.style.transform=
"translateY(50px)";
el.style.transition="1s";

observer.observe(el);

});

// ============================
// IMAGE LIGHTBOX
// ============================

document
.querySelectorAll(".gallery img")
.forEach(img=>{

img.addEventListener("click",()=>{

let overlay =
document.createElement("div");

overlay.style.position="fixed";
overlay.style.top="0";
overlay.style.left="0";
overlay.style.width="100%";
overlay.style.height="100%";
overlay.style.background=
"rgba(0,0,0,.9)";
overlay.style.display="flex";
overlay.style.alignItems="center";
overlay.style.justifyContent="center";
overlay.style.zIndex="99999";

let image =
document.createElement("img");

image.src = img.src;

image.style.maxWidth="90%";
image.style.maxHeight="90%";
image.style.borderRadius="15px";

overlay.appendChild(image);

overlay.onclick=()=>{

overlay.remove();

};

document.body.appendChild(
overlay
);

});

});

// ============================
// AUTO YEAR FOOTER
// ============================

let footerYear =
new Date().getFullYear();

document.querySelector(
"footer p:last-child"
).innerHTML =
`© ${footerYear} Bagicho Bistro.
All Rights Reserved.`;

// ============================
// PAGE LOADER
// ============================

window.addEventListener(
"load",
()=>{

showToast(
"Welcome To Bagicho Bistro 🍕"
);

}
);

// ============================
// SMOOTH NAVIGATION
// ============================

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{

anchor.addEventListener(
"click",
function(e){

e.preventDefault();

document.querySelector(
this.getAttribute("href")
).scrollIntoView({

behavior:"smooth"

});

});

});
// ============================
// SHOPPING CART SYSTEM
// ============================

let cart = [];

// Add Item To Cart

function addToCart(name, price){

const item = {
name,
price,
qty:1
};

const existing =
cart.find(product =>
product.name === name
);

if(existing){

existing.qty++;

}else{

cart.push(item);

}

updateCart();

showToast(`${name} Added To Cart 🛒`);

}

// Update Cart UI

function updateCart(){

const cartItems =
document.getElementById("cartItems");

const totalPrice =
document.getElementById("totalPrice");

if(!cartItems) return;

cartItems.innerHTML = "";

let total = 0;

cart.forEach((item,index)=>{

total += item.price * item.qty;

cartItems.innerHTML += `

<div class="cart-item">

<h4>${item.name}</h4>

<p>₹${item.price}</p>

<div>

<button onclick="decreaseQty(${index})">
-
</button>

<span>${item.qty}</span>

<button onclick="increaseQty(${index})">
+
</button>

</div>

<button onclick="removeItem(${index})">
❌
</button>

</div>

`;

});

totalPrice.innerHTML =
`Total: ₹${total}`;

}

// Increase Quantity

function increaseQty(index){

cart[index].qty++;

updateCart();

}

// Decrease Quantity

function decreaseQty(index){

if(cart[index].qty > 1){

cart[index].qty--;

}else{

cart.splice(index,1);

}

updateCart();

}

// Remove Item

function removeItem(index){

cart.splice(index,1);

updateCart();

showToast("Item Removed ❌");

}

// ============================
// WHATSAPP CHECKOUT
// ============================

function checkoutWhatsApp(){

if(cart.length === 0){

showToast("Cart Is Empty ⚠️");

return;

}

let orderText =
"Hello Bagicho Bistro,%0A%0A";

orderText += "Order Details:%0A";

let total = 0;

cart.forEach(item=>{

let amount =
item.price * item.qty;

total += amount;

orderText +=
`${item.name} x ${item.qty} = ₹${amount}%0A`;

});

orderText +=
`%0ATotal Amount = ₹${total}`;

window.open(

`https://wa.me/918696252070?text=${orderText}`,

"_blank"

);

}

// ============================
// CLEAR CART
// ============================

function clearCart(){

cart = [];

updateCart();

showToast("Cart Cleared 🗑️");

}