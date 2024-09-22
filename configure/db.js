const mongoose = require('mongoose')

const connectDb = async() =>{
    try {
        const connection = await mongoose.connect(process.env.uri)
        console.log(`database connected successfully....!!!${connection.connection.host}`)

    } catch (error) {
      console.log("something went wrong")  
    }
}


module.exports  = connectDb