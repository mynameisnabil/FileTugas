import Employee from "../models/EmployeeModel.js";
import multer from "multer";


export const getEmployees = async (req, res) => {
    try {
        const employees = await Employee.findAll();
        res.status(200).json(employees);
    } catch (error) {
        console.log(error);
    }
}
export const getEmployeeByIdCompany = async (req, res) => {
    try {
        const company_id = req.params.company_id; // Mengambil company_id dari permintaan
        const employees = await Employee.findAll({
            where: {
                company_id: company_id // Menggunakan company_id untuk query
            }
        });
        res.status(200).json(employees);
    } catch (error) {
        console.log(error);
    }
};


export const getEmployeeById = async (req, res) => {
    try {
        const employees = await Employee.findOne({
            where: {
                employee_id : req.params.employee_id
        }
        });
        res.status(200).json(employees);
    } catch (error) {
        console.log(error);
    }
}


export const createEmployee = async (req, res) => {
    try {
        const { company_id, ...employeeData } = req.body; // Pisahkan company_id dari data karyawan

        // Simpan data karyawan beserta URL gambar ke basis data
        await Employee.create({
            ...employeeData,
            company_id,
        }); 

        res.status(201).json({ message: "Employee created" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
};


export const updateEmployee = async (req, res) => {
    try {
       await Employee.update(req.body, {
              where: {
                employee_id: req.params.employee_id
              }
         });
         res.status(200).json({message: "Employee updated"});
    } catch (error) {
        console.log(error);
    }

}

export const deleteEmployee = async (req, res) => {
    try {
       await Employee.destroy({
              where: {
                employee_id: req.params.employee_id
              }
         });
         res.status(200).json({message: "Employee deleted"});
    } catch (error) {
        console.log(error);
    }
    
}