// Detecta o elemento <video> do YouTube e reage a trocas de vídeo/página

function encontrarVideo() {
    const novoVideo = document.querySelector("video");

    if (!novoVideo) {
        return;
    }

    const novoSrc = novoVideo.currentSrc || novoVideo.src;

    if (!video) {
        video = novoVideo;
        videoSrc = novoSrc;

        console.log("🎬 Primeiro vídeo encontrado!");

        criarControles();
        configurarArraste();
        aplicarZoom();

        return;
    }

    if (video !== novoVideo) {
        video = novoVideo;
        videoSrc = novoSrc;

        resetarZoom();

        console.log("🎬 Elemento de vídeo mudou!");

        criarControles();
        configurarArraste();

        return;
    }

    if (novoSrc && novoSrc !== videoSrc) {
        videoSrc = novoSrc;

        resetarZoom();

        console.log("🎬 Vídeo trocado!");
    }
}


function verificarControles() {
    if (!video) {
        return;
    }

    const controles = document.getElementById("youtube-video-zoom-controls");

    if (!controles) {
        console.log("🎬 Controles de zoom sumiram, recriando...");

        criarControles();

        return;
    }


    const rightControls = document.querySelector(".ytp-right-controls");

    if (rightControls && controles.parentElement !== rightControls) {
        console.log("🎬 Movendo controles para a barra nativa do player...");

        rightControls.insertBefore(controles, rightControls.firstChild);
    }
}


const observer = new MutationObserver(() => {
    encontrarVideo();
    verificarControles();
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});