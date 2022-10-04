// seach box open and close ):
const searchBoxBtn = document.querySelector('.searchIcon a i');
const searchBox = document.querySelector('.searchBox')
const searchInput = document.querySelector('.searchBox input');
searchBoxBtn.addEventListener('click',() => {
    if (searchBox.classList.contains('openSearchBox')) {
        searchBox.classList.remove('openSearchBox');
        searchBoxBtn.classList = 'ri-search-line';
    }
    else {
        searchBox.classList.add('openSearchBox');
        searchInput.value = '';
        searchBoxBtn.classList = 'ri-close-line';
    };
}); 