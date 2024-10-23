import express from 'express';
import { createHistory, getHistories, getHistoryById, updateHistory, deleteHistory } from '../controllers/historyController.js';

const router = express.Router();

router.post('/historial', createHistory);
router.get('/historial', getHistories);
router.get('/historial/:id', getHistoryById);
router.put('/historial/:id', updateHistory);
router.delete('/historial/:id', deleteHistory);

export default router;
