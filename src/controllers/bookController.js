import { validationResult } from 'express-validator';
import { getAllBooks } from '../services/bookService.js';

export async function handleGetAllBooks(req, res) {
    const validation = validationResult(req);
    if (validation.isEmpty()) {
        try {
            const book = await getAllBooks(req.body);
            return res.status(201).json(book);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    res.send({ error: validation.array() });
}