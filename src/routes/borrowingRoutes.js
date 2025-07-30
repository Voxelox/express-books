import { Router } from 'express';
import { body, param } from 'express-validator';
import { handleCreateBorrowing, handleReturnBorrowing } from '../controllers/borrowingController.js';

const router = Router();

router.post('/',
    [
        body('book_id').notEmpty().isUUID().withMessage('book_id is required.'),
        body('member_id').notEmpty().isUUID().withMessage('member_id is required.')
    ], handleCreateBorrowing
);

router.put('/:id/return', param('id').notEmpty().isUUID(), handleReturnBorrowing);

export default router;