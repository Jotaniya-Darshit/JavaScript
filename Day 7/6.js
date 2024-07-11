let rows = 4;
let a = 1;

for (let i = 0; i < rows; i++) {
    for (let j = 0; j <= i; j++) {
        document.write(`${a++} `);
    }
    document.write("<br />");
}