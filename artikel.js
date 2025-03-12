document.addEventListener("DOMContentLoaded", () => {
    const articlesContainer = document.getElementById("articles");
    const searchInput = document.getElementById("search");

    const API_URL = "https://public-api.wordpress.com/wp/v2/sites/kazlibraries.wordpress.com/posts";

    async function fetchArticles() {
        try {
            const response = await fetch(API_URL);
            const articles = await response.json();

            articlesContainer.innerHTML = "";

            articles.forEach(article => {
                const articleElement = document.createElement("article");
                const title = article.title.rendered;
                const link = article.link;
                const excerpt = article.excerpt.rendered;
                const image = article.jetpack_featured_media_url ? article.jetpack_featured_media_url : "image/default.jpg";

                articleElement.innerHTML = `
                    <img src="${image}" alt="${title}">
                    <h3>${title}</h3>
                    <p>${excerpt.replace(/(<([^>]+)>)/gi, "")}</p>
                    <a href="${link}" target="_blank">Baca Selengkapnya</a>
                `;
                articlesContainer.appendChild(articleElement);
            });
        } catch (error) {
            console.error("Gagal mengambil artikel:", error);
            articlesContainer.innerHTML = "<p>Gagal memuat artikel.</p>";
        }
    }

    searchInput.addEventListener("keyup", function () {
        const searchTerm = searchInput.value.toLowerCase();
        const articles = document.querySelectorAll("#articles article");

        articles.forEach(article => {
            const title = article.querySelector("h3").innerText.toLowerCase();
            if (title.includes(searchTerm)) {
                article.style.display = "block";
            } else {
                article.style.display = "none";
            }
        });
    });

    fetchArticles();
});
