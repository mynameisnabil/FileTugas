import express from 'express';
import { 
    getEmployees, 
    getEmployeeByIdCompany,
    getEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee
} from '../controller/EmployeeController.js';

import multer from 'multer';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/image');
    },
    filename: (req, file, cb) => {
        cb(null, file.filename + Date.now() + '_' + file.originalname);
    }
});
const upload = multer({storage: storage});

const router  = express.Router();

router.get('/employees', getEmployees);
router.get('/employees/company/:company_id', getEmployeeByIdCompany);
router.get('/employees/:employee_id', getEmployeeById);
router.post('/employees', upload.single('employee_picture'),createEmployee);
router.patch('/employees/:employee_id', updateEmployee);
router.delete('/employees/:employee_id', deleteEmployee);

export default router;
