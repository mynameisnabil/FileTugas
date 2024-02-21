import Company from "../models/CompanyModel.js";

export const getCompanies = async (req, res) => {
    try {
        const companies = await Company.findAll();
        res.status(200).json(companies);
    } catch (error) {
        console.log(error);
    }
}


export const getCompanyById = async (req, res) => {
    try {
        const companies = await Company.findOne({
            where: {
                company_id : req.params.company_id
        }
        });
        res.status(200).json(companies);
    } catch (error) {
        console.log(error);
    }
}

export const createCompany = async (req, res) => {
    try {
       await Company.create(req.body);
       res.status(201).json({message: "Company created"});
    } catch (error) {
        console.log(error);
    }
}

export const updateCompany = async (req, res) => {
    try {
       await Company.update(req.body, {
              where: {
                company_id: req.params.company_id
              }
         });
         res.status(200).json({message: "Company updated"});
    } catch (error) {
        console.log(error);
    }

}


export const deleteCompany = async (req, res) => {
    try {
       await Company.destroy({
              where: {
                company_id: req.params.company_id
              }
         });
         res.status(200).json({message: "Company deleted"});
    } catch (error) {
        console.log(error);
    }
    
}
