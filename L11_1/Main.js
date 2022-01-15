"use strict";
var L11_1_GoldenerHerbst;
(function (L11_1_GoldenerHerbst) {
    window.addEventListener("load", handleLoad);
    let moveables = [];
    let imgData;
    L11_1_GoldenerHerbst.nutPos = [];
    function handleLoad(_event) {
        L11_1_GoldenerHerbst.canvas = document.querySelector("canvas");
        L11_1_GoldenerHerbst.crc2 = L11_1_GoldenerHerbst.canvas.getContext("2d");
        let golden = 0.76;
        let horizon = L11_1_GoldenerHerbst.crc2.canvas.height * golden;
        drawBackground();
        drawSun(new L11_1_GoldenerHerbst.Vector(780, 250));
        drawMountains(new L11_1_GoldenerHerbst.Vector(0, horizon), 75, 250, "grey", "white");
        drawMountains(new L11_1_GoldenerHerbst.Vector(0, horizon), 50, 150, "grey", "lightgrey");
        drawTrees(new L11_1_GoldenerHerbst.Vector(300, 50), "red");
        drawTrees(new L11_1_GoldenerHerbst.Vector(500, 100), "green");
        drawTrees(new L11_1_GoldenerHerbst.Vector(700, 50), "darkorange");
        drawTrees(new L11_1_GoldenerHerbst.Vector(900, 70), "green");
        drawTrees(new L11_1_GoldenerHerbst.Vector(1100, 50), "red");
        drawBushes(new L11_1_GoldenerHerbst.Vector(20, 130));
        drawBushes(new L11_1_GoldenerHerbst.Vector(400, 100));
        drawBushes(new L11_1_GoldenerHerbst.Vector(600, 140));
        imgData = L11_1_GoldenerHerbst.crc2.getImageData(0, 0, L11_1_GoldenerHerbst.canvas.width, L11_1_GoldenerHerbst.canvas.height);
        createClouds();
        createSquirrel();
        createLeaf();
        window.setInterval(update, 60);
    }
    function drawBackground() {
        let golden = 0.62;
        let gradient = L11_1_GoldenerHerbst.crc2.createLinearGradient(0, 0, 0, L11_1_GoldenerHerbst.crc2.canvas.height);
        gradient.addColorStop(0, "pink");
        gradient.addColorStop(golden, "orange");
        gradient.addColorStop(1, "darkgreen");
        L11_1_GoldenerHerbst.crc2.fillStyle = gradient;
        L11_1_GoldenerHerbst.crc2.fillRect(0, 0, L11_1_GoldenerHerbst.crc2.canvas.width, L11_1_GoldenerHerbst.crc2.canvas.height);
    }
    function drawSun(_position) {
        let r1 = 30;
        let r2 = 150;
        let gradient = L11_1_GoldenerHerbst.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        L11_1_GoldenerHerbst.crc2.save();
        L11_1_GoldenerHerbst.crc2.translate(_position.x, _position.y);
        L11_1_GoldenerHerbst.crc2.fillStyle = gradient;
        L11_1_GoldenerHerbst.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        L11_1_GoldenerHerbst.crc2.fill();
        L11_1_GoldenerHerbst.crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        L11_1_GoldenerHerbst.crc2.save();
        L11_1_GoldenerHerbst.crc2.translate(_position.x, _position.y);
        L11_1_GoldenerHerbst.crc2.beginPath();
        L11_1_GoldenerHerbst.crc2.moveTo(0, 0);
        L11_1_GoldenerHerbst.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            L11_1_GoldenerHerbst.crc2.lineTo(x, y);
        } while (x < L11_1_GoldenerHerbst.crc2.canvas.width);
        L11_1_GoldenerHerbst.crc2.lineTo(x, 0);
        L11_1_GoldenerHerbst.crc2.closePath();
        let gradient = L11_1_GoldenerHerbst.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        L11_1_GoldenerHerbst.crc2.fillStyle = gradient;
        L11_1_GoldenerHerbst.crc2.fill();
        L11_1_GoldenerHerbst.crc2.restore();
    }
    function drawTrees(_position, _color) {
        L11_1_GoldenerHerbst.crc2.beginPath();
        L11_1_GoldenerHerbst.crc2.fillStyle = "brown";
        L11_1_GoldenerHerbst.crc2.fillRect(_position.x + -300, _position.y + 400, 25, 110);
        L11_1_GoldenerHerbst.crc2.beginPath();
        L11_1_GoldenerHerbst.crc2.fillStyle = _color;
        L11_1_GoldenerHerbst.crc2.arc(_position.x - 310, _position.y + 360, 50, 0, 2 * Math.PI);
        L11_1_GoldenerHerbst.crc2.arc(_position.x - 250, _position.y + 320, 50, 0, 2 * Math.PI);
        L11_1_GoldenerHerbst.crc2.arc(_position.x - 260, _position.y + 360, 50, 0, 2 * Math.PI);
        L11_1_GoldenerHerbst.crc2.arc(_position.x - 300, _position.y + 320, 50, 0, 2 * Math.PI);
        L11_1_GoldenerHerbst.crc2.closePath();
        L11_1_GoldenerHerbst.crc2.fill();
        L11_1_GoldenerHerbst.crc2.restore();
    }
    function drawBushes(_position) {
        L11_1_GoldenerHerbst.crc2.beginPath();
        L11_1_GoldenerHerbst.crc2.save();
        L11_1_GoldenerHerbst.crc2.fillStyle = "darkgreen";
        L11_1_GoldenerHerbst.crc2.arc(_position.x + 100, _position.y + 382, 8, 0, 2 * Math.PI);
        L11_1_GoldenerHerbst.crc2.arc(_position.x + 98, _position.y + 387, 8, 0, 2 * Math.PI);
        L11_1_GoldenerHerbst.crc2.arc(_position.x + 110, _position.y + 383, 8, 0, 2 * Math.PI);
        L11_1_GoldenerHerbst.crc2.arc(_position.x + 113, _position.y + 390, 8, 0, 2 * Math.PI);
        L11_1_GoldenerHerbst.crc2.arc(_position.x + 113, _position.y + 395, 8, 0, 2 * Math.PI);
        L11_1_GoldenerHerbst.crc2.arc(_position.x + 112, _position.y + 397, 8, 0, 2 * Math.PI);
        L11_1_GoldenerHerbst.crc2.arc(_position.x + 104, _position.y + 400, 8, 0, 2 * Math.PI);
        L11_1_GoldenerHerbst.crc2.arc(_position.x + 100, _position.y + 400, 8, 0, 2 * Math.PI);
        L11_1_GoldenerHerbst.crc2.arc(_position.x + 98, _position.y + 394, 8, 0, 2 * Math.PI);
        L11_1_GoldenerHerbst.crc2.fill();
        L11_1_GoldenerHerbst.crc2.closePath();
        L11_1_GoldenerHerbst.crc2.restore();
    }
    function createClouds() {
        for (let i = 0; i < 1; i++) {
            let cloud = new L11_1_GoldenerHerbst.Cloud(0.5);
            moveables.push(cloud);
        }
    }
    function createSquirrel() {
        for (let i = 0; i < 1; i++) {
            let squirrel = new L11_1_GoldenerHerbst.Squirrel(0.5, new L11_1_GoldenerHerbst.Vector(0.5, 500));
            moveables.push(squirrel);
        }
    }
    function createLeaf() {
        for (let i = 0; i < 20; i++) {
            let leaf = new L11_1_GoldenerHerbst.Leaf(0.5, new L11_1_GoldenerHerbst.Vector(200, 500));
            moveables.push(leaf);
        }
    }
    function createNut(_event) {
        console.log(_event);
        // tslint:disable-next-line: typedef
        let nut = new L11_1_GoldenerHerbst.Nut(new L11_1_GoldenerHerbst.Vector(_event.offsetX, _event.offsetY));
        moveables.push(nut);
        let placeNut = new L11_1_GoldenerHerbst.Vector(_event.offsetX, _event.offsetY);
        L11_1_GoldenerHerbst.nutPos.push(placeNut);
    }
    function update() {
        L11_1_GoldenerHerbst.crc2.clearRect(0, 0, L11_1_GoldenerHerbst.crc2.canvas.width, L11_1_GoldenerHerbst.crc2.canvas.height);
        L11_1_GoldenerHerbst.crc2.putImageData(imgData, 0, 0);
        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
    }
})(L11_1_GoldenerHerbst || (L11_1_GoldenerHerbst = {}));
//# sourceMappingURL=Main.js.map