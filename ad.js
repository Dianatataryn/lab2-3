closeSub();

function displaySub() {
    document.getElementById("sub").style.display = "flex";
    document.getElementById('overlay').style.display = 'block';
}

function closeSub() {
    document.getElementById("sub").style.display = "none";
    document.getElementById('overlay').style.display = 'none';
    if (!sessionStorage.getItem('sub_check')) {
        setTimeout(displaySub, 2000);
    }
}

function AcceptSub() {
    sessionStorage.setItem('sub_check', true);
    closeSub();
}

document.getElementById('sub-accept').onclick = AcceptSub;
document.getElementById('sub-decline').onclick = closeSub;
