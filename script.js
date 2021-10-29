window.addEventListener('load', function () {
    const leftBtn = this.document.querySelector('.img-1');
    const rightBtn = this.document.querySelector('.img-2');
    const div = this.document.querySelector('.div');
    const arrayFoto = ['1.jpg', '2.jpg', '3.jpg'];
    var indexFoto = 0;
    var Path = '/img/foto_';


    function back() {
        (indexFoto === arrayFoto.length - 1) ? indexFoto = 0 : indexFoto++;
        div.style.backgroundImage = `url(${Path}${arrayFoto[indexFoto]})`;
    }

    function forward() {
        (indexFoto === 0) ? indexFoto = arrayFoto.length - 1 : indexFoto--;
        div.style.backgroundImage = `url(${Path}${arrayFoto[indexFoto]})`;
    }

    leftBtn.addEventListener('click', back);
    rightBtn.addEventListener('click', forward);


})