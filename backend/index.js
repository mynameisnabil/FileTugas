import express, { application } from 'express';
import cors from 'cors';
import CompanyRoute from './routes/CompanyRoute.js';
import EmployeeRoute from './routes/EmployeeRoute.js';
import EmployeeRoute2 from './routes/EmployeeRoute2.js';


const app = express();
app.use(cors());
app.use(express.json());
app.use(CompanyRoute, EmployeeRoute, EmployeeRoute2);

app.listen(3000,()=> console.log('Server up and running'));