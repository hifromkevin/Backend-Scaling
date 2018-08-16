const mongoose = require('mongoose');

const restaurantSchema = mongoose.Schema({
    _id: Number,
    id: Number,
    name: String,
    tagline: String,
    type: String,
    vicinity: String,
    priceLevel: String,
    zagatFood: Number,
    zagatDecor: Number,
    zagatService: Number,
    longDescription: String
});

const RestaurantModel = mongoose.model('Restaurant', restaurantSchema);

const findOneById = (id, callback) => {
  RestaurantModel.find({ id }, callback);
};

const insertMany = (restaurant, callback) => {
  RestaurantModel.insertMany(restaurant, callback);
};

const count = () => RestaurantModel.count();

exports.findOneById = findOneById;
exports.insertMany = insertMany;
exports.count = count;
