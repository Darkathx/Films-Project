class UI {
    addFilmToUI(film) {
        const filmList = document.getElementById("Films");
        filmList.innerHTML += `
        <tr>
            <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
            <td>${film.title}</td>
            <td>${film.director}</td>
            <td><a href="#" id="delete-film" class = "btn btn-danger">Erase</td>
        </tr>
        `;
    }
    clearInputs(el1, el2, el3) {
        el1.value = "";
        el2.value = "";
        el3.value = "";
    }
    displayMessages(message, type) {
        const formBody = document.querySelector("#form-body");
        const div = document.createElement("div");
        div.className = `alert alert-${type}`;
        div.textContent = message;
        formBody.appendChild(div);
        setTimeout(() => div.remove(), 1000);
    }
    loadAllFilms(films) {
        const filmList = document.getElementById("Films");
        films.forEach((film) => {
            filmList.innerHTML += `
            <tr>
            <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
            <td>${film.title}</td>
            <td>${film.director}</td>
            <td><a href="#" id="delete-film" class = "btn btn-danger">Erase</td>
        </tr>
            `
        });
    }
    eraseFilmFromUI(link) {
        link.parentElement.parentElement.remove();
    }
}