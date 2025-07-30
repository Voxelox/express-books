import { Op } from 'sequelize';
import { Book } from '../models/book.js';

export async function getAllBooks({ title, author, page, limit } = {}) {
    const pageInt = parseInt(page) || 1;
    const limitInt = parseInt(limit) || 10;
    const offset = (pageInt - 1) * limitInt;

    const { count, rows } = await Book.findAndCountAll({
        where: {
            title: {
                [Op.iLike]: `${title ?? ''}%`
            },
            author: {
                [Op.iLike]: `${author ?? ''}%`
            }
        },
        offset,
        limit: limitInt
    });

    const data = rows.map((book) => ({
        id: book.id,
        title: book.title,
        author: book.author,
        published_year: book.published_year,
        stock: book.stock,
        isbn: book.isbn,
        available: book.stock > 0 ? true : false
    }));

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
