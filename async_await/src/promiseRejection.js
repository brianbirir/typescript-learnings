// Propagation of Rejection
new Promise(function (res, rej) {
    res(true);
})
    .then(function (res) {
    console.log(fake);
    return false;
})
    .then(function (res) {
    console.log(res);
    return true;
})
    .then(function (res) {
    console.log(res);
})["catch"](function (error) {
    console.log('ERROR:', error.message);
});
