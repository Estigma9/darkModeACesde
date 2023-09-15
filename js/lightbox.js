
const gallery = document.querySelector('.gallery');
const containerIMG = document.querySelector('.lightbox');
const img = document.querySelector('.show-img');
const button = document.querySelector('.btn');

gallery.addEventListener('click', (evn)=>{
    if (evn.target.matches('.gallery-img')) {
        img.src = evn.target.src;
        containerIMG.classList.add('show');   
    }
});

button.addEventListener('click', ()=>{
    button.parentElement.classList.remove('show');
});



