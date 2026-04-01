function enviarInsta(event){
    event.preventDefault()

    const nome = document.getElementById('nome').value
    const mensagem = document.getElementById('mensagem').value

    const texto = `Olá me chamo ${nome}, ${mensagem}`

    navigator.clipboard.writeText(texto)

    window.open("https://instagram.com/terceiro.info26", "_blank")

}

function doar(event){
    event.preventDefault()

    const chavePix = "3infonet2026@gmail.com" 

    let texto = `${chavePix}`



    navigator.clipboard.writeText(texto)

    alert("Chave Pix copiada! Muito Obrigado pela doação🙌")
}

document.addEventListener('DOMContentLoaded', () => {
    
    const modal = document.createElement('div');
    modal.id = 'modal-dinamico';
    modal.innerHTML = `
        <span id="fechar-modal">&times;</span>
        <div id="modal-conteudo">
            <h2 id="modal-titulo-h2"></h2>
            <img id="modal-img-tag" src="">
            <p id="modal-texto-p"></p>
        </div>
    `;
    document.body.appendChild(modal);

    const imgTag = document.getElementById('modal-img-tag');
    const tituloTag = document.getElementById('modal-titulo-h2');
    const textoTag = document.getElementById('modal-texto-p');
    const btnFechar = document.getElementById('fechar-modal');

    document.querySelectorAll('.galeria-card').forEach(card => {
        card.style.cursor = 'pointer'; 
        
        card.addEventListener('click', () => {
            const fonteImagem = card.querySelector('.galeria-imagem').src;
            const tituloOriginal = card.querySelector('.info-galeria').innerText;
            const textoOriginal = card.querySelector('.paragrafo-galeria').innerText;

            imgTag.src = fonteImagem;
            tituloTag.innerText = tituloOriginal;
            textoTag.innerText = textoOriginal;

            modal.classList.add('visivel');
        });
    });

    const fechar = () => modal.classList.remove('visivel');
    btnFechar.onclick = fechar;
    modal.onclick = (e) => { if(e.target === modal) fechar(); };
});

const textoElemento = document.getElementById("maquina-escrever");
const frases = ["Terceirão Infonet", "A Melhor Sala da ETEC", "Rumo à Formatura!"];
let fraseIndex = 0;
let caractereIndex = 0;
let apagando = false;

function animarDigitacao() {
    const fraseAtual = frases[fraseIndex];
    
    if (apagando) {
        // Remove uma letra
        textoElemento.textContent = fraseAtual.substring(0, caractereIndex - 1);
        caractereIndex--;
    } else {
        textoElemento.textContent = fraseAtual.substring(0, caractereIndex + 1);
        caractereIndex++;
    }

    let velocidade = apagando ? 50 : 150;

    if (!apagando && caractereIndex === fraseAtual.length) {
        velocidade = 2000; // Pausa antes de começar a apagar
        apagando = true;
    } 
    else if (apagando && caractereIndex === 0) {
        apagando = false;
        fraseIndex = (fraseIndex + 1) % frases.length; // Passa para a próxima frase
        velocidade = 500;
    }

    setTimeout(animarDigitacao, velocidade);
}

window.onload = animarDigitacao;