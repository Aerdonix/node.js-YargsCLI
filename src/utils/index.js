const movieArr = [];

class Movie {
    constructor (title, actor="Not Specified", starRating="Not Specified", releaseYear="Not Specified") {
        this.title = title;
        this.actor = actor;
        this.starRating = starRating;
        this.releaseYear = releaseYear;
    }
    add () {
        movieArr.push(this);
        console.table(movieArr);
    }
};

module.exports = Movie;