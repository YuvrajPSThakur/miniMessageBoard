const express = require('express');
const router = express.Router();
const messages = require('../Messages')

router.get('/', (req, res) => {
    res.json(messages)
})

router.post('/', (req, res) => {
    const newMessage = {
        id: messages.length + 1,
        text: req.body.text,
        user: req.body.user,
        added: new Date().toLocaleString() 
    }

    if(!newMessage.text || !newMessage.user){
        return res.status(400).json({ msg: 'Please add text and user'});
    }

    messages.push(newMessage);
    res.redirect('/')
})

module.exports = router