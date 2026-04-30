function filterSelection(category) {
    let images = document.querySelectorAll("section img");

    images.forEach(img => {
        if (category === "all") {
            img.style.display = "inline-block";
        } 
        else if (img.classList.contains(category)) {
            img.style.display = "inline-block";
        } 
        else {
            img.style.display = "none";
        }
    });
}


let current = 0;
const slides = document.querySelectorAll(".slide");

function showTestimonial() {
    slides.forEach(slide => slide.style.display = "none");

    slides[current].style.display = "block";

    current++;
    if (current >= slides.length) {
        current = 0;
    }
}


showTestimonial();
setInterval(showTestimonial, 3000);


document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message sent successfully!");
});