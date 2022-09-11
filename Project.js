const form = document.querySelector(".form");
const titleElement = document.querySelector("#film-name");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#photo-link");

const ui = new UI();
eventListeners();

function eventListeners() {
    form.addEventListener("submit", addFilm);
}
function addFilm(e) {

    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    const newFilm = new Film(title, director, url);
    ui.addFilmToUI(newFilm);
    ui.clearInputs(titleElement, directorElement, urlElement);

    e.preventDefault();
}