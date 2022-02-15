"use strict";

const numberOfFilms = +prompt('How many films have you seen?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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

if (personalMovieDB.count < 10) {
    console.log('To little films');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Classic fun');
} else if (personalMovieDB.count > 30) {
    console.log('Kinoman');
} else {
    console.log('Error');
}

console.log(personalMovieDB);








