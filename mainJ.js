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
// header tow links ):
const gotoproduct = document.querySelector('.gotoproduct');
const gotologin = document.querySelector('.gotologin');
const gotoform = document.querySelector('.gotoform');

gotoproduct.addEventListener('click',() => {
    window.location = 'productH.html'
});
gotologin.addEventListener('click',() => {
    window.location = 'logH.html'
});
gotoform.addEventListener('click',() => {
    window.location = 'formH.html'
});

const goOneparttoUp = document.querySelector('.goOneparttoUp');
const goOneparttoDown = document.querySelector('.goOneparttoDown');
 
let up = 0;
let dwon = 0;  
goOneparttoDown.addEventListener('click',() => {    
    dwon == 4 && (window.location = '#contactus',dwon = 5,up = 5);
    dwon == 3 && (window.location = '#discount',dwon = 4,up = 4);
    dwon == 2 && (window.location = '#comment',dwon = 3,up = 3);
    dwon == 1 && (window.location = '#menu',dwon = 2,up = 2);
    dwon == 0 && (window.location = '#aboute',dwon = 1,up = 1);
});
goOneparttoUp.addEventListener('click',() => {    
    up == 1 && (window.location = '#home',dwon = 0,up = 0);
    up == 2 && (window.location = '#aboute',dwon = 1,up = 1);
    up == 3 && (window.location = '#menu',dwon = 2,up = 2);
    up == 4 && (window.location = '#comment',dwon = 3,up = 3);
    up == 5 && (window.location = '#discount',dwon = 4,up = 4);
});
// footer links ):
const gotoproduct2 = document.querySelector('.gotoproduct2');
const gotologin2 = document.querySelector('.gotologin2');
const gotoform2 = document.querySelector('.gotoform2');

gotoproduct2.addEventListener('click',() => {
    window.location = 'productH.html'
});
gotologin2.addEventListener('click',() => {
    window.location = 'logH.html'
});
gotoform2.addEventListener('click',() => {
    window.location = 'formH.html'
});
// spinner ):
window.onload = setTimeout(dan , 3500);

function dan(){
    const spinner = document.querySelector('.lds-spinner');
    spinner.classList.add('dan')
}
// aboote more ):
const gotoaboutemore = document.querySelector('.gotoaboutemore');

gotoaboutemore.addEventListener('click',() => {window.location = 'abouteH.html'})
// go to form for discount container ):
const gotoform3 = document.querySelector('.gotoform3');
gotoform3.addEventListener('click',() => {window.location = 'formH.html'});
// go to product page after click to btn menu container ):
const gotoproduct3 = document.querySelector('.gotoproduct3');
gotoproduct3.addEventListener('click',() => {
    window.location = 'productH.html'
});
