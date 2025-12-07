import mongoose from 'mongoose';
const URI = 'mongodb+srv://tatyana1990_db_user:tatyanaDB1990@cluster0.ytgvhcb.mongodb.net/?appName=Cluster0'

mongoose.connect(URI).then(()=>{
    console.log('Connected to MongoDB');
}).catch((e)=>{
    console.error(e);
});