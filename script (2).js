// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import {
getFirestore
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {

apiKey: "YOUR_API_KEY",

authDomain: "YOUR_DOMAIN",

projectId: "YOUR_PROJECT_ID",

storageBucket: "YOUR_BUCKET",

messagingSenderId: "YOUR_SENDER",

appId: "YOUR_APP_ID"

};

const app =
initializeApp(firebaseConfig);

const db =
getFirestore(app);

export { db };
import {
collection,
addDoc
}
from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

import { db } from "./firebase.js";

reservationForm.addEventListener(
"submit",
async(e)=>{

e.preventDefault();

await addDoc(

collection(db,"reservations"),

{

name:
document.querySelector(
'#reservationForm input[type="text"]'
).value,

date:
document.querySelector(
'#reservationForm input[type="date"]'
).value,

createdAt:
new Date()

}

);

showToast(
"Reservation Saved ✅"
);

});
async function saveReview(name,text){

await addDoc(
collection(db,"reviews"),
{
name,
text,
createdAt:new Date()
}
);

}
async function saveOrder(orderData){

await addDoc(

collection(db,"orders"),

orderData

);

}
import {
collection,
getDocs
}
from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const orders =
await getDocs(
collection(db,"orders")
);

document.getElementById(
"totalOrders"
).innerHTML =
`Orders : ${orders.size}`;
function payNow(total){

let options = {

key:"YOUR_KEY",

amount:total*100,

currency:"INR",

name:"Bagicho Bistro",

description:"Food Order",

handler:function(response){

showToast(
"Payment Successful ✅"
);

}

};

let rzp =
new Razorpay(options);

rzp.open();

}

if("serviceWorker" in navigator){

navigator.serviceWorker.register(
"sw.js"
);

}
self.addEventListener(
"install",
event=>{

event.waitUntil(

caches.open("bagicho-v1")
.then(cache=>{

return cache.addAll([
"/",
"/index.html",
"/style.css",
"/script.js"
]);

})

);

});