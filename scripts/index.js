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