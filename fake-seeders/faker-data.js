const mongoose = require('mongoose');
// const jsonfile = require('jsonfile');
const fs = require('fs');
const faker = require('faker');

let timerStart = Date.now();

let ratingsFaker = function(ratingId) {
    const fakerRating = {
        _id: ratingId,
        id: ratingId,
        name: faker.company.companyName(),
        tagline: faker.company.catchPhrase(),
        type: "Restaurant",
        vicinity: faker.address.streetAddress() + ', ' + faker.address.city(),
        priceLevel: '$$',
        zagatFood: Math.floor(Math.random() * 10),
        zagatDecor: Math.floor(Math.random() * 10),
        zagatService: Math.floor(Math.random() * 10),
        longDescription: faker.lorem.paragraph()
    };

    return JSON.stringify(fakerRating);
};
var stream = fs.createWriteStream('./fake-data/ten-milli.json');

let isReady = true;
isReady = stream.write('[');
let writeFilesForRatings = (n = 1e7) => { //1e7

    while (n > -1 && isReady) {
        if (n === 0) {
            isReady = stream.write(ratingsFaker(n));
            isReady = stream.write(']');
            console.log('Your time is: ' + ((Date.now() - timerStart) / 1000) + ' seconds');
        } else {
            isReady = stream.write(`${ratingsFaker(n)},\n`);
        }
        n -= 1;
    } 
    stream.once('drain', () => {
        isReady = stream.write('');
        writeFilesForRatings(n);
    });
    console.log('draining at n =', n);
};
writeFilesForRatings();
