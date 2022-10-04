const frog = document.querySelector('#frog');
const sign = document.querySelector('#sign');
const logn = document.querySelector('#logn');
const logn2 = document.querySelector('#logn2');
const signUp = document.querySelector('.signUp');
const logIn = document.querySelector('.logIn');
const frogPas = document.querySelector('.frogPas');

const sublog = document.querySelector('.sublog');
const subfrog = document.querySelector('.subfrog');
const subsign = document.querySelector('.subsign');

const inputloginone = document.querySelector('.inputloginone').value;
const inputlogintow = document.querySelector('.inputlogintow').value;



sign.addEventListener('click',() => {logIn.classList.add('change2'); signUp.classList.add('chang');});
frog.addEventListener('click',() => {frogPas.classList.add('chang'); logIn.classList.add('change2');});
logn2.addEventListener('click',() => {frogPas.classList.remove('chang'); logIn.classList.remove('change2');});
logn.addEventListener('click',() => {signUp.classList.remove('chang'); logIn.classList.remove('change2');});

sublog.ariaDisabled = true;
subfrog.ariaDisabled = true;
subsign.ariaDisabled = true;

// spinner ):
window.onload = setTimeout(dan , 3500);

function dan(){
    const spinner = document.querySelector('.lds-spinner');
    spinner.classList.add('dan')
}