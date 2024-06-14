

document.addEventListener('scroll', () => {
    const navbar = document.querySelector(".navbar")
    if (window.scrollY > 0) {
        navbar.classList.add('navscroll')
    } else {
        navbar.classList.remove('navscroll')
    }


})



// faq start

const faqs = document.querySelectorAll(".faq-box")

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    })
})

// navbar

if (matchMedia) {
    var mq = window.matchMedia("(max-width: 1330px)");
    mq.addListener(WidthChange); // Use addListener for compatibility with older browsers
    WidthChange(mq); //to set the initial state
}

function WidthChange(mq) {
    if (mq.matches) {
        document.getElementById("logo-text").innerHTML = "AWC";
    } else {
        document.getElementById("logo-text").innerHTML = "Animal Welfare Cell"; // You might want to reset it back
    }
}