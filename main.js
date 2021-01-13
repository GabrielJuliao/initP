window.onload = init;

var canvas;
var context;

function init() {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");

    let preview = document.getElementById("preview");
    preview.onclick = handlePreview;
    let clearBtn = document.getElementById("clearCanvas");
    clearBtn.onclick = clearCanvas;
}

function drawSquares(size) {

    // context.fillRect(randomInt(canvas.width), randomInt(canvas.height), size, size);
    // context.stroke();

    let initP = randomInt(canvas.width);
    // case 0.... randomize quando implementar as outras direçoes...
    let w = 0;

    context.beginPath();
    context.moveTo(initP, initP);

    switch (w) {
        case 0:
            // (++)
            context.lineTo(initP, initP + size);
            context.lineTo(initP + size, initP + size);
            context.lineTo(initP + size, initP);
            context.lineTo(initP, initP);
            break;

        case 1:
            // (+-) mude o sentido em que o quadrado é desenhado...
            break;

        case 2: 
            // (--) mude o sentido em que o quadrado é desenhado...
            break;

        case 3:
            // (-+) mude o sentido em que o quadrado é desenhado...
            break;
    }


    context.clientWidth = 5;
    context.stroke();
}

function drawCircles(size) {
    //context.fill;
    context.beginPath();
    context.arc(randomInt(canvas.width), randomInt(canvas.height), size, 0, 360, false);
    context.stroke();
}

function randomInt(range) {
    return Math.floor(Math.random() * range);
}

function handlePreview() {
    let inSize = getValue("size");
    let inQuantity = getValue("quantity");

    if (getSelectedOption("shape") == "square") {
        iterator(inQuantity, () => {
            drawSquares(randomInt(inSize));
        });
    } else if (getSelectedOption("shape") == "circles") {
        iterator(inQuantity, () => {
            drawCircles(randomInt(inSize));
        });
    }
}

function getSelectedOption(id) {
    let selectedObj = document.getElementById(id);
    let index = selectedObj.selectedIndex;
    return selectedObj[index].value;
}

function iterator(iterations, callback) {
    for (let i = 0; i < iterations; i++) {
        callback();
    }
}

function getValue(id) {
    return document.getElementById(id).value;
}

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}