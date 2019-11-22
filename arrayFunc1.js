
function add(prev, next) { return prev + next }
function isNotInRange(array, i) { return i <= 0 || i >= array.length }
function arrayTooShort(array) { return array.length === 1 }

function isBalanced(index) {
    return array => {
        if(array.length === 0) { return true }
        if (isNotInRange(array, index) || arrayTooShort(array)) {
            return false;
        }
        const halfOne = array.slice(0, index);
        const halfTwo = array.slice(index, array.length);
        return halfOne.reduce(add) === halfTwo.reduce(add);
    }
}

const isBalanced4 = isBalanced(4);
console.log(isBalanced4([1, 2, 2, 1, 3, 2, 1, 0]))

const isBalanced2 = isBalanced(2);
console.log(isBalanced2([1, 2, 0, 3]))