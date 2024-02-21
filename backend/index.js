import express, { application } from 'express';
import cors from 'cors';
import CompanyRoute from './routes/CompanyRoute.js';
import EmployeeRoute from './routes/EmployeeRoute.js';
import EmployeeRoute2 from './routes/EmployeeRoute2.js';
import multer from 'multer';
import path from 'path';



const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use(CompanyRoute, EmployeeRoute, EmployeeRoute2);


// Route untuk upload image dulu
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('employeePicture'), (req, res) => {
    res.send({
        status: 'success',
        message: 'Image uploaded',
        data: {
            name: req.file.filename,
            path: `/images/${req.file.filename}`
        }
    });
});


app.listen(3000, () => console.log('Server up and running'));