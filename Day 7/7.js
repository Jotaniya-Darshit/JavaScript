let rows = 4;
let a = 1;

for (let i = rows; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        document.write(`${a++} `)
    }
    document.write(`<br>`);
}