//Area of a circle = PI * (radius)^2
function Circle (radius) {
    this.radius = radius;
}
Circle.prototype.getArea =
    function () {
        return Math.PI * Math.pow(this.radius, 2);
    };

var myCircle = new Circle(10);
console.log(myCircle);

// var myOtherCircle = new Circle(20);
// console.log(myOtherCircle);
