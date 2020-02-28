let menuToggle = 2;
function dropMenuDown() {
    if (menuToggle % 2 === 0) {
        document.getElementById('menu').style.display = 'block';
        menuToggle += 1;
    } else {
        document.getElementById('menu').style.display = 'none';
        menuToggle += 1;
    }
}