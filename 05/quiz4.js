var isMoving = false; 
var box, mousePos;

window.onload = function () {
    box = document.getElementById("box");
    mousePos = { x: 0, y: 0 };

    box.style.left = "200px";
    box.style.top = "100px";

    box.addEventListener("mousedown", function (e) {
        const left = box.style.left, top = box.style.top;
        mousePos.x = e.clientX - parseInt(left.substr(0, left.length - 2));
        mousePos.y = e.clientY - parseInt(top.substr(0, top.length - 2));

        isMoving = true;
    });

    box.addEventListener("mousemove", function (e) {
        if (isMoving) {
            box.style.left = `${e.clientX - mousePos.x}px`;
            box.style.top = `${e.clientY - mousePos.y}px`;
        }
    });

    box.addEventListener("mouseup", function () {
        isMoving = false;
    });
} 