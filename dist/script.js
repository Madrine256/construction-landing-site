const navToggler = document.querySelector('.nav-toggler');
const nav = document.querySelector('.nav');

navToggler.addEventListener('click', ()=>{
    navToggler.classList.toggle('active');
    nav.classList.toggle('show-nav');
    if(nav.classList.contains('show-nav')){
        nav.style.maxHeight = nav.scrollHeight + 'px';
    }else{
        nav.removeAttribute('style')
    }
    
})