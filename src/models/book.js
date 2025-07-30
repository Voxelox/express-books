import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

export const Book = sequelize.define('Book', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    published_year: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    isbn: {
        type: DataTypes.STRING(13),
        unique: true,
        allowNull: false
    }
}, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

(async () => {
    await sequelize.sync({ force: true });
});
