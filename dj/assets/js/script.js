const delayEmSegundos = 940;




setTimeout(() => {
    document.querySelectorAll('.payment').forEach(el => {
        el.classList.add('show');
    })
}, delayEmSegundos * 1000);