// const Hotel = require('../models/Hotel');
import Hotel from '../models/Hotel';

const CreateHotel = async (req,res)=>{
    const newHotel = new Hotel(req.body);
    try{
       const savedHotel= await newHotel.save();
        res.status(200).json(savedHotel);
        console.log(savedHotel);
    }catch(err){
        res.status(400).json(err);
        console.log(err);
    }
}

const UpdateHotel = async (req,res)=>{
    try{
        const hotel = await Hotel.findById(req.params.id);
        if(hotel?._id === req.body._id){
            await hotel?.updateOne({$set:req.body});
            res.status(200).json('Hotel has been updated');
        }else{
            res.status(403).json('You can update only your hotel');
        }
    }catch(err){
        res.status(500).json(err);
        console.log(err);
    }
}

const DeleteHotel = async (req,res)=>{
    try{
        const hotel = await Hotel.findById(req.params.id);
        if(hotel?._id === req.body._id){
            await hotel?.deleteOne();
            res.status(200).json('Hotel has been deleted');
        }else{
            res.status(403).json('You can delete only your hotel');
        }
    }catch(err){
        res.status(500).json(err);
        console.log(err);
    }
}

const GetHotel = async (req,res)=>{
    try{
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel);
    }catch(err){
        res.status(500).json(err);
        console.log(err);
    }
}

const GetHotels = async (req,res)=>{
    try{
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
    }catch(err){
        res.status(500).json(err);
        console.log(err);
    }
}

// module.exports = CreateHotel, UpdateHotel, DeleteHotel, GetHotel, GetHotels;
export { CreateHotel, UpdateHotel, DeleteHotel, GetHotel, GetHotels };