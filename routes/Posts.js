const {Router} = require('express') 
const {createPost, getPosts, getPost, editPost, deletePost , getPostCate} = require('../controllers/C_posts')
const router = Router() 

router.post('/' , createPost) 
router.get('/', getPosts) 
router.get('/:id', getPost) 

router.get('/:categoryId', getPostCate) 
router.put('/:id', editPost) 
router.delete('/:id', deletePost) 

module.exports = router ; 