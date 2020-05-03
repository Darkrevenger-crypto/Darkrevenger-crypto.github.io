const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const dropdown = document.querySelector('.dropdown');
let sval=window.scrollY;
const h7=document.querySelector('.h7');
const com=document.querySelector('.com');


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

window.addEventListener('scroll',Scroll);

function Scroll(e)
{
if (sval>200)
{
 h7.style.visibility='hidden';
 com.style.visibility='hidden';
}
else{
    h7.style.visibility='visible';
    com.style.visibility='visible';
}
};