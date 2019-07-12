"use strict";

import moment from 'moment';

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))
 

const focusInput = document.querySelector('.form__paragraph--js');
const save = document.querySelector('.saveButton--js');
const load = document.querySelector('.loadButton--js');

//nie wiem czy ta funkcja powinna być przed czy po buttonach

/*focusInput.addEventListener('keyup', (e) => {
    localStorage.setItem('focusInput', e.target.value)
})

save.addEventListener('click', focusInput.value = localStorage.setItem('focuInput'));
load.addEventListener('click', focusInput.value = localStorage.getItem('focusInput') );
*/
save.addEventListener('click', () => {
    localStorage.setItem('input', inputForm.value);
  });
  
  load.addEventListener('click', () => {
    inputForm.value = localStorage.getItem('input');
  });

