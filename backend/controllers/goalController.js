//@desc Get goals
//@route Get /api/goals
//@access Private
const asyncHandler = require('express-async-handler');
const getGoals = asyncHandler( (req,res) => {
    res.status(200).json({msg:'get goals'});
})
//
const setGoals = asyncHandler( (req,res) => {
    if(!req.body.text) {
        res.status(400);
        throw new Error('Please add a text field!')


    }
    res.status(200).json({msg:'Set goals'});
})

//
const updateGoals = asyncHandler( (req,res) => {
    res.status(200).json({msg:`Update goal ${req.params.id}`});
})
//
const deleteGoals = asyncHandler( (req,res) => {
    res.status(200).json({msg:`delete goal ${req.params.id}`});
})

module.exports ={
    getGoals,
    setGoals,
    deleteGoals,
    updateGoals,
}