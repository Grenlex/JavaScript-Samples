canvas.width = document.body.clientWidth;
canvas.height = 1.1 * document.body.clientHeight;

hidden_canvas.width = document.body.clientWidth;
hidden_canvas.height = 1.1 * document.body.clientHeight;

let gap_width = canvas.width / 25;
let gap_height = canvas.height / 25;
let coordinate = [];
for (let i = 0; i < 24; i++){
for (let j = 0; j < 24; j++){
let rand = Math.floor(Math.random() * 10) % 3;
let direction = Math.floor(Math.random() * 10) % 2;
let initial_state = +(Math.random() * 10).toFixed(3);
let initial_degree = +(Math.random() * 10).toFixed(3);
coordinate.push([(i+1)*gap_width, (j+1)*gap_height, rand, direction, initial_state, initial_degree]); // [координата по x, координата по y, тип фигуры, движение по горизонтали или по вертикали, начальное положение для смещения, начальное положение поворота]
} 
}



let i = 0;

var ctx = canvas.getContext('2d');

setInterval(function() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
for (let dot of coordinate){

if (dot[2] == 0){
let triangle1_center_x = dot[0];
let triangle1_center_y = dot[1];
if (dot[3] == 0) triangle1_center_x = dot[0] + 10*Math.sin(2*i*Math.PI/180 + dot[4]);
else triangle1_center_y = dot[1] + 10*Math.sin(2*i*Math.PI/180 + dot[4]);
let triangle1_radius = 10;

ctx.strokeStyle = '#ffee00';
ctx.beginPath();
ctx.moveTo(triangle1_center_x + Math.sin(dot[5] + i*Math.PI/180)*triangle1_radius, triangle1_center_y + Math.cos(dot[5] + i*Math.PI/180)*triangle1_radius);
ctx.lineTo(Math.sin(dot[5] + 2* Math.PI / 3 + i*Math.PI/180)*triangle1_radius + triangle1_center_x, Math.cos(dot[5] + 2 * Math.PI / 3 + i*Math.PI/180)*triangle1_radius + triangle1_center_y);
ctx.lineTo(Math.sin(dot[5] + 4 * Math.PI / 3 + i*Math.PI/180)*triangle1_radius + triangle1_center_x, Math.cos(dot[5] + 4 * Math.PI / 3 + i*Math.PI/180)*triangle1_radius + triangle1_center_y);
ctx.closePath();
ctx.fillStyle = '#ffee00';
ctx.fill();
}

if (dot[2] == 1){
let square1_center_x = dot[0];
let square1_center_y = dot[1];
if (dot[3] == 0) square1_center_x = dot[0] + 10*Math.sin(2*i*Math.PI/180 + dot[4]);
else square1_center_y = dot[1] + 10*Math.sin(2*i*Math.PI/180 + dot[4])
let square1_radius = 10;

ctx.strokeStyle = '#4dff00';
ctx.beginPath();
ctx.moveTo(square1_center_x + Math.sin(-Math.PI / 4 + i*Math.PI/180 + dot[5])*square1_radius, square1_center_y + Math.cos(-Math.PI / 4 + i*Math.PI/180 + dot[5])*square1_radius);
ctx.lineTo(square1_center_x + Math.sin(Math.PI / 4 + i*Math.PI/180 + dot[5])*square1_radius, square1_center_y + Math.cos(Math.PI / 4 + i*Math.PI/180 + dot[5])*square1_radius);
ctx.lineTo(square1_center_x + Math.sin(3*Math.PI / 4 + i*Math.PI/180 + dot[5])*square1_radius, square1_center_y + Math.cos(3*Math.PI / 4 + i*Math.PI/180 + dot[5])*square1_radius);
ctx.lineTo(square1_center_x + Math.sin(5*Math.PI / 4 + i*Math.PI/180 + dot[5])*square1_radius, square1_center_y + Math.cos(5*Math.PI / 4 + i*Math.PI/180 + dot[5])*square1_radius);
ctx.closePath();
ctx.fillStyle = '#4dff00';
ctx.fill();
}

if (dot[2] == 2){
let circle1_center_x = dot[0];
let circle1_center_y = dot[1];
let circle1_radius = 10;

ctx.strokeStyle = '#ffcb78';
ctx.beginPath();
if (dot[3] == 0) ctx.arc(circle1_center_x + 10*Math.sin(2*i*Math.PI/180 + dot[4]), circle1_center_y, circle1_radius, 0, 2 * Math.PI);
else ctx.arc(circle1_center_x, circle1_center_y + 10*Math.sin(2*i*Math.PI/180 + dot[4]), circle1_radius, 0, 2 * Math.PI);
ctx.closePath();
ctx.fillStyle = '#ffcb78';
ctx.fill();
}
}
ctx.stroke();



i++;

if (i == 360) i = 0;

}, 20);
