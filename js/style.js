let escuro = false;

function tema() {
    escuro = !escuro;

    document.body.classList.toggle("dark");

    const imagem = document.getElementById("iconeTema");

    if (!imagem) return;

    imagem.src = escuro
        ? "imagens/snoopinoite.jpeg"
        : "imagens/snoopydia.jpeg";

    imagem.classList.add("pular");

    setTimeout(() => {
        imagem.classList.remove("pular");
    }, 500);
}
