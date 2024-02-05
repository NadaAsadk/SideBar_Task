const click = document.querySelector(".click");
const close = document.querySelector(".close");
const sideBar = document.querySelector(".sideBar");
const container = document.querySelector(".container");
const overlay = document.querySelector(".overlay");

click.onclick = () =>{
    sideBar.classList.add("show");
    container.classList.add("overlay");
}
close.onclick = () =>{
    sideBar.classList.remove("show");
    container.classList.remove("overlay");
}


