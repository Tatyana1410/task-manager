import mongoose from 'mongoose';

const taskSchema = mongoose.Schema({
    description:{
        type:String,
        require:true,
    },
    comleted:{
        type:Boolean,
        default:false,
    },
    createBy:{
        type: mongoose.Schema.Types.ObjectId, //автомат генерирует  id
        ref:'User',
    }
});

const User = mongoose.model('Task', taskSchema);

export default User;