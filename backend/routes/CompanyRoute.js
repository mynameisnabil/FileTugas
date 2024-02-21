import express from "express";
import { 
    getCompanies, 
    getCompanyById,
    createCompany,
    updateCompany,
    deleteCompany
} from "../controller/CompanyController.js";

const router  = express.Router();

router.get('/companies', getCompanies);
router.get('/companies/:company_id', getCompanyById);
router.post('/companies', createCompany);
router.patch('/companies/:company_id', updateCompany);
router.delete('/companies/:company_id', deleteCompany);


export default router;