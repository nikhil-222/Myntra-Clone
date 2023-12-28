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