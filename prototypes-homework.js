const Movie = function(title, director, yearOfRelease){
    this.title = title;
    this.director = director;
    this.yearOfRelease = yearOfRelease;
}

Movie.prototype.getSummary = function(){
    return `"${this.title}" is a ${this.yearOfRelease} film directed by ${this.director}`
}

//Movie instance
const pulpFiction = new Movie("Pulp Fiction", "Quentin Tarantino", 1994);
console.log(pulpFiction.getSummary());


const Horror = function (title, yearOfRelease, horrorType){
    Movie.call(this, title, yearOfRelease, horrorType);
    this.horrorType = horrorType;
}
Object.setPrototypeOf(Horror.prototype, Movie.prototype)

//Horror movie instance
const it = new Horror("It", 2017, "supernatural horror")
console.log(it.horrorType);
console.log(it.getSummary())

const Romance = function (title, yearOfRelease, theme){
    Movie.call(this, title, yearOfRelease, theme);
    this.theme = theme;
}

Object.setPrototypeOf(Romance.prototype, Movie.prototype)

//instances of Romance movies
const pilgrim = new Romance("Scott Pilgrim vs. the World", 2010, "love at first sight");
const joeBlack = new Romance("Meet Joe Black", 1998, "forbidden love");
console.log(pilgrim.theme);
console.log(pilgrim.getSummary())
console.log(`The theme of the "${joeBlack.title}" movie is ${joeBlack.theme}`)

