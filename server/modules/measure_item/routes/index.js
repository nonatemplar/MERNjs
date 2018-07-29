import express from 'express';

import { verifyToken } from '../../auth/middlewares/verifyToken.js';
import { getAllMeasureItem, addMeasureItem, getMeasureItem } from '../controllers/index.js';

const measureItemRoutes = express.Router();

measureItemRoutes.route('/')
  .get(getAllMeasureItem)
  .post(verifyToken, addMeasureItem);

  measureItemRoutes.route('/:_id')
  .get(getMeasureItem);

export default measureItemRoutes;
