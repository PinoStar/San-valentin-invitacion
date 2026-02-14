//definir elemetos en varibales

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const teamoBtn = document.getElementById("teamo")
const imgIzqui = document.getElementById("img-izquierda");
const imgDere = document.getElementById("img-derecha");
const sadImage = document.getElementById("sadImage");
const finalMessage = document.getElementById("finalMessage");
const music = document.getElementById("loveMusic");
const cover = document.getElementById("cover");


// ===== MENSAJE SECRETO CON CORAZÓN LATIENDO (TOGGLE) =====
const secretBtn = document.getElementById("secretBtn");
const secretMessage = document.getElementById("secretMessage");


cover.addEventListener("click", () => {
    cover.classList.add("open");
    setTimeout(() => {
        cover.classList.add("d-none");
    }, 970);
});

let scale = 1;
// funcion flecha, escucha el evento del boton No 
noBtn.addEventListener("click", () => {
    imgIzqui.classList.remove("d-none");
    imgDere.classList.remove("d-none");
    sadImage.classList.remove("d-none");//remueve dispaly none para que sea visible
    scale += 0.3;
    yesBtn.style.transform = `scale(${scale})`; //boton yes increenta su tamaño
});

// funcion flecha, escucha el evento del boton Si
yesBtn.addEventListener("click", () => {
    finalMessage.classList.remove("d-none"); //activa el cuadro del mensaje final
    music.play();  // suena musica
    createHeart(); // llama a la funcion de los corazones flotantes
});

teamoBtn.addEventListener("click", () => {
    finalMessage.classList.add("d-none")
    sadImage.classList.add("d-none");
    yesBtn.style.transform = `scale(1)`;

});

//funcion que genera corazones de abajo asi arriba

function createHeart(cantidad = 30) {
    for (let i = 0; i < cantidad; i++) {
        let corazon = document.createElement("div");
        corazon.classList.add("corazon");
        corazon.innerHTML = "❤️";
        corazon.style.left = (Math.random() * 100 + "vw");
        let duracion = (Math.random() * 3 + 2);
        corazon.style.animationDuration = duracion + "s";
        document.body.appendChild(corazon);

        setTimeout(() => {
            corazon.remove();
            createHeart(1);
        }, duracion * 1000);
    }
}


let secretTimeout;

if (secretBtn) {
    secretBtn.addEventListener("click", () => {

        // Si está oculto → mostrar
        if (secretMessage.classList.contains("d-none")) {
            secretMessage.classList.remove("d-none");

            // Reinicia temporizador
            clearTimeout(secretTimeout);
            secretTimeout = setTimeout(() => {
                secretMessage.classList.add("d-none");
            }, 120000); // 2 minutos

        } else {
            // Si está visible → ocultar
            secretMessage.classList.add("d-none");
            clearTimeout(secretTimeout);
        }
    });
}

