//This is a simple multiplier made using closures in Javascript.
function makeMultiplier (multiplier) {
    return (
        function (x) {
            return multiplier * x;
        }
    );
}

var doubleAll = makeMultiplier(2); // The number that will be multiplied to whatever is inserted in the console.
console.log(doubleAll(10));