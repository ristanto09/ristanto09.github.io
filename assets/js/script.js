// Lottie animation for the loader
var loader = lottie.loadAnimation({
    container: document.getElementById('loader'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/img/lottie.json'  // Path to your JSON animation file
});

// Simulate page load, after which the preloader will disappear
window.onload = function () {
    setTimeout(function () {
        document.getElementById('preloader').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }, 3000);  // Adjust time for loader display
};