const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const mongoDB=async() =>{
    mongoose.connect('mongodb://127.0.0.1:27017/gofood', () => {
        console.log("connected");
        const fetched_data = mongoose.connection.db.collection("food_item");
        fetched_data.find({}).toArray(function (err, data) {
            if (err)
                console.log(err);
            else {
                console.log();
            }
        });
    });
}
module.exports = mongoDB