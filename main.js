var canvas=new fabric.Canvas('myCanvas');
var blockwidth=30;
var blockheight=30;
var playerx=10;
var playery=10;
var blockobject="";
var playerobject="";

function updateplayer(){
    fabric.Image.fromURL("player.png",function(Img){
    playerobject=Img;
    playerobject.scaleToWidth(150);
    playerobject.scaleToHeight(150);
    playerobject.set({
    top:playery,
    left:playerx
    })
    canvas.add(playerobject)
    })
}

function newimg(getImg){
    fabric.Image.fromURL(getImg,function(Img){
    blockobject=Img;
    blockobject.scaleToWidth(blockwidth);
    blockobject.scaleToHeight(blockheight);
    blockobject.set({
    top:playery,
    left:playerx
    })
    canvas.add(blockobject)
    })
}

window.addEventListener("keydown",mykeydown);
function mykeydown(e){
keypressed=e.keyCode;
console.log(keypressed);

if(e.shiftKey && keypressed=='80'){
    console.log("shift & p are pressed together");
    blockheight=blockheight+10
    blockwidth=blockwidth+10
    document.getElementById("currentheight").innerHTML=blockheight;
    document.getElementById("currentwidth").innerHTML=blockwidth;
}
if(e.shiftKey && keypressed=='77'){
    console.log("shift & m are pressed together");
    blockheight=blockheight-10
    blockwidth=blockwidth-10
    document.getElementById("currentheight").innerHTML=blockheight;
    document.getElementById("currentwidth").innerHTML=blockwidth;
}
if(keypressed=='37'){
    console.log("left");
    left();
}
if(keypressed=='38'){
    console.log("up");
    up();
}
if(keypressed=='39'){
    console.log("right");
    right();
}
if(keypressed=='40'){
    console.log("down");
    down();
}
if(keypressed=='87'){
    newimg("wall.jpg");
}
if(keypressed=='71'){
    newimg("ground.png");
}
if(keypressed=='76'){
    newimg("light_green.png");
}
if(keypressed=='84'){
    newimg("trunk.jpg");
}
if(keypressed=='82'){
    newimg("roof.jpg");
}
if(keypressed=='89'){
    newimg("yellow_wall.png");
}
if(keypressed=='68'){
    newimg("dark_green.png");
}
if(keypressed=='85'){
    newimg("unique.png");
}
if(keypressed=='67'){
    newimg("cloud.jpg");
}
function up(){
    if (playery>0){
        playery=playery-blockheight;
        console.log(" Height of the block is "+blockheight);
        console.log(" X position of the player is "+playerx+" Y position of the player is "+playery)
        canvas.remove(playerobject);
        updateplayer()
    }
}
}
function left(){
    if (playerx>0){
        playerx=playerx-blockwidth;
        console.log(" Width of the block is "+blockwidth);
        console.log(" X position of the player is "+playerx+" Y position of the player is "+playery)
        canvas.remove(playerobject);
        updateplayer()
    }
}
function down(){
    if (playery<500){
        playery=playery+blockheight;
        console.log(" Height of the block is "+blockheight);
        console.log(" X position of the player is "+playerx+" Y position of the player is "+playery)
        canvas.remove(playerobject);
        updateplayer()
    }
}
function right(){
    if (playerx<850){
        playerx=playerx+blockwidth;
        console.log(" Width of the block is "+blockwidth);
        console.log(" X position of the player is "+playerx+" Y position of the player is "+playery)
        canvas.remove(playerobject);
        updateplayer()
    }
}

