import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Company from "./CompanyModel.js";

const { DataTypes } = Sequelize;

const Employee2 = db.define('ms_employee2', {
    employee_name: DataTypes.STRING,
    employee_gender: DataTypes.INTEGER,
    employee_birthday: DataTypes.DATE,
    employee_phone: DataTypes.STRING,
    employee_picture: DataTypes.STRING,
},
{
    freezeTableName: true
});

Employee2.belongsTo(Company, { foreignKey: 'company_id' });

export default Employee2;

(async () => {
    await Employee2.sync();
})();

