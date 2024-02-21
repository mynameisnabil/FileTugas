import { Sequelize } from "sequelize";

const db = new Sequelize('lat_coba', 'root', null,{
    host: 'localhost',
    dialect: 'mysql'
});

    export default db;