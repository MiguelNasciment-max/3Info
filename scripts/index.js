const dados = {

    classcontrol: {
        titulo: "ClassControl",
        texto: "Com uma interface simples e intuitiva, você acompanha quem já pagou, quais aulas foram realizadas e mantém sua agenda sempre organizada, economizando tempo e evitando esquecimentos.",
        img: "imagem/ClassControl 1.png"
    },

    conducta: {
        titulo: "Conducta",
        texto: "O Conducta nasceu da necessidade de modernizar os processos disciplinares nas escolas. Entendemos que a gestão de advertências e ocorrências não deve ser um fardo burocrático, mas sim um processo ágil, transparente e focado no desenvolvimento do aluno.",
        img: "imagem/Conducta 1.png"
    },

    empregoja: {
        titulo: "EmpregoJá",
        texto: "",
        img: "imagem/"
    },

    novacronos: {
        titulo: "Nova Cronos",
        texto: "O NovaCronos organiza a rotina da sua empresa com controle de ponto, acompanhamento de tarefas e relatórios de atividades em uma plataforma simples, online e fácil de usar.",
        img: "imagem/Nova Cronos 1.png"
    },

    sound_day: {
        titulo: "Sound Day",
        texto: "",
        img: "imagem/"
    },

    systagio: {
        titulo: "Systagio",
        texto: "O Systagio é um sistema completo para instituições de ensino e empresas controlarem estágios, contratos e alunos em um só lugar.",
        img: "imagem/Systagio 1.png"
    },

    coditech_treinamentos: {
        titulo: "Coditech Treinamentos",
        texto: "Oferecemos cursos gratuitos voltados para o seu crescimento pessoal e profissional.Todos os cursos incluem certificação gratuita!",
        img: "imagem/Treino 1.png"
    },

    verify: {
        titulo: "Verify",
        texto: "Verify garante eficiência e velocidade com qualquer matéria envolvendo materiais complementares e cursos.",
        img: "imagem/Verify 1.png"
    },

    libritec: {
        titulo: "Libritec",
        texto: "O Libritec facilita o controle de acervo, empréstimos e reservas de livros, tornando o acesso às informações mais rápido, organizado e alinhado à realidade digital dos estudantes.",
        img: "imagem/Libritec 1.png"
    },

    schoolcontrol: {
        titulo: "SchoolControl",
        texto: "SchoolControl é a solução inteligente para gerenciar sua instituição. Integre processos, aumente a eficiência e proporcione uma experiência melhor para alunos, pais e professores.",
        img: "imagem/School 1.png"
    },

    eventual: {
        titulo: "Eventual",
        texto: "",
        img: "imagem/"
    },

    workedu: {
        titulo: "WorkEdu",
        texto: "",
        img: "imagem/"
    },
};

function abrirModal(card) {
    const id = card.dataset.id;
    const item = dados[id];

    document.getElementById("modalTitulo").innerText = item.titulo;
    document.getElementById("modalTexto").innerText = item.texto;
    document.getElementById("modalImg").src = item.img;

    document.getElementById("modal").classList.remove("hidden");
}

function fecharModal() {
    document.getElementById('modal').classList.add('hidden')
}

//Mascara do telefone

$(document).ready(function () {
    $('#phone').val('');
    $('#phone').mask('(00) 00000-0000');
});

//funcao do menu mobile

const menu = document.getElementById('mobileMenu');
const overlay = document.getElementById('menuOverlay');

function toggleMenu() {

    const aberto = !menu.classList.contains('hidden');

    if (!aberto) {
        menu.classList.remove('hidden');
        overlay.classList.remove('hidden');

        requestAnimationFrame(() => {
            menu.classList.remove('translate-x-full');
            menu.classList.add('translate-x-0');

            overlay.classList.remove('opacity-0');
            overlay.classList.add('opacity-100');
        });

    } else {
        menu.classList.remove('translate-x-0');
        menu.classList.add('translate-x-full');

        overlay.classList.remove('opacity-100');
        overlay.classList.add('opacity-0');

        setTimeout(() => {
            menu.classList.add('hidden');
            overlay.classList.add('hidden');
        }, 300);
    }
}

overlay.addEventListener('click', toggleMenu);

document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', toggleMenu);
});

//Redimensionamento da tela

function ajustarLayoutConformeTela() {
    const larguraTela = window.innerWidth;
    const headerDesktop = document.querySelector('.header-desktop');
    const headerMobile = document.querySelector('.header-mobile');
    const cardsMobile = document.querySelector('.cards-mobile');
    const cardsDesktop = document.querySelector('.cards-desktop');

    if (larguraTela <= 900) {
        // Ajustes para telas pequenas (mobile)
        headerDesktop.style.display = 'none';
        headerMobile.style.display = 'flex';
        cardsMobile.style.display = 'flex';
        cardsDesktop.style.display = 'none';
    } else {
        // Ajustes para telas grandes (desktop)
        headerDesktop.style.display = 'flex';
        headerMobile.style.display = 'none';
        cardsMobile.style.display = 'none';
        cardsDesktop.style.display = 'flex';
    }
}

// Adiciona o evento de redimensionamento da tela
window.addEventListener('resize', ajustarLayoutConformeTela);
window.addEventListener('resize', updateCarousel);


ajustarLayoutConformeTela();

function mostrarPopup(mensagem, tipo = 'erro') {
    // Procura o container, se não existir, cria dinamicamente
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast ${tipo}`;
    toast.innerHTML = `<span>${mensagem}</span>`;

    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('esconder');
        toast.addEventListener('animationend', () => {
            toast.remove();
        });
    }, 4500);
}

function enviarInsta(event){
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;

    if (!nome || !mensagem) {
        mostrarPopup("Por favor, preencha todos os campos antes de enviar.", "erro");
        return;
    }

    const texto = `Olá, me chamo ${nome}. ${mensagem}`;

    navigator.clipboard.writeText(texto).then(() => {
        mostrarPopup("Mensagem copiada! Cole em nosso direct 😎.", "sucesso");
        
        setTimeout(() => {
            window.open("https://ig.me/m/terceiro.info26", "_blank");
        }, 1000);
    }).catch(err => {
        console.error("Erro ao copiar: ", err);
        mostrarPopup("Não foi possível copiar a mensagem.", "erro");
    });
}

function doar(event){
    event.preventDefault();

    const chavePix = "3infonet2026@gmail.com"; 

    navigator.clipboard.writeText(chavePix).then(() => {
        mostrarPopup("Chave Pix copiada! Obrigado por ajudar o Terceirão 😎", "sucesso");
    }).catch(err => {
        console.error("Erro ao copiar: ", err);
        mostrarPopup("Erro ao copiar a chave Pix.", "erro");
    });
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
        fraseIndex = (fraseIndex + 1) % frases.length; 
        velocidade = 500;
    }

    setTimeout(animarDigitacao, velocidade);
}

window.onload = animarDigitacao;
