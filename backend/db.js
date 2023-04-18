const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const mongoDB = async () => {
    mongoose.connect('mongodb://127.0.0.1:27017/gofood', () => {
        console.log("connected");
        const fetched_data = mongoose.connection.db.collection("food_item"); // Accessing to the food data array
        fetched_data.find({}).toArray(async function (err, data) { // finding data inside array
            const foodcategory = await mongoose.connection.db.collection("foodCategory"); // making anothe object for food category
            foodcategory.find({}).toArray(function (err, catData) {
                if (err)
                    console.log(err);
                else {
                    global.food_items = data;
                    global.foodCategory = catData;
                }
            });
        });
    });
}
module.exports = mongoDB