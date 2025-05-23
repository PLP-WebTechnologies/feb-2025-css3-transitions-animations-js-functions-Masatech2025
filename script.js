document.getElementById('toggleButton').addEventListener('click', () => {
    const onImage = document.getElementById('On');
    const offImage = document.getElementById('Off');

    // Toggle visibility
    if (onImage.style.display === 'none') {
        onImage.style.display = 'block';
        offImage.style.display = 'none';
    } else {
        onImage.style.display = 'none';
        offImage.style.display = 'block';
    }
});

function saveColorPreference() {
    const color = document.getElementById("colorSelect").value;
    localStorage.setItem("bgColor", color);
    document.body.style.backgroundColor = color;
}
window.onload = () => {
    const color =  localStorage.getItem("bgColor");
    if (color) {
    document.body.style.backgroundColor = color;
    document.getElementById("ColorSelect").value = color;
    }
}

function animatebutton() {
    const btn = document.getElementbyId("animateBtn");
    btn.classList.add("bouncing");
    setTimeout(() => btn.classList.remove("bouncing"), 500);
}