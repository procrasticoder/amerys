var products_name=['ceramics batts','extruded batts with interlocks','kiln pillars','saggar tray','KILN FURNITURES']
slide_cntr=4 
function sliding(){
   
    if(slide_cntr>=1){

        document.getElementsByClassName("flash_images")[0].getElementsByTagName("img")[slide_cntr].style.animation="going 2s linear forwards";
        document.getElementsByClassName("flash_images")[0].getElementsByTagName("img")[slide_cntr-1].style.animation="coming 2s linear forwards";
        // if(4-slide_cntr>0)
        // document.getElementsByClassName("flash_images_content")[0].getElementsByTagName("h1")[4-slide_cntr-1].style.display="none";
        // document.getElementsByClassName("flash_images_content")[0].getElementsByTagName("h1")[4-slide_cntr].style.display="block";

        // document.getElementsByClassName("flash_images_content")[0].getElementsByTagName("h1")[4-slide_cntr].style.animation='text_animation 2s 1 linear forwards';
        
        // document.getElementsByClassName("flash_images_content")[0].getElementsByTagName("h1")[4-slide_cntr].innerHTML=products_name[4-slide_cntr];
        slide_cntr--;
        setTimeout(() => {
            sliding()
        }, 6000);
    }
    else{
        document.getElementsByClassName("flash_images")[0].getElementsByTagName("img")[0].style.animation="going 2s linear forwards";
        document.getElementsByClassName("flash_images")[0].getElementsByTagName("img")[4].style.animation="coming 2s linear forwards";
        document.getElementsByClassName("flash_images_content")[0].getElementsByTagName("h1")[4].style.display="none";

        // document.getElementsByClassName("flash_images_content")[0].getElementsByTagName("h1")[0].innerHTML=products_name[4];
        slide_cntr=4;
        setTimeout(() => {
            sliding()
        }, 6000);
    }
}
setTimeout(() => {
    sliding()
}, 3000);
// ---------------------------------------------
// button gallery
var strip=document.getElementById("new_strip");
var pixel=0;


var frameWidth=300;

var stripLeft=strip.style.left="-900px";
stripLeft=stripLeft.replace("px","");
    stripLeft=parseInt(stripLeft);
console.log(window.getComputedStyle(strip).left)
var i=0;
let id;
function start()
{
 id=setInterval(() => {
    func();
}, 1);
}
var end=1;
function func()
{   end=0;
    
    stripLeft=stripLeft+pixel;
      
    if(stripLeft%300===0)
    {
    clearInterval(id);
        end=1;
    }
    strip.style.left=stripLeft+"px";
    // console.log(stripLeft);
    
}
var rid;
var lid;
moveR();
function moveR()
{
    rid=setInterval(() => {
    right();
}, 3000);
}

function moveL()
{
    lid=setInterval(() => {
    left();
}, 3000);
}
function left()
{   
    pixel=-1;  
    if(stripLeft!=-1200)
    {
    if(end) 
    start();
    }

    else{
        // console.log('object');
        clearInterval(lid);
        moveR();
    }
    
}

function right()
{
    pixel=1;
   console.log(stripLeft);
    if(stripLeft!=0)
    {
        if(end)
      start();
    }

    else{
        // console.log('h');
        clearInterval(rid);
        moveL();
    }
}

// -----------------------------
