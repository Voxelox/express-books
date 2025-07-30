import { validationResult } from 'express-validator';
import { createMember } from '../services/memberService.js';

export async function handleCreateMember(req, res) {
    const validation = validationResult(req);
    if (validation.isEmpty()) {
        try {
            const member = await createMember(req.body);
            return res.status(201).json(member);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    res.send({ error: validation.array() });
};