//start ofeers section
const offers = document.querySelector('.offers-items');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let index = 0;
function slide(to) {
const total = offers.children.length;
index = (index + to + total) % total;
offers.style.transform = `translateX(-${index * 100}%)`;
}
next.onclick = () => slide(1);
prev.onclick = () => slide(-1);
// Auto-slide every 5 seconds
setInterval(() => slide(1), 5000);
// end offers secion


var menuItems = [
{
name: "LASAL CHEESE",
price: "$18.00",
description: "Lorem ipsum dolor sit amet consectetur adipisicingelit. At, explicabo.",

image: "./images/food1.png"
},
{
name: "JUMBO CRAB SHRIMP",
price: "$24.00",


description: "Lorem ipsum dolor sit amet consectetur adipisicingelit. At, explicabo.",

image: "./images/food2.png"
},
{
name: "KOKTAIL JUICE",
price: "$12.00",
description: "Lorem ipsum dolor sit amet consectetur adipisicingelit. At, explicabo.",

image: "./images/food3.png"
},
{
name: "CAPO STEAK",
price: "$60.00",
description: "Lorem ipsum dolor sit amet consectetur adipisicingelit. At, explicabo.",

image: "./images/food4.png"
},
{
name: "ORGANIC FRUIT SALAD",
price: "$8.00",
description: "Lorem ipsum dolor sit amet consectetur adipisicingelit. At, explicabo.",

image: "./images/food5.png"
},
{



name: "CHEESE PIZZA",
price: "$18.00",
description: "Lorem ipsum dolor sit amet consectetur adipisicingelit. At, explicabo.",

image: "./images/food6.png"
},
{
name: "KOFTA MEAT",
price: "$40.00",
description: "Lorem ipsum dolor sit amet consectetur adipisicingelit. At, explicabo.",

image: "./images/food7.jpeg"
},
{
name: "SPANISH PIES",
price: "$14.00",
description: "Lorem ipsum dolor sit amet consectetur adipisicingelit. At, explicabo.",

image: "./images/food8.jpeg"
},
{
name: "CHEESE TOST",
price: "$6.00",
description: "Lorem ipsum dolor sit amet consectetur adipisicingelit. At, explicabo.",

image: "./images/food9.jpeg"


},
{
name: "FRUIT SALAD",
price: "$14.00",
description: "Lorem ipsum dolor sit amet consectetur adipisicingelit. At, explicabo.",

image: "./images/food10.jpeg"
},
{
name: "CHICKEN SHAWARMA",
price: "$20.00",
description: "Lorem ipsum dolor sit amet consectetur adipisicingelit. At, explicabo.",

image: "./images/food11.jpeg"
},
{
name: "MEGA CHEESE PIZZA",
price: "$30.00",
description: "Lorem ipsum dolor sit amet consectetur adipisicingelit. At, explicabo.",

image: "./images/food12.jpeg"
}
]

// Start Gallery Section

// Get elements
var BtnClose = document.getElementById("close");
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");
var BoxContainer = document.getElementById("boxContainer");
var boxItem = document.getElementById("boxItem");
var images = document.querySelectorAll(".img-gallery img");

// Convert NodeList to array
var imagesArr = [];
for (var i = 0; i < images.length; i++) {
imagesArr.push(images[i]);
}

var currentIndex = 0;

// Function to display image in popup
function showImage(index) {
boxItem.style.backgroundImage = "url(" + imagesArr[index].src +
")";
}


// When image is clicked → open popup
for (var j = 0; j < imagesArr.length; j++) {
(function (j) {
imagesArr[j].addEventListener("click", function () {
BoxContainer.style.display = "flex";
currentIndex = j;
showImage(currentIndex);
});
})(j);
}

// Close popup
BtnClose.addEventListener("click", function () {
BoxContainer.style.display = "none";
});

// Next image
nextBtn.addEventListener("click", function () {
currentIndex++;
if (currentIndex === imagesArr.length) {
currentIndex = 0;
}
showImage(currentIndex);
});

// Previous image
prevBtn.addEventListener("click", function () {
currentIndex--;
if (currentIndex < 0) {
currentIndex = imagesArr.length - 1;
}
showImage(currentIndex);
});

// Close popup when clicking outside
BoxContainer.addEventListener("click", function (event) {
if (event.target === BoxContainer) {
BoxContainer.style.display = "none";
}
});

// End Gallery Section




document.getElementById("contactForm").addEventListener("submit", function (e) {

e.preventDefault();

// Get input values
var name = document.getElementById("name").value.trim();
var email = document.getElementById("email").value.trim();
var subject = document.getElementById("subject").value.trim();
var message = document.getElementById("message").value.trim();

// Get error elements
var nameError = document.getElementById("name-error");
var emailError = document.getElementById("email-error");
var subjectError = document.getElementById("subject-error");
var messageError = document.getElementById("message-error");

// Clear old messages


nameError.textContent = "";
emailError.textContent = "";
subjectError.textContent = "";
messageError.textContent = "";

var valid = true;

// Name validation
if (name === "") {
nameError.textContent = "Please enter your name.";
valid = false;
} else if (name.length < 3 || name.length > 15) {
nameError.textContent = "Name must be 3–15 characters.";
valid = false;
}

// Email validation
if (email === "") {
emailError.textContent = "Please enter your email.";
valid = false;
}

// Subject validation (optional)
if (subject !== "" && subject.length < 3) {
subjectError.textContent = "Subject must be at least 3 characters.";
valid = false;
}

// Message validation (optional)
if (message !== "" && message.length < 5) {
messageError.textContent = "Message must be at least 5characters.";

valid = false;
}

// If all valid
if (valid) {
alert("Form submitted successfully!");
// e.target.submit(); // uncomment if you want real submission
}
});