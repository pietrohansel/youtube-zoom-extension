// Arrastar o vídeo (pan) quando o zoom está ativo

function configurarArraste() {

    let arrastando = false;
    let inicioX = 0;
    let inicioY = 0;

    video.addEventListener("mouseenter", () => {
        mouseSobreVideo = true;
    });

    video.addEventListener("mouseleave", () => {
        mouseSobreVideo = false;
    });

    video.addEventListener("mousedown", (event) => {
        if (zoom <= 1) {
            return;
        }

        arrastando = true;

        inicioX = event.clientX - posX;
        inicioY = event.clientY - posY;

        video.style.cursor = "grabbing";

        event.preventDefault();
    });

    document.addEventListener("mousemove", (event) => {
        if (!arrastando) {
            return;
        }

        posX = event.clientX - inicioX;
        posY = event.clientY - inicioY;

        aplicarZoom();
    });

    document.addEventListener("mouseup", () => {
        if (!arrastando) {
            return;
        }

        arrastando = false;

        video.style.cursor = zoom > 1 ? "grab" : "";
    });
}
