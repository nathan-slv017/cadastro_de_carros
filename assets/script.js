function ocupado(n) {
    let vaga = 'vaga' + n
    let vagaparaOcupar = document.querySelector(`.${vaga}`);


    if (!vagaparaOcupar.classList.contains('ocupado')) {
        vagaparaOcupar.innerHTML = `<img src="img/carro.webp" width="105"  alt="">`
        vagaparaOcupar.classList.add('ocupado');
        return
    }
    if (vagaparaOcupar.classList.contains('ocupado')) {
        vagaparaOcupar.innerHTML = `<p>${n}</p>`
            vagaparaOcupar.classList.remove('ocupado');
        return
    }

}

