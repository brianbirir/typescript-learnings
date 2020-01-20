// an async function returns a promise
const gilad = async () => {
    return 'Gilad';
};

// RETURNS undefined

// async function gilad() {
// }
// gilad().then(value => {
//   console.log(value);
// });


// RESULT: Promise { 'Gilad' }
console.log(gilad());