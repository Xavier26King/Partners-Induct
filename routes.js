import express from 'express';
import multer from 'multer';
import path from 'path';
import { getAllPartners, addPartners, updatePartners, deletePartners } from './controller.js';

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Directory where the files will be saved
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
  });
  
const upload = multer({ storage: storage });

router.get('/', getAllPartners);
router.post('/', upload.single('logo'), addPartners);
router.put('/:id', upload.single('logo'), updatePartners);
router.delete('/:id', deletePartners);

export default router;