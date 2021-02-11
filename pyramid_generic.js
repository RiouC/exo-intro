let symbol = '*';

for (let i = 1; i <= 8; i++) {
    console.log(symbol.repeat(i) + ' '.repeat(16 - i * 2) + symbol.repeat(i));
}
