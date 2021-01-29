var canvas = document.getElementsByClassName('graph')[1];
var hidden_canvas = document.getElementsByClassName('graph')[0];

canvas.width = document.body.clientWidth;
canvas.height = 1.1 * document.body.clientHeight;

hidden_canvas.width = document.body.clientWidth;
hidden_canvas.height = 1.1 * document.body.clientHeight;

let i = 0;

var ctx = canvas.getContext('2d');
let triangle1_center_x = 0.2 * canvas.width;
let triangle1_center_y = 0.2 * canvas.height;
let triangle1_radius = 50;

let square1_center_x = 0.7 * canvas.width;
let square1_center_y = 0.2 * canvas.height;
let square1_radius = 50;

let circle1_center_x = 0.4 * canvas.width;
let circle1_center_y = 0.8 * canvas.height;
let circle1_radius = 30;

setInterval(function() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.strokeStyle = '#ffee00';
ctx.beginPath();
ctx.moveTo(triangle1_center_x + Math.sin(i*Math.PI/180)*triangle1_radius, triangle1_center_y + Math.cos(i*Math.PI/180)*triangle1_radius);
ctx.lineTo(Math.sin(2* Math.PI / 3 + i*Math.PI/180)*triangle1_radius + triangle1_center_x, Math.cos(2 * Math.PI / 3 + i*Math.PI/180)*triangle1_radius + triangle1_center_y);
ctx.lineTo(Math.sin(4 * Math.PI / 3 + i*Math.PI/180)*triangle1_radius + triangle1_center_x, Math.cos(4 * Math.PI / 3 + i*Math.PI/180)*triangle1_radius + triangle1_center_y);
ctx.closePath();
ctx.fillStyle = '#ffee00';
ctx.fill();

ctx.strokeStyle = '#4dff00';
ctx.beginPath();
ctx.moveTo(square1_center_x + Math.sin(-Math.PI / 4 + i*Math.PI/180)*square1_radius, square1_center_y + Math.cos(-Math.PI / 4 + i*Math.PI/180)*square1_radius);
ctx.lineTo(square1_center_x + Math.sin(Math.PI / 4 + i*Math.PI/180)*square1_radius, square1_center_y + Math.cos(Math.PI / 4 + i*Math.PI/180)*square1_radius);
ctx.lineTo(square1_center_x + Math.sin(3*Math.PI / 4 + i*Math.PI/180)*square1_radius, square1_center_y + Math.cos(3*Math.PI / 4 + i*Math.PI/180)*square1_radius);
ctx.lineTo(square1_center_x + Math.sin(5*Math.PI / 4 + i*Math.PI/180)*square1_radius, square1_center_y + Math.cos(5*Math.PI / 4 + i*Math.PI/180)*square1_radius);
ctx.closePath();
ctx.fillStyle = '#4dff00';
ctx.fill();

ctx.strokeStyle = '#ffcb78';
circle1_center_x = circle1_center_x + Math.sin(2*i*Math.PI/180);
ctx.beginPath();
ctx.arc(circle1_center_x, circle1_center_y, circle1_radius, 0, 2 * Math.PI);
ctx.closePath();
ctx.fillStyle = '#ffcb78';
ctx.fill();
ctx.stroke();



i++;

if (i == 360) i = 0;

}, 20);
