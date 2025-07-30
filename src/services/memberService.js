import { Member } from '../models/member.js';

export async function createMember({ name, email, phone, address}) {
    const member = await Member.findOne({ where: { email } });
    if (!member) {
        return await Member.create({ name, email, phone, address });
    } else {
        throw new Error('Email is already used.');
    }
}