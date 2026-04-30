
function filterSelection(category) {
    let images = document.querySelectorAll(".gallery img");

    images.forEach(img => {
        if (category === "all" || img.classList.contains(category)) {
            img.style.display = "inline-block";
        } else {
            img.style.display = "none";
        }
    });
}


window.onload = function() {
    filterSelection('all');
};


let buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
    btn.addEventListener("click", function() {
        buttons.forEach(b => b.classList.remove("active"));
        this.classList.add("active");
    });
});

let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide() {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");

    index++;
    if (index >= slides.length) index = 0;
}

setInterval(showSlide, 3000);
showSlide();


document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message sent successfully!");
});