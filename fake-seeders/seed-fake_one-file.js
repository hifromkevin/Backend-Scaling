const fs = require('fs');
const faker = require('faker');
const file = fs.createWriteStream('./fake-data/fake-data_th.json');

let timerStart = Date.now();

file.write('[');
for(let i=0; i<= 10000000; i++) {
    file.write(
        ' {\n' + 
    '   "id": ' + i + ',\n' + 
    '   "name": "' + faker.company.companyName() + '",\n' + 
    '   "tagline": "' + faker.company.catchPhrase() + '",\n' + 
    '   "type": "Restaurant",\n' + 
    '   "vicinity": "' + faker.address.streetAddress() + ', ' + faker.address.city() + '",\n' + 
    '   "priceLevel": "' + '$$' + '",\n' + 
    '   "zagatFood": ' + Math.floor(Math.random() * 10) + ',\n' + 
    '   "zagatDecor": ' + Math.floor(Math.random() * 10) + ',\n' + 
    '   "zagatService": ' + Math.floor(Math.random() * 10) + ',\n' + 
    '   "longDescription": "' + faker.lorem.paragraph() + '"\n' + 
    ' }'
    );
    if (i < 10000000) {
        file.write(', \n');
    }
}
file.write(']');

console.log('Your time is: ' + ((Date.now() - timerStart) / 1000) + ' seconds');
file.end();
