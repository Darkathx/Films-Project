const form = document.querySelector(".form");
const titleElement = document.querySelector("#film-name");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#photo-link");
const filmBody = document.getElementById("Films");
const eraseAll = document.querySelector("#eraseAll");

const ui = new UI();
const storage = new Storage();
eventListeners();

function eventListeners() {
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", () => {
        let films = storage.getFilms();
        ui.loadAllFilms(films);
    });
    filmBody.addEventListener("click", eraseFilm);
    eraseAll.addEventListener("click", eraseAllFilms);
}
function addFilm(e) {

    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    const newFilm = new Film(title, director, url);
    ui.addFilmToUI(newFilm);
    ui.clearInputs(titleElement, directorElement, urlElement);
    ui.displayMessages("Film added successfully.", "success");
    storage.addFilmToStorage(newFilm);

    e.preventDefault();
}

function eraseFilm(e) {
    if(e.target.id === "delete-film") {
        ui.eraseFilmFromUI(e.target);
        storage.eraseFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        ui.displayMessages("Film Erased!", "success");
    }
}

function eraseAllFilms(e) {
    ui.eraseAllFilmsFromUI();
    storage.eraseAllFilmsFromStorage();
}