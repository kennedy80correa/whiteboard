let canvas = document.getElementById("canvas");
let test = document.getElementBuId("test");

canvas.width = 1300;
canvas.height = 800;

let ctx = canvas.getContext("2d");

let x;
let y;

window.onmousemove = (e) => {
    x = e.clientX;
    y = e.clientY;

    ctx.lineTo(x, y);
    ctx.stroke();
};