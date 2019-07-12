"use strict";

import moment from 'moment';

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))
 

const focusInput = document.querySelector('.form__paragraph--js');
const save = document.querySelector('.saveButton--js');
const load = document.querySelector('.loadButton--js');

//nie wiem czy ta funkcja powinna być przed czy po buttonach

focusInput.addEventListener('input', (e) => {
    localStorage.setItem('focusInput', e.target.value)
})

save.addEventListener('click', (e) => {localStorage.setItem('focusInput', e.target.value)});
load.addEventListener('click', (e) => {localStorage.getItem('focusInput', e.target.value)});





/*
load.addEventListener('click', (e) => {
    focusInput.value = localStorage.getItem('input');
  });
save.addEventListener('click', (e) => {
    localStorage.setItem('input', focusInput.value);
  });
  
  

