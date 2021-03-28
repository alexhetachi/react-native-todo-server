const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');


router.get('/', (req,res) => {
    console.log("server response")
    Todo.find()
        // .sort({ date: -1 })
        .then(todos => {
            // console.log(reviews)
            res.json(todos)
        })

})

module.exports = router;