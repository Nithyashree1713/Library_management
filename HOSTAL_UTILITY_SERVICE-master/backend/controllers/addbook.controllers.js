import Product from "../models/addbook.models.js";
import mongoose from "mongoose";
export const createProduct=async(req,res)=>{
    const product=req.body;
    if(!product.name||!product.category||!product.image||!product.author||!product.publishedDate){
       return res.status(400).json({success:false,message:"Please provide all fields"})
    }
    const newProduct=new Product(product)
    try{
       await newProduct.save();
       res.status(201).json({success:true,data:newProduct});
    }
    catch(error){
   console.error("ERROR in Create product:",error.message);
   res.status(500).json({success:false,message:"Server Error"})
    }
   };
   export const get_book = async (req, res) => {
    try {
        const product = await Product.find();
        res.status(200).json({ success: true, data: product });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });
    }
};
export const delete_book=async(req,res)=>{
    const {id}=req.params;
    //console.log("id:",id);
    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).json({success:false,message:"Invalid book Id"});
   }
    try{
       await Product.findByIdAndDelete(id);
       res.status(200).json({success:true,message:"book deleted"});
    }
    catch(error){
 res.status(500).json({success:false,message:"Sever error"});
    }
 };
 export const update_book=async(req,res)=>{
    const {id}=req.params;
    const product=req.body;
    if(!mongoose.Types.ObjectId.isValid(id)){
       return res.status(404).json({success:false,message:"Invalid book Id"});
    }
    try{
       const updatedProduct=await Product.findByIdAndUpdate(id,product,{new:true});
       res.status(200).json({success:true,data:updatedProduct});
    }
    catch(error){
       res.status(500).json({success:false,message:"Server Error"});
    }
 
 };
 