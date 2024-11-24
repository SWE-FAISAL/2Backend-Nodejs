import express from 'express';
import {uploadImage, downloadImage} from '../controllers/imageContr.js';


const router = express.Router();

router.post('/upload', uploadImage);
router.get('/file/:fileId', downloadImage);

export default router