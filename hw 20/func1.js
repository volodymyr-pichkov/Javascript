function defUpperStr(text) {
    return (text || 'DEFAULT TEXT').toUpperCase();
}

console.log(defUpperStr('My text'));
console.log(defUpperStr());