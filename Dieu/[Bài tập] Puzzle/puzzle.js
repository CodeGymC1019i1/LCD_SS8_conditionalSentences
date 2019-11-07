function changeImg(image,source,index){
    let i;
    for(i=1;i<=4;i++){
        if(image.src.match(source+i+'x'+index+'.png')){
            if(i<4){
                image.src=source+(i+1)+'x'+index+'.png';
                break;
            }else{
                image.src=source+1+'x'+index+'.png';
            }
        }
    }
    compare();
}


// function changeImg1() {
//     let img = document.getElementById('imgx1');
//     if (img.src.match("puzzleImages/girl1x1.png")){
//         img.src = "puzzleImages/girl2x1.png";
//     }
//     else if (img.src.match("puzzleImages/girl2x1.png")){
//             img.src = "puzzleImages/girl3x1.png";
//     }
//     else if(img.src.match("puzzleImages/girl3x1.png")){
//         img.src = "puzzleImages/girl4x1.png";
//     }
//     else {
//         img.src = "puzzleImages/girl1x1.png";
//     }
//     compare();
// }
// function changeImg2() {
//     let img = document.getElementById('imgx2');
//     if (img.src.match("puzzleImages/girl1x2.png")){
//         img.src = "puzzleImages/girl2x2.png";
//     }
//     else if (img.src.match("puzzleImages/girl2x2.png")){
//         img.src = "puzzleImages/girl3x2.png";
//     }
//     else if(img.src.match("puzzleImages/girl3x2.png")){
//         img.src = "puzzleImages/girl4x2.png";
//     }
//     else {
//         img.src = "puzzleImages/girl1x2.png";
//     }
//     compare();
// }
// function changeImg3() {
//     let img = document.getElementById('imgx3');
//     if (img.src.match("puzzleImages/girl1x3.png")){
//         img.src = "puzzleImages/girl2x3.png";
//     }
//     else if (img.src.match("puzzleImages/girl2x3.png")){
//         img.src = "puzzleImages/girl3x3.png";
//     }
//     else if(img.src.match("puzzleImages/girl3x3.png")){
//         img.src = "puzzleImages/girl4x3.png";
//     }
//     else {
//         img.src = "puzzleImages/girl1x3.png";
//     }
//     compare();
// }
// function changeImg4() {
//     let img = document.getElementById('imgx4');
//     if (img.src.match("puzzleImages/girl1x4.png")){
//         img.src = "puzzleImages/girl2x4.png";
//     }
//     else if (img.src.match("puzzleImages/girl2x4.png")){
//         img.src = "puzzleImages/girl3x4.png";
//     }
//     else if(img.src.match("puzzleImages/girl3x4.png")){
//         img.src = "puzzleImages/girl4x4.png";
//     }
//     else {
//         img.src = "puzzleImages/girl1x4.png";
//     }
//     compare();
//
// }
function compare() {
    let img1 =  document.getElementById('imgx1');
    let img2 =  document.getElementById('imgx2');
    let img3 =  document.getElementById('imgx3');
    let img4 =  document.getElementById('imgx4');
    let a = img1.src.substr(0,img1.src.length-5);
    let b = img2.src.substr(0,img2.src.length-5);
    let c = img3.src.substr(0,img3.src.length-5);
    let d = img4.src.substr(0,img4.src.length-5);
    if (a===b&&a===c&&a===d){
        alert('you are right');
    }



}