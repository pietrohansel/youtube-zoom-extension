// Criação dos botões de controle de zoom sobre o player

function criarControles() {
    if (document.getElementById("youtube-video-zoom-controls")) {
        return;
    }

    const controles = document.createElement("div");

    controles.id = "youtube-video-zoom-controls";

    controles.innerHTML = `
        <button id="zoom-menos" title="Diminuir zoom">−</button>
        <span id="zoom-nivel">100%</span>
        <button id="zoom-mais" title="Aumentar zoom">+</button>
        <button id="zoom-reset" title="Resetar zoom">↺</button>
    `;

    const rightControls = document.querySelector(".ytp-right-controls");

    if (rightControls) {
        rightControls.insertBefore(controles, rightControls.firstChild);
    } else {
        const player = video.closest(".html5-video-player");

        if (player) {
            player.appendChild(controles);
        } else {
            document.body.appendChild(controles);
        }
    }

    document.getElementById("zoom-mais").addEventListener("click", () => {
        aumentarZoom();
    });

    document.getElementById("zoom-menos").addEventListener("click", () => {
        diminuirZoom();
    });

    document.getElementById("zoom-reset").addEventListener("click", () => {
        zoom = 1;
        posX = 0;
        posY = 0;
        aplicarZoom();
    });
}
