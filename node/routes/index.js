import express from 'express'
const router = express.Router()
import { getAllItems, getItemById, createItem } from '../controllers'

router.get('/items', getAllItems);
router.get('/items/:id', getItemById);
router.post('/item', createItem);


export default router;