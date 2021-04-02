var canvas=new fabric.Canvas("mycanvas");
var playerx=10;
var playery=10;
blockimagewidth=30;
blockimageheight=30;
var playerobject="";
var blockimageobject="";
function player_update(){

    fabric.Image.fromURL("player.png",function(Img){
        playerobject=Img;
        playerobject.scaleToWidth(150);
        playerobject.scaleToHeight(140);
        playerobject.set({
            top:playery,left:playerx
        });
        canvas.add(playerobject);
    });
}

function new_image(get_image){

    fabric.Image.fromURL(get_image,function(Img){
        blockobject=Img;
        blockobject.scaleToWidth(blockimagewidth);
        blockobject.scaleToHeight(blockimageheight);
        blockobject.set({
            top:playery,left:playerx
        });
        canvas.add(blockobject);
    });
}

window.addEventListener("keydown",mykeydown);
function mykeydown(e){

keypressed=e.keyCode;
console.log(keypressed);
if(e.shiftKey==true && keypressed=='80'){blockimagewidth=blockimagewidth+10;
    blockimageheight=blockimageheight+10;
document.getElementById("Current_width").innerHTML=blockimagewidth;
document.getElementById("Current_height").innerHTML=blockimageheight;}

if(e.shiftKey==true && keypressed=='77'){blockimagewidth=blockimagewidth-10;
    blockimageheight=blockimageheight-10;
document.getElementById("Current_width").innerHTML=blockimagewidth;
document.getElementById("Current_height").innerHTML=blockimageheight;}

if(keypressed=='38'){

up();
console.log("up");
}

if(keypressed=='40'){

    down();
    console.log("down");
    
}

if(keypressed=='37'){

    left();
    console.log("left");
}   
if(keypressed=='39'){

    right();
    console.log("right");
} 
if(keypressed=='70'){

    new_image('ironman_face.png');
    console.log("f");
} 

if(keypressed=='66'){

    new_image('spiderman_body.png');
    console.log("b");
} 

if(keypressed=='76'){

    new_image('hulk_legs.png');
    console.log("l");
} 

if(keypressed=='82'){

    new_image('thor_right_hand.png');
    console.log("r");
} 
if(keypressed=='72'){

    new_image('captain_america_left_hand.png');
    console.log("h");
} 


function up(){
    if (playery>=0){
        playery=playery-blockimageheight;
        canvas.remove(playerobject);
        player_update();
    }
}


function down(){
    if (playery<=500){
        playery=playery+blockimageheight;
        canvas.remove(playerobject);
        player_update();
    }
}


function left(){
    if (playerx>=0){
        playerx=playerx-blockimagewidth;
        canvas.remove(playerobject);
        player_update();
    }
}

function right(){
    if (playerx<=850){
        playerx=playerx+blockimagewidth;
        canvas.remove(playerobject);
        player_update();
    }}}