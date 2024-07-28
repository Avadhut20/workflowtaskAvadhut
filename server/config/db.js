const mongoose = require('mongoose')

const connectDb= async()=>{
    try{
        await mongoose.connect('mongodb+srv://avadhutkul60:quLC14qzNfjxKHfW@cluster0.f0ivqme.mongodb.net/',{
            useNewUrlParser: true,
        useUnifiedTopology: true,
        })
        console.log('mongo db connected');
    }
    catch(error){
        console.log(error.message);
    }
}
module.exports={connectDb};