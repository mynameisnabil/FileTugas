import Employee2 from "../models/EmployeeModel2.js";
import path from "path";
import fs from "fs";

export const getEmployees2 = async (req, res) => {
    try {
        const employees = await Employee2.findAll();
        res.status(200).json(employees);
    } catch (error) {
        console.log(error);
    }

}

export const getEmployeeByIdCompany2 = async (req, res) => {

}

export const getEmployeeById2 = async (req, res) => {
    try {
        const response = await Employee2.findOne({
            where: {
                id: req.params.id
        }
        });
        res.json(response);
    } catch (error) {
        console.log(error);
    }

}

export const saveEmployee2 = (req, res) => {
    // debug agar bisa melihat apa saja yang dikirimkan oleh client
    if(req.files === null) return res.status(400).json({msg: "No File Uploaded"});
    const name = req.body.employee_name;
    const phone = req.body.employee_phone;
    const birthday = req.body.employee_birthday;
    const gender = req.body.employee_gender;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/image/${fileName}`;
    const allowedType = ['.png','.jpg','.jpeg'];

    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
    if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});
    
    file.mv(`./public/image/${fileName}`, async(err)=>{
        if(err) return res.status(500).json({msg: err.message});
        try {
            await Employee2.create({employee_name: name, employee_birthday: birthday, employee_phone: phone, employee_gender: gender, employee_picture: fileName, url: url});
            res.status(201).json({msg: "Employee Created Successfuly"});
        } catch (error) {
            console.log(error.message);
        }
    })

}


export const updateEmployee2 = async (req, res) => {

}

export const deleteEmployee2 = async (req, res) => {

}


