class Storage {
    addFilmToStorage(newFilm) {
        let films = this.getFilms();
        films.push(newFilm);
        localStorage.setItem("films", JSON.stringify(films));
    }
    getFilms() {
        let films ;
        if(!localStorage.getItem("films")) {
            films = [];
        }
        else {
            films = JSON.parse(localStorage.getItem("films"));
        }
        return films;
    }
    eraseFilmFromStorage(filmTitle) {
        const myFilms = this.getFilms();
        myFilms.forEach((film, index) => {
            if(film.title === filmTitle) {
                myFilms.splice(index, 1);
            }
        });
        localStorage.setItem("films", JSON.stringify(myFilms));
    }
    
    eraseAllFilmsFromStorage() {
        localStorage.setItem("films", JSON.stringify([]));
    }
}