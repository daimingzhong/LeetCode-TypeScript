function selectionSort(items: number[]) {
    const len = items.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (items[j] < items[min]) {
                min = j;
            }
        }
        if (i !== min) {
            swap(items, i, min);
        }
    }
    return items;
}

function swap(items: number[], i: number, j: number) {
    const tmp = items[j];
    items[j] = items[i];
    items[i] = tmp;
}

console.log(selectionSort([1, 5, 3, 7]));
