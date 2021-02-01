var canvas = new fabric.Canvas('myCanvas');
biw = 30;
bih = 30;
px = 10;
py = 10;
po = '';
bo = '';
function player_Update(){
    fabric.Image.fromURL("player.png",function(Img){
    po = Img;
    po.scaleToWidth("100");
    po.scaleToHeight("120");
    po.set({
        top:py,
        left:px
        });
        
    });
    canvas.add(po);
}
function block_Update(getImage){
    fabric.Image.fromURL(getImage,function(Img){
    bo = Img;
    bo.scaleToWidth(biw);
    bo.scaleToHeight(bih);
    bo.set({
        top:py + 12,
        left:px + 12
        });
        
    });
    canvas.add(bo);
}
window.addEventListener("keydown",myKeydown);

function myKeydown(e){
    var keypressed = e.keyCode;
    if(e.shiftKey == true && keypressed == "80"){
        biw = biw + 10;
        bih = bih +  10;
        document.getElementById("CW").innerHTML = biw ;
        document.getElementById("CH").innerHTML = bih ;
    }
    if(e.shiftKey == true && keypressed == "77"){
        biw = biw - 10;
        bih = bih - 10;
        document.getElementById("CW").innerHTML = biw ;
        document.getElementById("CH").innerHTML = bih ;
    }
    if(keypressed == '87'){
        block_Update("wall.jpg");
    }
    if(keypressed == '71'){
        block_Update("ground.png");
    }
    if(keypressed == '76'){
        block_Update("light_green.png");
    }
    if(keypressed == '84'){
        block_Update("trunk.jpg");
    }
    if(keypressed == '82'){
        block_Update("roof.jpg");
    }
    if(keypressed == '89'){
        block_Update("yellow_wall.png");
    }
    if(keypressed == '68'){
        block_Update("dark_green.png");
    }
    if(keypressed == '85'){
        block_Update("unique.png");
    }
    if(keypressed == '67'){
        block_Update("cloud.jpg");
    }
    if(keypressed == '38'){
        up();
    }
    if(keypressed == '40'){
        down();
    }
    if(keypressed == '37'){
        left();
    }
    if(keypressed == '39'){
        right();
    }
}

