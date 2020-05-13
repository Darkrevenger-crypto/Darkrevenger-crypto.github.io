var canvas=document.querySelector('canvas');

var width=window.innerWidth;

var rules=document.querySelector('.rules')
const r=20;

var restart= document.querySelector('.restart');

const gg=document.querySelector('.gg');

var dx=-3;

const up=document.querySelector('.up');



canvas.width=width;
canvas.width=window.innerWidth;
canvas.height=200;

var c=canvas.getContext('2d');

var sc=0;


gg.style.visibility='hidden';


function Rect(x,y,w,h){
    this.x=x;
    this.y=y;
    this.h=h;
    this.w=w;
    
    this.draw= function()
{
    c.beginPath();
    c.rect(this.x,this.y,this.w,this.h);
    c.fillStyle='rgb(120,90,120)';
    c.fill();
    c.strokeStyle='rgb(120,90,120)';
    c.stroke();
}
}



restart.style.visibility='hidden';

var e=0;
var array=[];
for(var i=0;i<120;i++)
{
    var h=(Math.random()*25+20); 
    array.push(new Rect(Math.random()*100+(500*(i+1))+dx,150-h,25,h));
    
}



 

 
c.clearRect(0,150,innerWidth,100);

 
var s=0;
var y=150-r;
var d=1;
var hs=0;
var ctr=0;
var f=0;
var t=1;
var start=1;


function animate()
{
  if(start===1) //start the game with right arrow key
  {
    window.addEventListener('keydown',function(e)
    {
      if(e.keyCode===39)
      {
        start=-1;
        rules.style.display='none';
      }
    })
  }

  else{
  if(t===-1)  //restart the game after game over with space bar
  {
  
    restart.style.visibility='visible';
    window.addEventListener('keydown',function(e)
    {
      if(e.keyCode===32)    
      {
        console.log(e.keyCode);
        t=1;
        gg.style.visibility='hidden';
        restart.style.visibility='hidden';
      }
    })
  }

  else if(t===2)
  {
    rules.style.display='flex';
    window.addEventListener('keydown',function(e)
    {
      
      if(e.keyCode===39)
      {
        t=1;
      }
    })
  }

  else{
c.clearRect(0,70,innerWidth,200);


for(var i=0;i<120;i++)
{
    
     //Game over condition
    if(array[i].x-r<r&&r-array[i].x<r&&array[i].y-y<r)
   {

        f=10;
        gg.style.visibility='visible'; //game over screen is visible
        e=sc;
        console.log(innerWidth);
        console.log(e);
        if(sc>hs) //high score is updated
        {
          hs=sc;
        }
         sc=0;//score goes to zero
         dx=-3;
        
    
        for (var j=0;j<120;j++)//all obstacles have their x coordinates set back
        {
          array[j].x=array[j].x+e; 
  
        }
        e=0;//e gets reset
        t=-1;
      
        
      }
      
     array[i].x=array[i].x+dx; //obstacles x position updates
     array[i].draw();  //obstacles are drawn
   
   }


//speeed limiter
if(dx>-15)
{
dx=dx-0.005;
} 


//ground is drawn
c.beginPath();
c.rect(0,150,innerWidth,50);
c.fillStyle='rgb(150,255,60)';
c.strokeStyle='rgb(150,255,60)';
c.fill();
 c.stroke();



//Score and hogh score are drawn
 c.fillStyle="black";
c.fillText("Score :" + sc,innerWidth-100,170);
c.fillText("High score:"+hs,innerWidth-100,180)


//ball is drawn
 if(d>0 || s==0)
 {
 c.beginPath();
 c.arc(r,y,r,0,Math.PI * 2,false);
 c.fillStyle='rgb(255,30,60)';
 c.fill();

 }
 



 
 
   window.addEventListener('keydown',function(e)
    {
        if(e.keyCode === 38 && f<170 &&f>30 )//ball moves up
        {
            c.clearRect(0,0,canvas.width,canvas.height);
            ctr=0;
            c.clearRect(0,20,80,100); 
                                                     
            c.beginPath();
            y=150-r-80; //y coordinatee of the ball
             c.arc(r,y,r,0,Math.PI * 2,false);//ball drawn
             c.fillStyle='rgb(205,80,100)';
              c.fill();
              d=-1; //d negatives
              
             up.style.backgroundColor="black";
            
             
        }

        if(e.keyCode===37)
        {
          t=2;
        }
      
    }
  )
 

  window.addEventListener('keyup',function(e)
    {
        
        if(e.keyCode === 38 )
        {
             
             y=150-r;
             c.clearRect(0,0,100,100);
             c.beginPath();
             c.arc(r,y,r,0,Math.PI * 2,false);
             c.fillStyle='rgb(255,30,60)';
             c.fill();
             f=10;
            
              
              d=1;
              up.style.backgroundColor="gray";
              
             
              
              
        }
    }
)


if(f===170)
{
  
  y=150-r;
  c.clearRect(0,0,100,100);
  c.beginPath();
  c.arc(r,y,r,0,Math.PI * 2,false);
   c.fillStyle='rgb(255,30,60)';
   c.fill();
  
  f=0;
}
 

s=1;
f++;
 
//score gets updated
sc++;


//e gets updated


  }
}

requestAnimationFrame(animate);



}

animate();
