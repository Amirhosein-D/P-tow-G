const Bnext1 = document.querySelector('.Bnext1');

const Bpreve1 = document.querySelector('.Bpreve1');
const Bnext2 = document.querySelector('.Bnext2');

const Bpreve2 = document.querySelector('.Bpreve2');
const Bnext3 = document.querySelector('.Bnext3');

const Bpreve3 = document.querySelector('.Bpreve3');
const Bsend = document.querySelector('.Bsend');

const partOne = document.querySelector('.partOne');
const partTow = document.querySelector('.partTow');
const partThree = document.querySelector('.partThree');
const partFor = document.querySelector('.partFor');

Bnext1.addEventListener('click',() => {
    let userInput = document.getElementById('username').value;
    let numberInput = document.getElementById('number').value;
    if (userInput.length < 7 || userInput == "") {
        alert('{{{ username must be more than 8 length long }}}')
    } 
    if (numberInput == "" || numberInput.length < 3 || numberInput.length > 15) {
        alert('{{{ your number is null }}}')
    }
    if (userInput.length > 7 && userInput !== "" && numberInput !== "" && numberInput.length > 3 && numberInput.length < 15) {
        partOne.classList.add('delete');
        partTow.classList.add('show');
    } 
});
Bpreve1.addEventListener('click',() => {
    partOne.classList.remove('delete');
    partTow.classList.remove('show');
});

Bnext2.addEventListener('click',() => {
    let order = document.getElementById('order').value;
    let numberorder = document.getElementById('numberorder').value;
    order == "" && alert('{{{ what do you want ? }}}');
    numberorder == "" && alert('{{{ how meny order do you want ? }}}');
    if(address !== "" && numberorder !== "") {
        partTow.classList.remove('show');
        partThree.classList.add('show');
    }
});

Bpreve2.addEventListener('click',() => {
    partTow.classList.add('show');
    partThree.classList.remove('show');
});

Bnext3.addEventListener('click',() => {
    let address = document.getElementById('address').value;
    address == "" && alert('{{{ address is null }}}');
    if(address !== "") {
        partThree.classList.remove('show');
        partFor.classList.add('show');
    }   
});

Bpreve3.addEventListener('click',() => {
    partThree.classList.add('show');
    partFor.classList.remove('show');
});

Bsend.addEventListener('click',() => {
    let comment = document.getElementById('comment').value;
    comment == "" && alert('{{{ wher is your cooment? }}}');
    comment !== "" && alert(' send order (: ')
});

// spinner ):
window.onload = setTimeout(dan , 3500);

function dan(){
    const spinner = document.querySelector('.lds-spinner');
    spinner.classList.add('dan')
}
