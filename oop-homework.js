class Movie {
    constructor(title, director, yearOfRelease){
        this.title = title;
        this.director = director;
        this.yearOfRelease = yearOfRelease;
    }
    getSummary(){
        return `"${this.title}" is a ${this.yearOfRelease} film directed by ${this.director}`
    }
}

//Movie instances
const pulpFiction = new Movie("Pulp Fiction", "Quentin Tarantino", 1994);
const ageOfUltron = new Movie("Age of Ultron", "Joss Whedon", 2015);
console.log(pulpFiction.getSummary());
console.log(`${ageOfUltron.title} was released in ${ageOfUltron.yearOfRelease}`);

class Horror extends Movie {
    constructor(title, director, yearOfRelease, horrorType){
        super(title, director, yearOfRelease);
        this.horrorType = horrorType;
    }
}

//instances of Horror movies
const it = new Horror("It", "Andy Muschietti", 2017, "supernatural horror")
const sinister = new Horror("Sinister", "Scott Derrickson", 2012, "paranormal horror")
console.log(it.horrorType);
console.log(`"${sinister.title}" is a ${sinister.horrorType} movie`)

class Romance extends Movie {
    constructor(title, director, yearOfRelease, theme){
        super(title, director, yearOfRelease);
        this.theme = theme;
    }
}

//instances of Romance movies
const pilgrim = new Romance("Scott Pilgrim vs. the World", "Edgar Wright", 2010, "love at first sight");
const joeBlack = new Romance("Meet Joe Black", "Martin Brest", 1998, "forbidden love");
console.log(pilgrim.theme);
console.log(`The theme of the "${joeBlack.title}" movie is ${joeBlack.theme}`)
