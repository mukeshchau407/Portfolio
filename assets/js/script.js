var typed = new Typed(".text",{
    strings:["Front-End Developer" , "Web Developer" , "Back-End Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

const $header = document.querySelector("[data-header]");
window.addEventListener("scroll", e =>{
    $header.classList[window.scrollY > 50 ? "add" : "remove"] ("active");
}); 