let escuro = false;

function tema() {
    escuro = !escuro;

    document.body.classList.toggle("dark");

    const imagem = document.getElementById("iconeTema");

    if (!imagem) return;

    imagem.src = escuro
        ? "imagens/slime-noite.png"
        : "imagens/slime-dia (1).png";

    imagem.classList.add("pular");

    setTimeout(() => {
        imagem.classList.remove("pular");
    }, 500);
}
