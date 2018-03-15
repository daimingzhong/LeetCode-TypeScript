class MissingNumber{

    public missing(array : number[]) : number {
        const n : number = array.length + 1;
        const set : Set<number> = new Set();
        for (let i : number; i < n; i++) {
            if(!set.has(array[i])) {
                set.add(array[i]);
            } else {
                return i;
            }
        }
        return n;
    }
}

function main() {
    const miss : MissingNumber = new MissingNumber();
    const res : number = miss.missing([1,2,3]);
    console.log(res);
}

main();