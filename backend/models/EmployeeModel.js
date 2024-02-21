import { DataTypes, Sequelize } from "sequelize"; 
import db from "../config/database.js";
import Company from "./CompanyModel.js"; // Import model Company

const Employee = db.define('ms_employee', {
    employee_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    employee_name: {
        type: Sequelize.STRING
    },
    employee_gender: {
        type: Sequelize.INTEGER
    },
    employee_birthday: {
        type: Sequelize.DATE
    },
    employee_picture: {
        type: Sequelize.STRING
    },
    employee_phone: {
        type: Sequelize.STRING
    }
    
},
{ freezeTableName: true });

// Definisi relasi antara Employee dan Company
Employee.belongsTo(Company, { foreignKey: 'company_id' });

export default Employee;

(async () => {
    await Employee.sync();
})();
