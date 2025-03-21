
const ScrollIndicator = document.getElementById("ScrollIndicator");

const totalScrollHeight = document.body.ScrollHeight - window.innerHeight;

function updateScrollIndicator(){
    const scrollPercentage = (window.scrollY/totalScrollHeight) * 100;
    ScrollIndicator.style.width = ScrollPercentage + "%";
}

window.addEventListener("Scroll",updateScrollIndicator);

updateScrollIndicator();

