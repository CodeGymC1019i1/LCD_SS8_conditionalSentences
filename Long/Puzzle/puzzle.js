function change1() {
    let i1=document.getElementById('cho1');
    if (i1.src.match("cho1.png")){
        i1.src="cho4.png";
    }
    else if(i1.src.match("cho4.png")){
        i1.src="cho7.png";
    }
    else i1.src="cho1.png"
}
function change2() {
    let i1=document.getElementById('cho2');
    if (i1.src.match("cho2.png")){
        i1.src="cho5.png";
    }
    else if(i1.src.match("cho5.png")){
        i1.src="cho8.png";
    }
    else i1.src="cho2.png"
}
function change3() {
    let i1=document.getElementById('cho3');
    if (i1.src.match("cho3.png")){
        i1.src="cho6.png";
    }
    else if(i1.src.match("cho6.png")){
        i1.src="cho9.png";
    }
    else i1.src="cho3.png"
}

