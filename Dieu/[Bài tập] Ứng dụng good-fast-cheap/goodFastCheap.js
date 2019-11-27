
function goodFastCheap(id) {
    let good = document.getElementById("good");
    let fast = document.getElementById("fast");
    let cheap = document.getElementById("cheap");
    switch (id) {
        case "good":
            if (good.checked ) {
                if (fast.checked) {
                    cheap.checked = false;
                }
            }
        case "fast":
            if (fast.checked ) {
                if (cheap.checked)
                    good.checked = false;
            }
        case "cheap":
            if (cheap.checked ) {
                if (good.checked) {
                    fast.checked = false;
                }
            }
    }
    document.getElementById("cheap").checked = cheap.checked;
    document.getElementById("good").checked = good.checked;
    document.getElementById("fast").checked = fast.checked;
}