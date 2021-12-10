"use strict";
// Zusammenarbeit mit David Katalenic - Little Dream-Team - more or less...
// Function zum moooven plus drawwwen
var Herbscht;
(function (Herbscht) {
    class Moveable {
        position;
        velocity;
        constructor(_position, _x, _y) {
            this.position = new Herbscht.Vector(_x, _y);
            this.velocity = new Herbscht.Vector(0, 0);
            this.velocity.random(100, 150);
        }
        move(_timeslice) {
            console.log("Es wird gemooooved");
        }
        draw() {
            console.log("Es wird gedrawwwwt");
        }
    }
    Herbscht.Moveable = Moveable;
})(Herbscht || (Herbscht = {}));
//# sourceMappingURL=move.js.map