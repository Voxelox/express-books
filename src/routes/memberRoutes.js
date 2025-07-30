import { Router } from 'express';
import { body, param } from 'express-validator';
import { handleCreateMember } from '../controllers/memberController.js';
import { handleGetBorrowingHistory } from '../controllers/borrowingController.js';

const router = Router();

router.post('/',
    [
        body('name').notEmpty().withMessage('name is required.'),
        body('email').notEmpty().isEmail().withMessage('email is invalid.'),
        body('phone').notEmpty().isMobilePhone().withMessage('phone is invalid.'),
        body('address').notEmpty().withMessage('address is required.')
    ], handleCreateMember
);

router.get('/:id/borrowings',
    [
        param('id').notEmpty().isUUID().withMessage('id is invalid'),
        body('status').notEmpty().isString().withMessage('status is required.'),
        body('page').isInt().withMessage('page is integer.').optional(),
        body('limit').isInt().withMessage('limit is integer.').optional()
    ], handleGetBorrowingHistory
);

export default router;