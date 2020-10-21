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

//details dropdown

var detailsMenu = document.querySelector('.details');
var detailsButton = document.querySelector('#detailbutton');

function showDetailsdiv() {
    console.log(showDetailsdiv);
    detailsMenu.classList.toggle('showDetails');

    var plusMinSign = document.querySelector("#plusmin");
    plusMinSign.textContent = " - ";

}
detailsButton.addEventListener('click', showDetailsdiv);


//responsive searchbalk laten komen

var searchButton = document.querySelector('.searchglassWhite');
var searchBalk = document.querySelector('.searchBalk2');
var blackWhite = document.querySelector('header');


function showSearchbalk() {
    console.log(showSearchbalk);
    searchBalk.classList.toggle('toonSearch');
    searchButton.classList.toggle('toonSearchglass');

    blackWhite.classList.toggle('moveheader');

}


searchButton.addEventListener('click', showSearchbalk);
