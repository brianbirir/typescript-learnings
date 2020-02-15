// Object
var points1 = { x: 10, y: 20 };
var x = points1.x;
var points2 = {};
points2 = { x: 10, y: 20 };
var points3 = { x: 1 };
var rectangle = {
    h: 10,
    w: 20,
    calcArea: function () {
        return this.h * this.w;
    }
};
console.log('Area of rectangle is: ' + rectangle.calcArea());
var squareIt = function (rect) {
    return (rect.w === undefined) ? rect.h & rect.h : rect.h * rect.w;
};
var sq1 = squareIt({ h: 10 });
console.log('Square value is: ' + sq1);
