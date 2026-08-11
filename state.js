// Estado compartilhado do vídeo e do zoom

let video = null;
let videoSrc = "";
let zoom = 1;

let posX = 0;
let posY = 0;
let mouseSobreVideo = false;

const niveisZoom = [
    1,
    1.1,
    1.25,
    1.5,
    1.75,
    2,
    2.5,
    3,
    4,
    5
];
