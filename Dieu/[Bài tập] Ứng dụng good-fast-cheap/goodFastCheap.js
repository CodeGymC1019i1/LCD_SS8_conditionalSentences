
function goodFastCheap1() {
    let good = document.getElementById("good");
    let fast = document.getElementById("fast");
    let cheap = document.getElementById("cheap");
    if (good.checked ) {
        if (fast.checked) {
            cheap.checked = false;
        }
    }
    document.getElementById("cheap").checked = cheap.checked;
}
function goodFastCheap2() {
    let good = document.getElementById("good");
    let fast = document.getElementById("fast");
    let cheap = document.getElementById("cheap");
    if (fast.checked ) {
        if (cheap.checked)
            good.checked = false;
    }
    document.getElementById("good").checked = good.checked;
}
function goodFastCheap3() {
    let good = document.getElementById("good");
    let fast = document.getElementById("fast");
    let cheap = document.getElementById("cheap");

    if (cheap.checked ) {
        if (good.checked) {
            fast.checked = false;
        }
    }
    document.getElementById("fast").checked = fast.checked;
}