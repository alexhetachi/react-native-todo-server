const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');


router.post('/', (req,res) => {
    const {id} = req.body;
    console.log("server response")
    Todo.find({userid:id})
        // .sort({ date: -1 })
        .then(todos => {
            // console.log(reviews)
            res.json(todos)
        })

})

module.exports = router;