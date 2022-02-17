"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many films have you seen?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many films have you seen?', '');
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const lastfilm = prompt('Last film what have you seen?', ''),
              filmsrating = prompt('Rating of last film?', '');
        if (lastfilm != null && filmsrating != null && lastfilm != '' && filmsrating != '' && lastfilm.length < 50 && filmsrating.length < 50) {
            personalMovieDB.movies[lastfilm] = filmsrating;
            console.log('have done');
        }else {
            console.log('error');
            i--;
        }
    }    
}

rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('To little films');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Classic fun');
    } else if (personalMovieDB.count > 30) {
        console.log('Kinoman');
    } else {
        console.log('Error');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYouGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = (prompt(`Your favourite genres is on number ${i}`, ''));
    }
}

writeYouGenres();
