import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.DATABASE_DB, process.env.DATABASE_USERNAME, process.env.DATABASE_PASSWORD, {
    host: process.env.DATABASE_HOST,
    dialect: 'postgres',
    port: 5432,
    logging: false
});

export default sequelize;