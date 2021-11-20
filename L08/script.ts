//Zusammenarbeit mit David Katalenic

namespace generativeArt {
    let crc2: CanvasRenderingContext2D;
    window.addEventListener("load", load);

    function load(_event: Event): void {
        let canvas: HTMLCanvasElement = document.querySelector("canvas")!;  //Aufgriff html 
        crc2 = canvas.getContext("2d")!;
        for (let i: number = 0; i < 29; i++) {
        drawAngular();
        drawCircle();
    }
    }

    function drawAngular(): void {                     //Übersetzt: Male eckig
        let randomColor: string = Math.floor(Math.random() * 16777215).toString(16);
        crc2.beginPath();
        crc2.moveTo(generateX(600), generateY(600));
        crc2.lineTo(generateX(600), generateY(600));
        crc2.lineTo(generateX(400), generateY(600));
        crc2.lineTo(generateX(600), generateY(600));
        crc2.lineTo(generateX(600), generateY(600));
        crc2.lineTo(generateX(100), generateY(600));  //haben mit den Zahlen gespielt um zu schauen was sich verändert.
        crc2.lineTo(generateX(600), generateY(600));
       
        crc2.fillStyle = "#" + randomColor;           //Zufällige Farben generiert.
        crc2.strokeStyle = "#" + randomColor;
        crc2.lineWidth = 3;
        crc2.stroke();
        crc2.fill();
    }

    function drawCircle(): void {       //Kreise 
        let randomColor: string = Math.floor(Math.random() * 16777215).toString(16);
        crc2.beginPath();
        crc2.arc(generateX(600), generateY(450), generateCircleNumber(50), 0, 2 * Math.PI);
        crc2.fillStyle = "#" + randomColor;
        crc2.strokeStyle = "#" + randomColor;
        crc2.lineWidth = 3;
        crc2.stroke();
        crc2.fill();

    }
    function generateX(_x: number): number {    //Eine zufällige Anzahl wird mit sich selbst multipliziert, um die zufällige Anzahl der Figuren zu bestimmen.
        let x: number = Math.random() * _x;
        return x;

    }

    function generateY(_y: number): number {    //Eine zufällige Anzahl  wird mit sich selbst multipliziert, um die zufällige Anzahl der Figuren zu bestimmen. Einmal mit x und einmal mit y.
        let y: number = Math.random() * _y;
        return y;

    }

    function generateCircleNumber(_g: number): number { //Anzahl Kreise werden generiert und in der function "drawCircle" zugegeben. 
        let g: number = Math.random() * _g;
        return g;
    }
}