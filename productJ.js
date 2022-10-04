const cofeeBtn = document.querySelector('.cofeeBtn');
const wineBtn = document.querySelector('.wineBtn');
const cigaBtn = document.querySelector('.cigaBtn');
const allBtn = document.querySelector('.allBtn');

let cigaretProduct = document.querySelectorAll('#c');
let cofeeProduct = document.querySelectorAll('#g');
let wineProduct = document.querySelectorAll('#w');

function addDelete(Product) {Product.classList.add('delete')};
function removeDelete(Product) {Product.classList.remove('delete')};
// ceep all products ):
allBtn.addEventListener('click',() => {
    cofeeProduct.forEach((copro) => {removeDelete(copro)});
    cofeeProduct.forEach((cpro) => {removeDelete(cpro)});
    wineProduct.forEach((wpro) => {removeDelete(wpro)});
});

// ceep cofee products ):
cofeeBtn.addEventListener('click',() => {
    cofeeProduct.forEach((copro) => {removeDelete(copro)});
    cigaretProduct.forEach((cpro) => {addDelete(cpro)});
    wineProduct.forEach((wpro) => {addDelete(wpro)});
});
// ceep wine products ):
wineBtn.addEventListener('click', () => {
    wineProduct.forEach((wpro) => {removeDelete(wpro)});
    cigaretProduct.forEach((cpro) => {addDelete(cpro)});
    cofeeProduct.forEach((copro) => {addDelete(copro)});
});
// ceep ciggaret products ):
cigaBtn.addEventListener('click', () => {
    cigaretProduct.forEach((cpro) => {removeDelete(cpro)});
    wineProduct.forEach((wpro) => {addDelete(wpro)});
    cofeeProduct.forEach((copro) => {addDelete(copro)});
});

// go to form page after click to buy now btn ):
const allbtnBuynow = document.querySelectorAll('.contentP button');

allbtnBuynow.forEach(btn => {
    btn.addEventListener('click',() => {
        window.location = 'formH.html';
    }); 
});

// spinner ):
window.onload = setTimeout(dan , 3500);

function dan(){
    const spinner = document.querySelector('.lds-spinner');
    spinner.classList.add('dan')
};




