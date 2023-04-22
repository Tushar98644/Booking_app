const Hotel = require('../models/Hotel');

const CreateHotel = async (req,res)=>{
    const newHotel = new Hotel(req.body);
    try{
       const savedHotel= await newHotel.save();
        res.status(200).json(savedHotel);
    }catch(err){
        res.status(400).json(err);
    }
}

const UpdateHotel = async (req,res)=>{
    try{
        const hotel = await Hotel.findById(req.params.id);
        if(hotel.userId === req.body.userId){
            await hotel.updateOne({$set:req.body});
            res.status(200).json('Hotel has been updated');
        }else{
            res.status(403).json('You can update only your hotel');
        }
    }catch(err){
        res.status(500).json(err);
    }
}

const DeleteHotel = async (req,res)=>{
    try{
        const hotel = await Hotel.findById(req.params.id);
        if(hotel.userId === req.body.userId){
            await hotel.deleteOne();
            res.status(200).json('Hotel has been deleted');
        }else{
            res.status(403).json('You can delete only your hotel');
        }
    }catch(err){
        res.status(500).json(err);
    }
}

const GetHotel = async (req,res)=>{
    try{
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel);
    }catch(err){
        res.status(500).json(err);
    }
}

const GetHotels = async (req,res)=>{
    try{
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
    }catch(err){
        res.status(500).json(err);
    }
}

module.exports = CreateHotel, UpdateHotel, DeleteHotel, GetHotel, GetHotels;