document.addEventListener("DOMContentLoaded", async function () {
    const articlesContainer = document.getElementById("articles-container");

    async function fetchArticles() {
        try {
            const response = await fetch("https://public-api.wordpress.com/wp/v2/sites/kazlibraries.wordpress.com/posts");
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Terjadi kesalahan:", error);
            return [];
        }
    }

    async function loadArticles() {
        const articles = await fetchArticles();
        articlesContainer.innerHTML = "";

        articles.forEach(article => {
            const articleElement = document.createElement("article");
            articleElement.classList.add("article");
            articleElement.innerHTML = `
                <img src="${article.jetpack_featured_media_url || 'image/default.jpg'}" alt="${article.title.rendered}">
                <h3>${article.title.rendered}</h3>
                <p>${article.excerpt.rendered.replace(/<[^>]*>?/gm, '')}</p>
                <a href="${article.link}" target="_blank">Baca Selengkapnya</a>
            `;
            articlesContainer.appendChild(articleElement);
        });
    }

    loadArticles();
});
