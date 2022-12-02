let numberOfFilms;
function start() {
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {},
    genres: [],
    private: false
};





function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let firstAnswer1 = prompt("Один из последних просмотренных фильмов?", "");
        let secondAnswer1 = prompt("На сколько оцените его?", "");
        
        if (firstAnswer1 != null && secondAnswer1 != null && firstAnswer1 != "" && secondAnswer1.length < 50) {
            personalMovieDB.movies[firstAnswer1] = secondAnswer1;
            console.log('done');
        } else {
            console.log("error");
            i--;
        }
    
    }
}

// rememberMyFilms();




function detectPersonLvl() {
    if (personalMovieDB.count < 10) {
        console.log("мало епт");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("not bad");
    } else if (personalMovieDB.count >= 30) {
        console.log("вы киноман");
    } else {
        console.log("error");
    }
}

detectPersonLvl();




function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);

    }

}

showMyDB(personalMovieDB.private);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр ${i}`);
    }
}

writeYourGenres();




