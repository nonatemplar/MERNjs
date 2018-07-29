import express from 'express';

import { verifyToken } from '../../auth/middlewares/verifyToken.js';
import { getAllMeasureCategory, addMeasureCategory, getMeasureCategory } from '../controllers/index.js';

const measureCategoryRoutes = express.Router();

measureCategoryRoutes.route('/')
  .get(getAllMeasureCategory)
  .post(verifyToken, addMeasureCategory);

  measureCategoryRoutes.route('/:_id')
  .get(getMeasureCategory);

export default measureCategoryRoutes;
