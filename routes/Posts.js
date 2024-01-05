const {Router} = require('express') 
const M_Comment = require("../models/M_comment")
const {createPost, getPosts, getPost, editPost, deletePost , getPostCate} = require('../controllers/C_posts')
const router = Router() 

router.post('/' , createPost) 
router.get('/', getPosts) 
router.get('/:id', getPost) 

router.get('/:categoryId', getPostCate) 
router.put('/:id', editPost) 
router.delete('/:id', deletePost) 

router.post('/:postId/comments', async (req, res) => {
  try {
    const { name, email, message , website , userId } = req.body;
    const postId = req.params.postId;
    const  newComment = await M_Comment.create({website, name, email, message, postId , userId })

    res.status(201).json(newComment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put('/:postId/comments', async (req, res) => {
  try {
    const { name, email, message , website , userId } = req.body;
    const postId = req.params.postId;

    const  newComment = await M_Comment.findOneAndUpdate({_id : postId} ,{website, name, email, message , userId } ,{ new: true, upsert: true })
    console.log(postId)
    console.log(newComment)
    res.status(201).json(newComment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/:postId/comments', async (req, res) => {
  try {
    const postId = req.params.postId
    const  newComment = await M_Comment.find({postId})

    res.status(201).json(newComment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:postId/comments', async (req, res) => {
  try {
    const postId = req.params.postId
    const  newComment = await M_Comment.findByIdAndDelete(postId)

    res.status(201).json(newComment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router ; 