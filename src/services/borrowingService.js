import sequelize from '../config/database.js';
import { Book } from '../models/book.js';
import { Member } from '../models/member.js';
import { Borrowing } from '../models/borrowing.js';

export async function createBorrowing({ book_id, member_id }) {
    const book = await Book.findByPk(book_id);
    const member = await Member.findByPk(member_id);
    const borrowed = await Borrowing.findAll({ where: { member_id } });

    if (!book || !member) throw new Error('Book or member not found.');

    if (book.stock === 0) throw new Error('Book is not available');

    if (borrowed.length > 3) throw new Error('Already borrow 3 books.');

    return await Book.decrement('stock', { where: { id: book_id }, by: 1 });
}

export async function returnBorrowing({ id }) {
    const borrow = await Borrowing.findByPk(id);

    if (!borrow) throw new Error('Borrowing ID not found.');

    return await sequelize.transaction(async (t) => {
        const borrowed = await borrow.update({ status: 'RETURNED' });
        await Book.increment('stock', { where: { id: borrow.book_id }, by: 1 });

        return borrowed;
    });
}

export async function getBorrowingHistory({ id, status }, { page, limit } = {}) {
    const pageInt = parseInt(page) || 1;
    const limitInt = parseInt(limit) || 10;
    const offset = (pageInt - 1) * limitInt;

    const { count, rows } = await Borrowing.findAndCountAll({
        where: {
            member_id: id,
            status
        },
        include: [{
            model: Book
        }],
        offset,
        limit: limitInt
    });

    const data = JSON.stringify(rows);

    return {
        data,
        pagination: {
            total: count,
            page: pageInt,
            limit: limitInt,
            totalPages: Math.ceil(count / limitInt)
        }
    }
}