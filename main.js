var canvas = new fabric.Canvas("myCanvas");
var block_width = 30;
var block_height = 30;
var x = 10;
var y = 10;
var player_Object, block_Object;
function player_update(){
    fabric.Image.fromURL("player.png", function(img){
        player_Object = img;
        player_Object.scaleToWidth(150);
        player_Object.scaleToHeight(150);
        player_Object.set({
            top: y, 
            left: x
        })
        canvas.add(player_Object)
    })
}
function block_update(image){
    fabric.Image.fromURL(image, function(img){
        block_Object = img;
        block_Object.scaleToWidth(block_width);
        block_Object.scaleToHeight(block_height);
        block_Object.set({
            top: y, 
            left: x
        })
        canvas.add(block_Object)
    })
}
window.addEventListener("keydown", myKeyDown)
 function myKeyDown(e){
     keyDown1 = e.keyCode;
     console.log(keyDown1);
     if(keyDown1 == '87'){
         console.log("W is pressed");
         block_update("wall.jpg");
     }

     if(keyDown1 == '71'){
        console.log("G is pressed");
        block_update("ground.png");
    }

    if(keyDown1 == '76'){
        console.log("L is pressed");
        block_update("light_green.png");
    }

    if(keyDown1 == '84'){
        console.log("T is pressed");
        block_update("trunk.jpg");
    }

    if(keyDown1 == '82'){
        console.log("R is pressed");
        block_update("roof.jpg");
    }

    if(keyDown1 == '89'){
        console.log("Y is pressed");
        block_update("yellow_wall.png");
    }

    if(keyDown1 == '68'){
        console.log("D is pressed");
        block_update("dark_green.png");
    }

    if(keyDown1 == '85'){
        console.log("U is pressed");
        block_update("unique.png");
    }

    if(keyDown1 == '67'){
        console.log("C is pressed");
        block_update("cloud.jpg");
    }
    if(keyDown1 == 80 && e.shiftKey == true){
        block_width = block_width + 10;
        block_height = block_height + 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
        

    }
    if(keyDown1 == 77 && e.shiftKey == true){
        block_width = block_width - 10;
        block_height = block_height - 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
        

    }
    if(keyDown1 == 38){
        console.log("UP is pressed")
        up();
    }
    if(keyDown1 == 37){
        console.log("Left is pressed")
        left();
    }
    if(keyDown1 == 40){
        console.log("Down is pressed")
        down();
    }
    if(keyDown1 == 39){
        console.log("Right is pressed")
        right();
    }

 }
 function up(){
    
     if(y > 0){
         y = y - 10
         canvas.remove(player_Object);
         player_update(); 
     }

 }
 function down(){
    if(y < 450){
        y = y + 10
        canvas.remove(player_Object);
        player_update(); 
    }
}
function right(){
    if(x < 850){
        x = x + 10
        canvas.remove(player_Object);
        player_update(); 
    }
}
function left(){
    if(x >= 0){
        x = x - 10
        canvas.remove(player_Object);
        player_update(); 
    }

}
