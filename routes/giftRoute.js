const express = require('express');
const router = express.Router();
const Gift = require('./../models/giftModel');

const gifts = []; // In a real application, this would be replaced with a database or some other persistent storage mechanism

// GET /gifts - retrieve a list of all gifts
router.get('/gifts', (req, res) => {

  res.send(gifts.map(gift => gift.toJSON()));
});

// POST /gifts - create a new gift
router.post('/gifts', (req, res) => {
  console.log(req.body);
  const newGift = new Gift(req.body.from, req.body.to, req.body.message, req.body.imageLink);
  gifts.push(newGift);
  res.send(newGift.toJSON());
});

// PUT /gifts/:id - update an existing gift
router.put('/gifts/:id', (req, res) => {
  const id = req.params.id;
  const updatedGift = new Gift(req.body.from, req.body.to, req.body.message, req.body.imageLink);
  gifts[id] = updatedGift;
  res.send(updatedGift.toJSON());
});

// DELETE /gifts/:id - delete an existing gift
router.delete('/gifts/:id', (req, res) => {
  const id = req.params.id;
  const deletedGift = gifts.splice(id, 1)[0];
  res.send(deletedGift.toJSON());
});

module.exports = router;
