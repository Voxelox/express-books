import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import { Book } from './book.js';
import { Member } from './member.js';

export const Borrowing = sequelize.define('Borrowing', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    book_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Book,
            key: 'id'
        }
    },
    member_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Member,
            key: 'id'
        }
    },
    borrow_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    return_date: {
        type: DataTypes.DATE
    },
    status: {
        type: DataTypes.ENUM('BORROWED', 'RETURNED'),
        defaultValue: 'BORROWED'
    }
}, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

Borrowing.belongsTo(Book, { foreignKey: 'book_id' });
Book.hasMany(Borrowing, { foreignKey: 'book_id' });

Borrowing.belongsTo(Member, { foreignKey: 'member_id' });
Member.hasMany(Borrowing, { foreignKey: 'member_id' });

(async () => {
    await sequelize.sync({ force: true });
});
