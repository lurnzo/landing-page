let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}


const typed = new Typed('.multiple-text', {
    strings: ['Healthcare', 'Finance', 'Manufacturing', 'Retail', 'Education', 'Automation', 'Entertainment', 'Real Estate', 'Agriculture', 'Cybersecurity','Travel', 'Hospitality', 'Human Resources', 'Marketing','Advertising'],
    typeSpeed: 1,
    backSpeed: 1,
    backDelay: 1200,
    loop: true,
});