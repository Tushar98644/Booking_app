// const User = require('../models/User');
import User from '../models/User';

const UpdateUser = async (req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        if(user?._id === req.body.userId){
            await user?.updateOne({$set:req.body});
            res.status(200).json('User has been updated');
        }else{
            res.status(403).json('You can update only your user');
        }
    }catch(err){
        res.status(500).json(err);
    }
}

const DeleteUser = async (req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        if(user?._id === req.body.d){
            await user?.deleteOne();
            res.status(200).json('User has been deleted');
        }else{
            res.status(403).json('You can delete only your user');
        }
    }catch(err){
        res.status(500).json(err);
    }
}

const GetUser = async (req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err);
    }
}

const GetUsers = async (req,res)=>{
    try{
        const hotels = await User.find();
        res.status(200).json(hotels);
    }catch(err){
        res.status(500).json(err);
    }
}

// module.exports =  UpdateUser, DeleteUser, GetUser, GetUsers;
export  { UpdateUser, DeleteUser, GetUser, GetUsers };