// controllers/postController.js
const { Data } = require('../models');

exports.createData = async (req, res) => {
  try {
    const { amperaje, date, userId } = req.body;

    const data = await Data.create({ amperaje, date, userId });
    res.status(201).json({ data });
  } catch (error) {
    console.error('Error creating data:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getData = async (req, res) => {
  try {
    const datas = await Data.findAll();
    res.status(200).json({ datas });
  } catch (error) {
    console.error('Error fetching datas:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
