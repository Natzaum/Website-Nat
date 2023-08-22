const botao = document.querySelectorAll("a");
let contador = 0;
let contarElemento = document.querySelector("#contador");

function click() {
    contador++;
    atualizarContador();
}

function atualizarContador() {
    contarElemento.textContent = contador;
}

botao.forEach(btn => {
    btn.addEventListener('click', function(e) {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        this.appendChild(ripples);

        setTimeout(() => {
            ripples.remove();
        }, 1000);

        click();
    });
});
