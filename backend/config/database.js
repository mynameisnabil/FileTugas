import { Sequelize } from "sequelize";

const db = new Sequelize('lat1_db', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
});

    export default db;