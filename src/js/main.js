"use strict";

import moment from 'moment';

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))
 

const focusInput = document.querySelector('.form__paragraph--js');
const save = document.querySelector('.saveButton--js');
const load = document.querySelector('.loadButton--js');

save.addEventListener('click', focusInput.value = localStorage.getItem('focuInput'));
load.addEventListener('click', );


focusInput.addEventListener('keyup', (e) => {
    localStorage.setItem('focusInput', e.target.value)
})