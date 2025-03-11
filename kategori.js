document.addEventListener("DOMContentLoaded", function () {
    const kategoriDropdown = document.getElementById("category-filter");
    const articlesContainer = document.getElementById("articles-container");

    const urlParams = new URLSearchParams(window.location.search);
    const selectedCategory = urlParams.get("kategori") || "All";

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
        },
        {
            title: "Genji Monogatari",
            category: "Sastra Jepang",
            image: "image/GenjiMonogatari.webp",
            description: "Karya klasik Murasaki Shikibu yang dianggap sebagai novel pertama di dunia."
        },
        {
            title: "The Tale of Heike",
            category: "Sastra Jepang",
            image: "image/TheTaleofHeike.webp",
            description: "Kisah epik samurai Jepang yang mengisahkan pertarungan klan Taira dan Minamoto."
        },
        {
            title: "Hamlet",
            category: "Sastra Inggris",
            image: "image/Hamlet.webp",
            description: "Drama tragedi William Shakespeare tentang balas dendam dan eksistensi manusia."
        },
        {
            title: "Don Quixote",
            category: "Sastra Inggris",
            image: "image/DonQuixote.jpg",
            description: "Novel satir Miguel de Cervantes tentang seorang pria yang menganggap dirinya ksatria."
        },
        {
            title: "Divine Comedy",
            category: "Sastra Inggris",
            image: "image/DivineComedy.webp",
            description: "Karya Dante Alighieri yang menggambarkan perjalanan melalui Neraka, Api Penyucian, dan Surga."
        },
        {
            title: "Laskar Pelangi",
            category: "Sastra Indonesia",
            image: "image/LaskarPelangi.webp",
            description: "Novel inspiratif Andrea Hirata tentang perjuangan anak-anak Belitung mendapatkan pendidikan."
        }
    ];

    kategoriDropdown.value = selectedCategory;

    kategoriDropdown.addEventListener("change", function () {
        window.location.href = `kategori.html?kategori=${kategoriDropdown.value}`;
    });

    function filterArtikel() {
        articlesContainer.innerHTML = "";

        const filteredArticles = selectedCategory === "All" ? articles : articles.filter(article => article.category === selectedCategory);

        filteredArticles.forEach(article => {
            const articleElement = document.createElement("div");
            articleElement.classList.add("article");
            articleElement.innerHTML = `
                <img src="${article.image}" alt="${article.title}">
                <h2>${article.title}</h2>
                <p>${article.description}</p>
                <a href="#">Baca Selengkapnya</a>
            `;
            articlesContainer.appendChild(articleElement);
        });
    }

    filterArtikel();
});
