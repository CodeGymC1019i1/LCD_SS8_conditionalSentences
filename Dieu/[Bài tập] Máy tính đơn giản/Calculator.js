
function addToScreen(value) {
    let screen = document.getElementById('screen');
    screen.value += value;

}
function calc() {
    let screen = document.getElementById('screen');
    let result = eval(screen.value);
    screen.value = result;

}
function clearScreen() {
    let screen = document.getElementById('screen');
    screen.value = "";

}
function backSpace() {
    let screen = document.getElementById('screen');
    screen.value = screen.value.substr(0,screen.value.length-1);

}
function sqrtNumber() {
    let screen = document.getElementById('screen');
    let result = Math.sqrt(screen.value);
    screen.value = result;

}
function squaNumber() {
    let screen = document.getElementById('screen');
    let result = Math.pow(screen.value,2);
    screen.value = result;
}
function piNumber() {
    let screen = document.getElementById('screen');
    screen.value = Math.PI;
}
function eNumber() {
    let screen = document.getElementById('screen');
    screen.value = Math.E;
}
function expNumber() {
    let screen = document.getElementById('screen');
    screen.value = Math.exp(screen.value);
}
function sin() {
    let screen = document.getElementById('screen');
    screen.value = Math.sin(screen.value);

}
function cos() {
    let screen = document.getElementById('screen');
    screen.value = Math.cos(screen.value);

}
function tan() {
    let screen = document.getElementById('screen');
    screen.value = Math.tan(screen.value);

}
function ln() {
    let screen = document.getElementById('screen');
    screen.value = Math.log(screen.value);

}
function random() {
    let screen = document.getElementById('screen');
    screen.value = Math.random(screen.value);

}
