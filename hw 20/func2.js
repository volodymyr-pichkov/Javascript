function evenFn(n) {
    const result = [];
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0 && i !== 0) {
            result.push(i);
        }
    }
    return result;
}
console.log(evenFn(10)); // [2, 4, 6, 8, 10]
console.log(evenFn(15)); // [2, 4, 6, 8, 10, 12, 14]
console.log(evenFn(20)); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]