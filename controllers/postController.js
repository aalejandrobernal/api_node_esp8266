// controllers/postController.js
const { Post } = require('../models');

exports.createPost = async (req, res) => {
  try {
    const { title, content, userId } = req.body;

    const post = await Post.create({ title, content, userId });
    res.status(201).json({ post });
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.status(200).json({ posts });
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
