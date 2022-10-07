const input = document.querySelector("#input");
const output = document.querySelector("#output");

input.addEventListener("change", () => {
    console.log(diamond(input.value));
    return diamond(input.value);
});

function diamond(rows) {
    output.innerHTML = `&nbsp;`.repeat(rows * 3) + `*<br>`;
    for (let i = 1; i < rows; i++) {
        output.innerHTML +=
            `&nbsp;`.repeat((rows - i) * 3) +
            `*` +
            `&nbsp;`.repeat((i * 2 - 1) * 3) +
            ` *<br>`;
        if (i == rows - 1) {
            for (let j = 1; j < i; j++) {
                output.innerHTML +=
                    `&nbsp;`.repeat((j + 1) * 3) +
                    "*" +
                    `&nbsp;`.repeat(((rows - j) * 2 - 3) * 3) +
                    ` *<br>`;
            }
            output.innerHTML += `&nbsp;`.repeat(rows * 3) + "*";
        }
    }
    return output.innerHTML;
}
