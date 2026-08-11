// Controle do nível de zoom

function aumentarZoom() {
    const indiceAtual = niveisZoom.indexOf(zoom);

    if (indiceAtual < niveisZoom.length - 1) {
        zoom = niveisZoom[indiceAtual + 1];
        aplicarZoom();
    }
}

function diminuirZoom() {
    const indiceAtual = niveisZoom.indexOf(zoom);

    if (indiceAtual > 0) {
        zoom = niveisZoom[indiceAtual - 1];
        aplicarZoom();
    }
}

function resetarZoom() {
    zoom = 1;
    posX = 0;
    posY = 0;

    aplicarZoom();
}

function aplicarZoom() {
    if (!video) {
        return;
    }

    video.style.transformOrigin = "center center";

    video.style.transform =
        `translate(${posX}px, ${posY}px) scale(${zoom})`;

    const nivel = document.getElementById("zoom-nivel");

    if (nivel) {
        nivel.textContent = `${Math.round(zoom * 100)}%`;
    }

    video.style.cursor = zoom > 1 ? "grab" : "";
}
