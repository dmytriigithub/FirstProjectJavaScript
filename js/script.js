"use strict";

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('How many films have you seen?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many films have you seen?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const lastfilm = prompt('Last film what have you seen?', ''),
                  filmsrating = prompt('Rating of last film?', '');
            if (lastfilm != null && filmsrating != null && lastfilm != '' && filmsrating != '' && 
            lastfilm.length < 50 && filmsrating.length < 50) {
                personalMovieDB.movies[lastfilm] = filmsrating;
                console.log('have done');
            }else {
                console.log('error');
                i--;
            }
        }    
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('To little films');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Classic fun');
        } else if (personalMovieDB.count > 30) {
            console.log('Kinoman');
        } else {
            console.log('Error');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {personalMovieDB.privat = true;
        }
    },
    writeYouGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let gerne = (prompt(`Your favourite genres is on number ${i}`));

            if (gerne === '' || gerne == null) {
                console.log('Uncorect data');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = gerne;
            }

            personalMovieDB.genres.forEach((item, i) => {
                console.log(`Favourite genre ${i + i} - is ${item}`);
            });
        }
    }
};
