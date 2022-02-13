"use strict";

const numberOfFilms = prompt('How many films have you seen?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastfilm = prompt('Last film what have you seen?', ''),
      filmsrating = prompt('Rating of last film?', '');

personalMovieDB.movies[lastfilm] = filmsrating;

console.log(personalMovieDB);



// document.write(answer);11

// const user = 'Dima';

// alert(`Hi, ${user}!`);
