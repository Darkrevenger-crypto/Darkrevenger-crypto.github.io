const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const dropdown = document.querySelector('.dropdown');


dropdown.style.display='none';

menu.addEventListener('click',open);
function open(e){
    menu.style.display='none';
    dropdown.style.display='flex';
};

close.addEventListener('click',Close);
function Close(e)
{
    
    menu.style.display='flex';
    dropdown.style.display='none';
    
};

