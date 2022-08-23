canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
var LastPosition_x;
var LastPosition_y;
var mouse_event = "empty";
var color = "red";
var width_line = 1;

canvas.addEventListener("mousedown", my_mouse_down);

function my_mouse_down(e) {
    color = document.getElementById("color").value;
    width_line = document.getElementById("width_line").value;
    mouse_event = "mouseDown";
}

canvas.addEventListener("mouseup", my_mouse_up);

function my_mouse_up(e) {
    mouse_event = "mouseUP";
}

canvas.addEventListener("mouseleave", my_mouse_leave);

function my_mouse_leave(e) {
    mouse_event = "mouseleave";
}

canvas.addEventListener("mousemove", my_mouse_move);

function my_mouse_move(e) {
    currentposition_x = e.clientX - canvas.offsetLeft;
    currentposition_y = e.clientY - canvas.offsetTop;

    if (mouse_event == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_line;

        console.log("Last Position of X and Y Codrdinates = ");
        console.log("x = " + LastPosition_x + "Y = " + LastPosition_y);
        ctx.moveTo(LastPosition_x, LastPosition_y);


        console.log("Current Position of X and Y Codrdinates = ");
        console.log("x = " + currentposition_x + "Y = " + currentposition_y);
        ctx.lineTo(currentposition_x, currentposition_y);
        ctx.stroke();
    }
    LastPosition_x = currentposition_x;
    LastPosition_y = currentposition_y;
}

function clear_area() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}