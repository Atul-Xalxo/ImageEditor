import express from 'express'
import { getPostComments,addComment} from '../controller/comment.controller.js';
import { verifyToken } from '../middlewares/verifyTokens.js';


const router = express.Router();

router.get('/:postId',getPostComments)
router.get("/",verifyToken,addComment)

export default router;