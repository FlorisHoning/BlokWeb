// JavaScript Document
/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/
"use strict";

//header dropdown

var hamburgerMenu = document.querySelector('#icon');
var dropdownMenu = document.querySelector('.dropdown');

hamburgerMenu.addEventListener('click', showDropdown);

function showDropdown() {
    console.log(showDropdown);
    dropdownMenu.classList.toggle('show');

}
