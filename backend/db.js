// const mongoose = require('mongoose');
// const mongoURI='mongodb+srv://Food-app:Shi12345@cluster0.rf1c9jf.mongodb.net/?retryWrites=true&w=majority'
// const mongoDB=async()=>{
//     mongoose.connect(mongoURI,{useNewUrlParser:true()},(err,result)=>{
//         if(err) console.log("---",err);
//         else{
//             console.log("Connected");
//         }
// });

// }
// module.exports=mongoDB;
//connecting database to mongodb atlas
const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://Food-app:Shi12345@cluster0.rf1c9jf.mongodb.net/Food-app-mern?retryWrites=true&w=majority';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("Connected to MongoDB");

    const foodCollection = await mongoose.connection.db.collection("food_items");
    const data = await foodCollection.find({}).toArray();
    const foodCategory = await mongoose.connection.db.collection("foodCategory");
    const catData = await foodCategory.find({}).toArray();


    if (data.length === 0) {
      console.log("No data found in 'food_items' collection.");
    } else {
      //console.log("Data retrieved from 'food_items' collection:");
      // console.log(data);
      global.food_items = data;
      global.foodCategory = catData;
      //console.log(global.food_items)
    

    }
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

module.exports = mongoDB;
