function add(prev, next) { return prev + next }
function isNotInRange(array, index) { return index <= 0 || index >= array.length }
function arrayTooShort(array) { return array.length === 1 }

function isBalanced(array, index) {
    if (array.length === 0) { return true }
    if (isNotInRange(array, index) || arrayTooShort(array)) {
        return false;
    }
    const halfOne = array.slice(0, index);
    const halfTwo = array.slice(index, array.length);
    return halfOne.reduce(add) === halfTwo.reduce(add);
}


console.log(isBalanced([1, 2, 2, 1, 3, 2, 1, 0], 4))

console.log(isBalanced([1, 2, 0, 3], 2))