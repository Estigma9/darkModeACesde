
//Guardar en localstorage
let darkMode = localStorage.getItem('dark');

const btnSwitch = document.querySelector('#switch');

//Evento
btnSwitch.addEventListener('click', ()=>{
    // Obtener del localStorage
    darkMode = localStorage.getItem('dark');

    if (darkMode !== 'enable') {
        enableDarkMode();
        
    } else {
        disableDarkMode();        
    };

});


// Estados para el localStorage
const enableDarkMode = ()=>{
    document.body.classList.add('dark');
    btnSwitch.classList.add('active');

    localStorage.setItem('dark', 'enable');
};

const disableDarkMode = ()=>{
    document.body.classList.remove('dark');
    btnSwitch.classList.remove('active');
    
    localStorage.setItem('dark', null);
};

if (darkMode === 'enable') {
    enableDarkMode();
};






// const btnSwitch = document.querySelector('#switch');

// btnSwitch.addEventListener('click', ()=>{
//     document.body.classList.toggle('dark');
//     btnSwitch.classList.toggle('active');
// })

