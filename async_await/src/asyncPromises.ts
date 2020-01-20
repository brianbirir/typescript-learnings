const one = 'One';

const two = new Promise(resolve => resolve('Two'));

const three = new Promise((resolve, reject) => reject(new Error('Error of Three')));


async function nairobi() {
  await new Promise(resolve => setTimeout(resolve, 5000));
  console.log('Done!');
}
nairobi();

async function vader() {
  const four = await one;
  console.log({ one: four });
  const five = await two;
  console.log({ two: five });
  try {
    const six = await three;
    console.log('This will not get called at all');
  }
  catch(e) {
    console.log({ three: e.message});
  }
}
vader();
