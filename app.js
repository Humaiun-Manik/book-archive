const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const bookContainer = document.getElementById('book-container')
searchBtn.addEventListener('click', function () {
    const search = searchInput.value;
    const url = `https://openlibrary.org/search.json?q=${search}`;
    fetch(url)
        .then(res => res.json())
        .then((data) => {
            (data.docs).forEach((items) => {
                console.log(items.leangth);
                const div = document.createElement('div');
                div.classList.add('col');
                div.innerHTML = `
                <div class="card shadow p-3 mb-5 bg-body rounded">
                    <img src="${`https://covers.openlibrary.org/b/id/${items.cover_i}-M.jpg`}" class="card-img-top w-100" alt="...">
                    <div class="card-body">
                        <h3 class="card-title">${items.title}</h3>
                        <h5 class="card-title">${items.author_name}</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                    </div>
                </div>
                `
                bookContainer.appendChild(div);
            });
        });
})
// display data
