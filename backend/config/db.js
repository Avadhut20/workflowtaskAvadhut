const mongoose = require('mongoose')

const connectDb= async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/trelloclone',{
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