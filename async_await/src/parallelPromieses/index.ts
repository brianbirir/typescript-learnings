import {getHero} from './hero';
const handles = [
'superman',
'batman',
'flash'
];

async function serialExecution() {
    for (const handle of handles) {
        const item = await getHero(handle);
        console.log(`
        Serial execution:
            Name: ${item.name}
            Alias: ${item.alias}
        `);
    }
}

serialExecution();

async function parallelExecution() {
    const all = handles.map(getHero); // map all Promises to get an array of Promises
    const combine = Promise.all(all); // combine and run promises in parallel
    const details = await combine;
    for (const item of details) {
        console.log(`
        Parallel execution:
            Name: ${item.name}
            Alias: ${item.alias}
        `);
    }
}

parallelExecution();

async function raceExecution() {
    const all = handles.map(getHero); // map all Promises to get an array of Promises
    const resolvedPromise = Promise.race(all); // get first Promise that resolves or rejects
    const item = await resolvedPromise;
    console.log(`
        Race execution:
        Name: ${item.name}
        Alias: ${item.alias}
    `);
}

raceExecution();