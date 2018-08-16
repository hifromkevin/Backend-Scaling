const mongoose = require('mongoose');
const db = require('../db/db.js');

const dbAddress = process.env.DB_ADDRESS || 'localhost';
mongoose.connect(`mongodb://${dbAddress}/weGotData`);

const allRestaurantData = require('../fake-data/fakedata-test.json');
var timerStart = Date.now();

const seedDb = (data) => {
    db.count().then((counts) => {
        if (counts === 0) {
            const overviewInfo = data.map((item) => (
                {
                    _id: item.id,
                    id: item.id,
                    name: item.name,
                    tagline: item.tagline,
                    type: 'Restaurant',
                    vicinity: item.vicinity,
                    priceLevel: item.priceLevel,
                    zagatFood: item.zagatFood,
                    zagatDecor: item.zagatDecor,
                    zagatService: item.zagatService,
                    longDescription: item.longDescription
                }
            ));
            db.insertMany(overviewInfo, (...i) => {
                console.log('i', i);
                console.log('done seeding!');
                console.log('Your database time is: ' + ((Date.now() - timerStart) / 1000) + ' seconds');
                mongoose.disconnect();
            });
        } else {
            console.log('already seeded!');
            console.log('Your database time is: ' + ((Date.now() - timerStart) / 1000) + ' seconds');
            mongoose.disconnect();
        }
    }).catch((err) => {
        console.log('catch error', err);
        console.log('Your database time is: ' + ((Date.now() - timerStart) / 1000) + ' seconds');
    });
};

seedDb(allRestaurantData);
