let imgObj2;
function moveright() {
    imgObj2 = document.getElementById('nobita');
    imgObj2.style.left = parseInt(imgObj2.style.left) + 10 + 'px';
}
function moveleft() {
    imgObj2 = document.getElementById('nobita');
    imgObj2.style.left = parseInt(imgObj2.style.left) - 10 + 'px';
}
function moveUp() {
    imgObj2 = document.getElementById('nobita');
    imgObj2.style.top = parseInt(imgObj2.style.top) - 10 + 'px';
}
function moveDown() {
    imgObj2 = document.getElementById('nobita');
    imgObj2.style.top = parseInt(imgObj2.style.top) + 10 + 'px';
}

function moveKey (e) {
    console.log(e)
    switch (e.keyCode) {
        case 37:
            moveleft();
            break;
        case 38:
            moveUp();
            break;
        case 39:
          moveright();
            break;
        case 40:
            moveDown();
            break;
    }
}

function docReady() {
    window.addEventListener('keydown', moveKey);
}

