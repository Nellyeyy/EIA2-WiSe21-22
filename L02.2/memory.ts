namespace sequenzMemory {

    let sequenz: string = "A";

    window.addEventListener("load", gameload);

    function gameload (_event: Event): void {
        let game: HTMLElement = <HTMLElement>document.querySelector("div#gameboard");
        game.addEventListener("click", placeLetter);
        document.addEventListener("keydown", choosesequenz);
    }

    function placeLetter (_event: MouseEvent): void {
        let x: number = _event.offsetX;
        let y: number = _event.offsetY;

        let game: HTMLElement = <HTMLElement>_event.target;
        let span: HTMLSpanElement = document.createElement("span");
        
        game.appendChild(span);

        span.textContent = sequenz;
        span.style.left = x + "px";
        span.style.top = y + "px";

        span.addEventListener("click", deleteLetter);
    }

    function choosesequenz (_event: KeyboardEvent): void {
        sequenz = _event.key;
    }

    function deleteLetter (_event: MouseEvent): void {
        let target: Node = <Node>_event.target;
        let parent: Node = <Node>target.parentNode;
        parent.removeChild(target);
    }
}