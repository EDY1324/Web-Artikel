document.addEventListener("DOMContentLoaded", async function () {
    const kategoriDropdown = document.getElementById("category-filter");
    const articlesContainer = document.getElementById("articles-container");

    const urlParams = new URLSearchParams(window.location.search);
    const selectedCategory = urlParams.get("kategori") || "All";

    kategoriDropdown.value = selectedCategory;

    function getCategoryId(categoryName) {
        const categoryMap = {
            "Sastra Jepang": 9964647,
            "Sastra Inggris": 7192835,
            "Sastra Indonesia": 525379
        };
        return categoryMap[categoryName] || null;
    }

    kategoriDropdown.addEventListener("change", function () {
        window.location.href = `kategori.html?kategori=${kategoriDropdown.value}`;
    });

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

    async function filterArtikel() {
        articlesContainer.innerHTML = "";

        const articles = await fetchArticles();

        const filteredArticles = selectedCategory === "All"
            ? articles
            : articles.filter(article => article.categories.includes(getCategoryId(selectedCategory)));

        filteredArticles.forEach(article => {
            const articleElement = document.createElement("div");
            articleElement.classList.add("article");

            articleElement.innerHTML = `
                <img src="${article.jetpack_featured_media_url || 'default.jpg'}" alt="${article.title.rendered}">
                <h2>${article.title.rendered}</h2>
                <a href="${article.link}" target="_blank">Baca Selengkapnya</a>
            `;
            articlesContainer.appendChild(articleElement);
        });
    }

    filterArtikel();
});
