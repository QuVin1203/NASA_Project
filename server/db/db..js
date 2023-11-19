const mongoose=require('mongoose')

async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/nasa_project',{
            useNewUrlParser:true,
            useUnifieTopology:true,
         })
        console.log('successfully')

        

        
    }catch(erorr){
        console.log('error')

    }

}

module.exports={connect}