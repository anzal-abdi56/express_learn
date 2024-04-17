const express = require("express")
const Item = require("../models/items.model")
const router = express.Router();

// POST ITEMS
router.post("/",async(req,res)=>{
    try {
        const items = await Item.create(req.body)
        res.status(200).json(items)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

// GET ALL ITEMS
router.get("/",async(req,res)=>{
    try {
        const items = await Item.find({})
        res.status(200).json(items)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

// GET A SINGLE ITEM
router.get("/:id",async(req,res)=>{
    try {
        const {id} = req.params;
        const item = await Item.findById(id)
        res.status(200).json(item)
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

// UPDATE A SINGLE ITEM
router.put("/:id",async(req,res)=>{
    try {
        const {id} = req.params;
        const item = await Item.findByIdAndUpdate(id,req.body)

        if(!item){
            return res.status(404).json({message:"Item not found"})
        }
        const updatedItem = await Item.findById(id)
        res.status(200).json(updatedItem)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

// DELETE A SINGLE ITEM
router.delete("/:id",async(req,res)=>{
    try {
        const {id} = req.params
        const item = await Item.findByIdAndDelete(id,req.body)

        if(!item){
            return res.status(404).json({message:"Item not found"})
        }
        res.status(200).json({message:"Item deleted successfully"})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

module.exports = router