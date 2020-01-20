// Propagation of Rejection

new Promise((res, rej) => {
  res(true);
})
  .then(res => {
    console.log(res);
    return false;
  })
  .then(res => {
    console.log(res);
    return true;
  })
    .then(res => {
    console.log(res);
  })
  .catch(error => {
    console.log('ERROR:', error.message);
});