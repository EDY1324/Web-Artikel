const articles = [
    { 
        title: "The Old Capital", 
        category: "Sastra Jepang", 
        image: "image/TheOldCapital.webp", 
        description: "Novel karya Yasunari Kawabata yang mengeksplorasi kehidupan di Kyoto."
    },
    { 
        title: "Sonnet 18", 
        category: "Sastra Inggris", 
        image: "image/Sonnet18.webp", 
        description: "Puisi terkenal William Shakespeare yang membahas keindahan dan keabadian."
    },
    { 
        title: "Tetralogi Bumi Manusia", 
        category: "Sastra Indonesia", 
        image: "image/BumiManusiadanJejakLangkah.webp", 
        description: "Karya Pramoedya Ananta Toer yang menggambarkan perjuangan masyarakat kolonial."
    }
];

document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("articles-container");
    const filterSelect = document.getElementById("category-filter");

    function renderArticles(category) {
        container.innerHTML = "";
        const filteredArticles = category === "All" ? articles : articles.filter(article => article.category === category);
        
        filteredArticles.forEach(article => {
            const articleElement = document.createElement("article");
            articleElement.innerHTML = `
                <img src="${article.image}" alt="${article.title}">
                <h3>${article.title}</h3>
                <p>${article.description}</p>
                <a href="#">Baca Selengkapnya</a>
            `;
            container.appendChild(articleElement);
        });
    }

    filterSelect.addEventListener("change", function () {
        renderArticles(filterSelect.value);
    });

    renderArticles("All");
});
