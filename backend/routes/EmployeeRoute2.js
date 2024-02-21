import express from 'express';
import { 
    getEmployees2,
    getEmployeeByIdCompany2,
    getEmployeeById2,
    saveEmployee2,
    updateEmployee2,
    deleteEmployee2
} from '../controller/EmployeeController2.js';


const router  = express.Router();

router.get('/employees2', getEmployees2);
router.get('/employees2/company/:company_id', getEmployeeByIdCompany2);
router.get('/employees2/:id', getEmployeeById2);
router.post('/employees2', saveEmployee2)
router.patch('/employees2/:employee_id', updateEmployee2);
router.delete('/employees2/:employee_id', deleteEmployee2);

export default router;
