const one = new Promise((resolve,reject) => {
    resolve('Hello');
});

const two = one.then(value => {
    return 'Hey';
});

two.then(value => {
    console.log('Hi', value);
});
two.catch(error => {
    console.log('Oops', error);
})