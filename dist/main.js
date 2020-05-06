const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const dropdown = document.querySelector('.dropdown');
const createai=document.querySelector('.createai');
const h7=document.querySelector('.h7');
const com=document.querySelector('.com');
let c=1;
 


dropdown.style.display='none';

menu.addEventListener('click',open);
function open(e){
    menu.style.display='none';
    dropdown.style.display='flex';
    c=-1;
};

close.addEventListener('click',Close);
function Close(e)
{
    
    menu.style.display='flex';
    dropdown.style.display='none';
    
    
};

window.addEventListener('resize',function(e)
{
    let width=window.innerWidth;
    if(width<1024)
    {
        menu.style.display='flex';
        
        if(c>0)
        {dropdown.style.display='none';}
        else{
            dropdown.style.display='flex';
        }
    }
    else{
        dropdown.style.display='none';
        menu.style.display='none';
        c=1;
    }
});




window.addEventListener('scroll',function(e)
{
    let sval=window.scrollY;
    
    if (sval>200)
{
 h7.style.visibility='hidden';
 com.style.visibility='hidden';
 createai.style.visibility='visible';
}
else{
    h7.style.visibility='visible';
    com.style.visibility='visible';
    createai.style.visibility='hidden';
    
}

});

