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
            (data.docs).forEach((items) => {
                console.log(items);
                document.getElementById('search-result').innerText = `${items.count}`
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

{/* <div class="card shadow p-3 mb-5 bg-body rounded">
    <img src="${`https://covers.openlibrary.org/b/id/${items.cover_i}-M.jpg`}" class="card-img-top w-100" alt="...">
    <div class ="card-body">
    <h3 class ="card-title">${items.title}</h3>
    <h5 class ="card-title">${items.author_name}</h5>
    <p class ="card-text">This is a longer card with supporting text below as a natural lead-in to
    additional content.This content is a little bit longer.</p>
    </div>
</div> */}