document.querySelector('.button').addEventListener('click', function() {
    const Pestaña = document.querySelector('.Pestaña');
    const Botonimg = document.querySelector('.Botonimg')
    Pestaña.classList.toggle('opened');

    Botonimg.classList.toggle('rotate')
});