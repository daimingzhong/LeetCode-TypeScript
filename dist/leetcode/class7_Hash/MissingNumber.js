class MissingNumber {
    missing(array) {
        const n = array.length + 1;
        const set = new Set();
        for (let i; i < n; i++) {
            if (!set.has(array[i])) {
                set.add(array[i]);
            }
            else {
                return i;
            }
        }
        return n;
    }
}
function main() {
    const miss = new MissingNumber();
    const res = miss.missing([1, 2, 3]);
    console.log(res);
}
main();
//# sourceMappingURL=MissingNumber.js.map