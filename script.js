
window.addEventListener('load', function() {
    const image = document.querySelector('#apresentacao img');
    image.style.opacity = '1';
});
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

const textElement = document.getElementById('output');
const cursorElement = document.getElementById('cursor');
const texts = [
    "Hello, World!", 
    "¡Hola, Mundo!",
    "Bonjour, le Monde!",
    "Hallo, Welt!",
    "Ciao, Mondo!",
    "こんにちは、世界！"
];
const typingSpeed = 350;
const eraseSpeed = 80;

async function typeText(text, delay) {
    for (let i = 0; i < text.length; i++) {
        await new Promise(resolve => setTimeout(resolve, delay));
        textElement.textContent += text[i];
    }
}

async function eraseText(delay) {
    const currentText = textElement.textContent;
    for (let i = currentText.length - 1; i >= 0; i--) {
        await new Promise(resolve => setTimeout(resolve, delay));
        textElement.textContent = currentText.slice(0, i);
    }
}

async function animateText() {
    let currentIndex = 0;

    await new Promise(r => setTimeout(r, 2000));
    while (true) {
        const currentText = texts[currentIndex];
        await eraseText(eraseSpeed);
        await new Promise(resolve => setTimeout(resolve, typingSpeed * 2));
        textElement.textContent = "";
        await typeText(currentText, typingSpeed);
        await new Promise(resolve => setTimeout(resolve, typingSpeed * 2));

        currentIndex = (currentIndex + 1) % texts.length;
        
        await new Promise(r => setTimeout(r, 2000));
    }
}

animateText();



const scrollToTopBtn = document.getElementById("scrollToTopBtn");
const scroller = document.getElementById("scroller");
function toggleScrollToTopButton() {
if (document.documentElement.scrollTop > 50) {
    scrollToTopBtn.classList.add("show");
    scroller.classList.add("hide");
  } else {
    scrollToTopBtn.classList.remove("show");
    scroller.classList.remove("hide");
  }
}

window.addEventListener("scroll", toggleScrollToTopButton);

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


function atualizarContador() {
    const dataAtual = new Date();
    const dataFormatada = `${dataAtual.toLocaleDateString()} ${dataAtual.toLocaleTimeString()}`;
    document.getElementById('dataDeHoje').innerText = dataFormatada;
}

// Atualiza o contador a cada segundo
setInterval(atualizarContador, 1000);

// Inicializa o contador ao carregar a página
atualizarContador();