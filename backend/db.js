const mongoose = require("mongoose")
const mongoURI = "mongodb://YumFood:anupambandi@ac-dxkzuix-shard-00-00.kme7pee.mongodb.net:27017,ac-dxkzuix-shard-00-01.kme7pee.mongodb.net:27017,ac-dxkzuix-shard-00-02.kme7pee.mongodb.net:27017/YumFoodmern?ssl=true&replicaSet=atlas-ibwmpz-shard-0&authSource=admin&retryWrites=true&w=majority"

const mongoDB = async () => {


    await mongoose.connect(mongoURI, { useNewUrlParser: true });

    try {
        const fetchedData = await mongoose.connection.db.collection('food_items');
        const data = await fetchedData.find({}).toArray();

        const foodCategory = await mongoose.connection.db.collection("foodCategory");
        const catData = await foodCategory.find({}).toArray();

        global.food_items = data;
        global.foodCategory = catData;

        console.log('Data fetched successfully');
    } catch (err) {
        console.error('Error fetching data:', err);
    }

    //  global.food_items=data;
    //     console.log()

    //   } catch (err) {
    //     console.log(err);
    //   }



}


module.exports = mongoDB