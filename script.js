
document.addEventListener('scroll', () => {
    const navbar = document.querySelector(".navbar")
    if (window.scrollY > 0) {
        navbar.classList.add('navscroll')
    } else {
        navbar.classList.remove('navscroll')
    }
})



//menu

const ham = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
ham.addEventListener("click", () => {
    menu.classList.toggle("show-menu");

});

const menulist = document.querySelector(".menulist");
menulist.addEventListener("click", () => {
    menu.classList.toggle("show-menu");

});


// scroll highlighter/////////////////////////////////////////////////////////////

let sections = document.querySelectorAll('.container');
let navLinks = document.querySelectorAll(".navlist li a");
let menuLinks = document.querySelectorAll(".menulist a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 50;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top<(offset+height)){
            navLinks.forEach(links => {
                links.parentNode.classList.remove("in-view");
                document.querySelector('.navlist li a[href*=' + id + ']').parentNode.classList.add('in-view')
            });
            menuLinks.forEach(links => {
                links.classList.remove("in-view");
                document.querySelector('.menulist a[href*=' + id + ']').classList.add('in-view')
            });
        }
    })
}



// scroll highlighter/////////////////////////////////////////////////////////////



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

// feeding zone window

const fzWindow = document.querySelector(".fz")
const fzNav = document.querySelectorAll(".feeding-zones")
const closeBtn = document.querySelector(".close-btn")

fzNav.forEach(fz_nav => {
    fz_nav.addEventListener("click", () => {
        fzWindow.classList.add("show-fz");
    })
})

closeBtn.addEventListener("click", () => {
    fzWindow.classList.remove("show-fz");

})


