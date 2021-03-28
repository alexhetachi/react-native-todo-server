const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');


router.post('/', (req,res) => {
    const id = req.body
    console.log(id)
    Todo.findByIdAndRemove(id)
        // .sort({ date: -1 })
        .then(
            console.log('removed')
            // res.json(todos)
        )

})

module.exports = router;