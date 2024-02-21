import { Sequelize } from "sequelize";
import db from "../config/database.js";

const Company = db.define('ms_company', {
    company_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    company_name: {
        type: Sequelize.STRING
    },
    company_telp: {
        type: Sequelize.STRING
    },
    company_address: {
        type: Sequelize.STRING
    }
}, 
{ freezeTableName: true });

export default Company;

(async () => {
    await Company.sync();
})();