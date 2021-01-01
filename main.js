var canvas = new fabric.Canvas("my_canvas");
var superhero_width = 30;
var superhero_height = 30;
var player_x = 10;
var player_y = 10;
var player_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {

        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
    });

    canvas.add(player_object);
}


function new_block(superhero_chosen) {
    fabric.Image.fromURL(superhero_chosen, function (Img) {


        superhero_object = Img;
        superhero_object.scaleToWidth(block_width);
        superhero_object.scaleToHeight(block_height);
        superhero_object.set({
            top: player_y,
            left: player_x
        });
    });
    
    canvas.add(block_object);
}