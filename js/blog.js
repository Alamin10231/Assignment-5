const Blogbtn = document.getElementById('blog-btn');
if (Blogbtn) {
    Blogbtn.addEventListener('click', function() {
        window.location.href = 'blog.html'; 
    });
}
const Homebtn = document.getElementById('home-btn');
if (Homebtn) {
    Homebtn.addEventListener('click', function() {
        window.location.href = 'index.html'; 
    });
}
const backButton1 = document.getElementById('back-btn');
if (backButton1) {
    backButton1.addEventListener('click', function() {
        window.location.href = 'index.html'; 
    });
}