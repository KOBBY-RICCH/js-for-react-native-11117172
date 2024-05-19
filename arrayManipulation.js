function processArray(arr) {
    return arr.map(num => {
        if (num % 2 === 0) {
            return num * num; // Square the even numbers
        } else {
            return num * 3;   // Triple the odd numbers
        }
    });
}