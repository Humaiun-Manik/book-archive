const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const bookContainer = document.getElementById('book-container');

searchBtn.addEventListener('click', function () {
    const search = searchInput.value;
    // load data
    const url = `https://openlibrary.org/search.json?q=${search}`;
    fetch(url)
        .then(res => res.json())
        .then((data) => {
            // show search result
            const totalResult = data.docs.length;
            document.getElementById('search-result').innerText = totalResult;
            // display search books
            (data.docs).forEach((items) => {
                const div = document.createElement('div');
                div.classList.add('col');
                div.innerHTML = `
                <div class="card h-100">
                    <img src="https://covers.openlibrary.org/b/id/${items.cover_i}-M.jpg" class="card-img-top img-fluid" style="height: 300px;" alt="...">
                    <div class="card-body">
                        <h3 class="card-title" style="color:#067b80;">${items.title}</h3>
                        <h5 class="card-title" style="color:#eb5e46;">By ${items.author_name}</h5>
                        <h5 class="card-text">First Published: ${items.first_publish_year}</h5>
                        <h5 class="card-text">Publisher: ${items.publisher}</h5>
                    </div>
                </div>
                `
                bookContainer.appendChild(div);
            });
        });
});