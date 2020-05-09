var canvas=document.querySelector('canvas');

var width=window.innerWidth;

const r=20;

canvas.width=width;

/*window.addEventListener('resize',function()
{
    var width=window.innerWidth;
    canvas.width=width;
});*/

canvas.width=window.innerWidth;

var c=canvas.getContext('2d');






function Rect(x,y,w,h){
    this.x=x;
    this.y=y;
    this.h=h;
    this.w=w;
    
    this.draw= function()
{
    c.beginPath();
    c.rect(this.x,this.y,this.w,this.h);
    
    c.fill();
    c.stroke();
}
}


var dx=-1;

var array=[];
for(var i=0;i<120;i++)
{
    var h=(Math.random()*25+10); 
    array.push(new Rect(Math.random()*80+(300*i)+dx,100-h,15,h));
    
}


 

 
c.clearRect(0,50,innerWidth,100);
c.beginPath();
c.arc(r,100-r,r,0,Math.PI * 2,false);
c.fill();
 

var d;
function animate()
{
    if(d!==38)
    {
    c.clearRect(0,50,innerWidth,100);
    c.beginPath();
    c.arc(r,100-r,r,0,Math.PI * 2,false);
    c.fill();
    }
  

window.addEventListener('keydown',function(e)
    {
        if(e.keyCode === 38)
        {
            d=e.keyCode;
            console.log(d);
            c.clearRect(0,50,innerWidth,100);
            c.beginPath();
             c.arc(r,100-r-20,r,0,Math.PI * 2,false);
              c.fill();
        }
    }
)

window.addEventListener('keyup',function(e)
    {
        if(e.keyCode === 38)
        {
            
            c.clearRect(0,0,canvas.width,canvas.height);
            c.beginPath();
             c.arc(r,100-r,r,0,Math.PI * 2,false);
              c.fill();
              d=0;
        }
    }
)

   
    c.beginPath();
    c.moveTo(0,100);
     c.lineTo(width,100);
    c.strokeStyle="blue"
     c.stroke();






for(var i=0;i<120;i++)
{
    array[i].draw();
    array[i].x=array[i].x+dx;
   
}

dx=dx-0.005;

requestAnimationFrame(animate);
}

animate();
