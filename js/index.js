// Your code goes here

// changing color of font for anchor tags to red on hover
const navBar = document.querySelectorAll(".nav-link");
navBar.forEach((element) => {
        element.addEventListener("mouseover", function(event) {
        event.target.style.color = "red";})});

// changing "Fun Bus" font on click
const header = document.querySelector(".logo-heading");
header.addEventListener("click", event => {
    if (event.target.style.color === "black") {
        event.target.style.fontSize = "80px";
        event.target.style.color = "green";
    } else {
        event.target.style.color = "black";
        event.target.style.fontSize = "50px";
    }
});


// changing main title on pressing the backspace button
document.addEventListener("keydown", event => {
    if (event.keyCode === 8) {
        header.textContent = "Don't Leave the Page!";
        header.style.color = "red";
        header.style.fontSize = "40px";
    }
})

// alerting using window on page load
window.addEventListener('load', event => {
    alert("Welcome To Fun Bus!")
});

// changing background of all paragraph elements to pink on double click
const paras = document.querySelectorAll("p");
paras.forEach((element) => {
    element.addEventListener("dblclick", event => {
    event.target.style.background = "pink";})
}
);

// changing images to dog image on drag
const images = document.querySelectorAll("img");
images.forEach((image) => {
    image.addEventListener("drag", event => {
        event.target.src = "https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d";
    })
})

// 
// const buttons = doucment.querySelectorAll(".btn");
// buttons.forEach()

// prevent default refresh
navBar.forEach(element => {
    element.addEventListener("click", event => {
        event.preventDefault();
        event.stopPropagation();
        console.log(`event passing through ${event.currenTarget}`)
    })
})