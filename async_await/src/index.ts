// const start = callback => {
//     setTimeout(() => {
//         callback('Hello');
//         setTimeout(() => {
//             callback('And Welcome');
//             setTimeout(() => {
//                 callback('To Async Await Using Typescript');
//             }, 1000);
//         }, 1000);
//     }, 1000);
// };

// start(text => console.log(text));

// refactor to async/await
const wait = (ms) => new Promise(res => setTimeout(res, ms));

const startAsync = async callbackAsync => {
    await wait(1000);
    callbackAsync('Hello');
    await wait(1000);
    callbackAsync('And Welcome');
    await wait(1000);
    callbackAsync('To Async Await Using Typescript');
};

startAsync(text => console.log(text));