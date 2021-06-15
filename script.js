function fecharMenu() {
    document.getElementById('sidebar').style.width = '0';
    document.getElementById('sidebar').style.overflow = 'hidden';
    document.getElementById('content').style.marginLeft = '0';
}

function abrirMenu() {
    document.getElementById('sidebar').style.width = '350px';
    document.getElementById('sidebar').style.overflow = 'visible';
    document.getElementById('content').style.marginLeft = '350px';
}