import { validationResult } from 'express-validator';
import { createBorrowing, returnBorrowing, getBorrowingHistory } from '../services/borrowingService.js';

export async function handleCreateBorrowing(req, res) {
    const validation = validationResult(req);
    if (validation.isEmpty()) {
        try {
            const borrow = await createBorrowing(req.body);
            return res.status(201).json(borrow);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    res.send({ error: validation.array() });
}

export async function handleReturnBorrowing(req, res) {
    const validation = validationResult(req);
    if (validation.isEmpty()) {
        try {
            const borrow = await returnBorrowing(req.params);
            return res.status(201).json(borrow)
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    res.send({ error: validation.array() });
}

export async function handleGetBorrowingHistory(req, res) {
    const validation = validationResult(req);
    if (validation.isEmpty()) {
        try {
            const borrow = await getBorrowingHistory({ id: req.params.id, ...req.body });
            return res.status(201).json(borrow);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    res.send({ error: validation.array() });
}