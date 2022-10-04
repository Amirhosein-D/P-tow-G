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
// menu slider ):
const imgM1 = document.querySelector(".menu .rightM .container .imageBox .imgM1");
const imgM2 = document.querySelector(".menu .rightM .container .imageBox .imgM2");
const imgM3 = document.querySelector(".menu .rightM .container .imageBox .imgM3");
const imgM4 = document.querySelector(".menu .rightM .container .imageBox .imgM4");
const imgM5 = document.querySelector(".menu .rightM .container .imageBox .imgM5");
const imgM6 = document.querySelector(".menu .rightM .container .imageBox .imgM6");

window.addEventListener('load',() => {imgM1.classList.add('showIM') , startSMenu()})
function startSMenu() {setTimeout(changeSMenu,6000)}
function pop() {
    imgM6.classList.remove('showIM');
    imgM1.classList.add('showIM');
    startSMenu()
};
function changeSMenu() {
    imgM5.classList.contains('showIM') && (imgM5.classList.remove('showIM'),imgM6.classList.add('showIM'),setTimeout(pop,6000));
    imgM4.classList.contains('showIM') && (imgM4.classList.remove('showIM'),imgM5.classList.add('showIM'),startSMenu());
    imgM3.classList.contains('showIM') && (imgM3.classList.remove('showIM'),imgM4.classList.add('showIM'),startSMenu());
    imgM2.classList.contains('showIM') && (imgM2.classList.remove('showIM'),imgM3.classList.add('showIM'),startSMenu()); 
    imgM1.classList.contains('showIM') && (imgM1.classList.remove('showIM'),imgM2.classList.add('showIM'),startSMenu());   
};