namespace EventInspector {

    // install load listener on window - load -> handleload
    window.addEventListener("load", handleLoad); 

    // handleLoad -> install mouse move listener on doc. -> install click-and-keyup-listener in doc., body and all divs
    function handleLoad (_event: Event): void {
        document.addEventListener("click")
    };

    // install load listener on window - mouse move -> setInfoBox
    window.addEventListener("mousemove", setInfoBox);

    // setInfoBox -> display mouse posi. and events target in span-element -> set style attribute top and ledt od span to mopusposi. + offset
    function setInfoBox (_event: MouseEvent) {

    };


    // install load listener on window - click -> logInfo
    window.addEventListener("click", logInfo);

    // install load listener on window - key up -> logInfo
    window.addEventListener ("keyup", logInfo);

    // logInfo -> log events type, target, currentTarget and the whole event object to the browser-console
    function logInfo () {

    };

    







}