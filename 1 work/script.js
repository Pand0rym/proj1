let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
let personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {},
    genres: [],
    private: false
};

let firstAnswer1 = prompt("Один из последних просмотренных фильмов?", "");
let firstAnswer2 = prompt("Один из последних просмотренных фильмов?", "");
let secondAnswer1 = prompt("На сколько оцените его?", "");
let secondAnswer2 = prompt("На сколько оцените его?", "");


personalMovieDB.movies[firstAnswer1] = secondAnswer1;
personalMovieDB.movies[firstAnswer2] = secondAnswer2;

console.log(personalMovieDB);