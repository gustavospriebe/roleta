const form = document.querySelector("form");
const div = document.querySelector(".resultado");

function random(min, max) {
    const r = Math.floor(Math.random() * (max - min) + min);
    return r;
}

function roleta(evt) {
    evt.preventDefault();
    const numeroInput = Number(form.querySelector("#numero").value);
    const min = 1;
    const max = 50;
    let number = random(min, max);
    let count = 0;

    if (isNaN(numeroInput) == true) {
        div.innerHTML = `<p class="error">Digite apenas números.</p>`;
    } else {
        if (numeroInput < min || numeroInput > max) {
            div.innerHTML = `<p class="error">Digite um número entre 1 e 50.</p>`;
        } else {
            while (number != numeroInput) {
                number = random(min, max);
                count++;
            }
            div.innerHTML = `<p>Foram roletadas ${count} vezes até chegar no número ${numeroInput}!</p>`;
        }
    }

    form.reset();
}

form.addEventListener("submit", roleta);
