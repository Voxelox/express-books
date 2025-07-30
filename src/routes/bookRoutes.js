import { Router } from 'express';
import { body } from 'express-validator';
import { handleGetAllBooks } from '../controllers/bookController.js';

const router = Router();

router.get('',
    [
        body('title').isString().optional(),
        body('author').isString().optional(),
        body('page').isInt().optional(),
        body('limit').isInt().optional()
    ], handleGetAllBooks
);

export default router;