function openMenu(){
    let navbarContainer = document.querySelector(".navbar");
    let bars = document.querySelector(".bars");    
    let close = document.querySelector(".close");
    bars.style.display = 'none';    
    close.style.display = 'block';    
    navbarContainer.style.display = 'block';
}

function closeMenu(){
    let navbarContainer = document.querySelector(".navbar");
    let bars = document.querySelector(".bars");
    let close = document.querySelector(".close");
    bars.style.display = 'block';    
    close.style.display = 'none';  
    navbarContainer.style.display = 'none';
}

const heroArray = ["images/hero1.webp", "images/hero2.webp", "images/hero3.webp", "images/hero4.webp", "images/hero5.webp", "images/hero6.webp"];
const heroArrayLen = heroArray.length;
let heroImg = document.querySelector(".hero_img");
let i=0;
function heroSlider() {
    if(i > heroArrayLen-1){
        i=0;
    }
    heroImg.src = heroArray[i];
    i++;
    setTimeout(heroSlider, 6000);
}

heroSlider();
