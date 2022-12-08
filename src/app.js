const yargs = require('yargs');
const Movie = require('./utils/index');

const input = yargs.argv;

function app (entertainment) {
    if(entertainment.add){
        const newMovie = new Movie(entertainment.title, entertainment.actor, entertainment.starRating, entertainment.releaseYear)
        newMovie.add();
} else if (entertainment.addMulti) {
        const newMovie1 = new Movie(entertainment.title1, entertainment.actor1, entertainment.starRating1, entertainment.releaseYear1)
        newMovie1.add();
        const newMovie2 = new Movie(entertainment.title2, entertainment.actor2, entertainment.starRating2, entertainment.releaseYear2)
        newMovie2.add();
        const newMovie3 = new Movie(entertainment.title3, entertainment.actor3, entertainment.starRating3, entertainment.releaseYear3)
        newMovie3.add();
    }
};

app(input);
