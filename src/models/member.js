import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

export const Member = sequelize.define('Member', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    phone: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    address: {
        type: DataTypes.TEXT,
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
