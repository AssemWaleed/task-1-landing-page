

const shopNowbtn = document.getElementById("shopNowBtn"); 
const shopNowbtn1 = document.getElementById("shopNowBtn1"); 
const header = document.querySelector("header");

function boycottClick(){
    alert("This is boycotted product don't buy it!");
}

// Header background on scroll (avoid transparency over content)
function updateHeaderOnScroll() {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 10);
}

window.addEventListener("scroll", updateHeaderOnScroll, { passive: true });
window.addEventListener("load", updateHeaderOnScroll);