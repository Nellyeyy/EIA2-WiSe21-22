namespace L11_2_GoldenerHerbst {
    export class Nut extends Moveable {
        
        public wasEaten: boolean;

        constructor(_position: Vector) {
            super(_position);  
        }

        public draw(): void {
            crc2.save();
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y , 7, 0, 5 * Math.PI);
            crc2.fillStyle = "yellow";
            crc2.fill();
            crc2.restore();
        }
    }
}

