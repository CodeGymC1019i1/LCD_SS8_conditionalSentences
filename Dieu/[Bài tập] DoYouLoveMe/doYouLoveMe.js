function yes() {
    alert("<3")
}
function no() {
    window.innerHeight = 500;
    window.innerWidth = 500;
    let hei = Math.random()*window.innerHeight;
    let wid = Math.random()*window.innerWidth;
    moveNo = document.getElementById('no');
    moveNo.style.top = hei + 10 +'px';
    moveNo.style.left = wid +15 + 'px';

}