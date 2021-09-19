const searchField = document.getElementById('search-field');
const searchBtn = document.getElementById('search-btn');
const bookContainer = document.getElementById('book-container');
const errorDiv = document.getElementById('error');
const searchResult = document.getElementById('search-result');

searchBtn.addEventListener('click', () => {
    const searchText = searchField.value;
    // clear data
    searchField.value = '';
    bookContainer.textContent = '';
    searchResult.textContent = '';
    errorDiv.textContent = '';
    // error handling
    if (searchText === '') {
        errorDiv.innerHTML = `<h3 class="text-success text-center">Search field can't be empty.</h3>`;
        searchResult.textContent = '';
    } else {
        // load data
        const url = `https://openlibrary.org/search.json?q=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displayBooks(data.docs))
    }
});
// display search results
const displayBooks = books => {
    const filterBooks = books.filter(book => book.cover_i !== undefined && book.title !== undefined && book.author_name !== undefined && book.publisher !== undefined);
    if (filterBooks.length === 0) {
        searchResult.innerText = "No Results Found";
    } else {
        searchResult.innerText = `You have found about ${filterBooks.length} result.`;
        filterBooks.slice(0, 20).forEach((book) => {
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
                <div class="card h-100">
                    <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top img-fluid" style="height: 300px;" alt="...">
                    <div class="card-body">
                        <h3 class="card-title" style="color:#067b80;">${book.title}</h3>
                        <h5 class="card-title" style="color:#eb5e46;">By ${book.author_name}</h5>
                        <h5 class="card-text">First Published: ${book.first_publish_year}</h5>
                        <h5 class="card-text">Publisher: ${book.publisher[0]}</h5>
                    </div>
                </div>
                `
            bookContainer.appendChild(div);
        });
    }
}