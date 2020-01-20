var one = new Promise(function (resolve, reject) {
    resolve('Hello');
});
var two = one.then(function (value) {
    return 'Hey';
});
two.then(function (value) {
    console.log('Hi', value);
});
two["catch"](function (error) {
    console.log('Oops', error);
});
