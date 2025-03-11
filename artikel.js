function searchArticle() {
    let input = document.getElementById("search").value.toLowerCase();
    let articles = document.querySelectorAll("#articles article");
    
    articles.forEach(article => {
        let title = article.querySelector("h3").innerText.toLowerCase();
        let content = article.querySelector("p").innerText.toLowerCase();
        
        if (title.includes(input) || content.includes(input)) {
            article.style.display = "block";
        } else {
            article.style.display = "none";
        }
    });
}