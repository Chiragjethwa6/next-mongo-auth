import mongoose from "mongoose";

export async function connect(){
    try{
        mongoose.connect(process.env.MONGO_URI!);
        const connecion = mongoose.connection;

        connecion.on('connected', () => {
            console.log("MongoDB connected successfully");
        })

        connecion.on('error', (err) =>{
            console.log("database cconnection error", err);
            process.exit();
        })
    }catch(error){
        console.log("Something went wrong");
        console.log(error);
    }
}