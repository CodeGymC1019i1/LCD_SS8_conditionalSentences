// Hàm chuyển ảnh khi click vào ảnh
function changeImg(img, src, index) {
    for (let i = 1; i<=4; i++) {
        if (img.src.match(src + i + '_' + index + '.png')) {
            if (i <4) {
                img.src = src + (i+1) + '_' + index + '.png';
                break;
            } else {
                img.src = src + 1 + '_' + index + '.png';
            }
        }
    }
    compareSrc();// Gọi hàm kiểm tra ảnh
}
// Hàm kiểm tra ảnh theo cùng 1 set
function compareSrc() {
    let img_1 = document.getElementById('img_1');
    let img_2 = document.getElementById('img_2');
    let img_3 = document.getElementById('img_3');
    let img_4 = document.getElementById('img_4');
    let a = img_1.src.substr(0, img_1.src.length - 6);
    let b = img_2.src.substr(0, img_2.src.length - 6);
    let c = img_3.src.substr(0, img_3.src.length - 6);
    let d = img_4.src.substr(0, img_4.src.length - 6);
    if (a === b && a === c && a === d) {
        alert(' You are win')
    }
}