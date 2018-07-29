import express from 'express';

import { verifyToken } from '../../auth/middlewares/verifyToken.js';
import { getAllAppUser, addAppUser, getAppUser } from '../controllers/index.js';

const appUserRoutes = express.Router();

appUserRoutes.route('/')
  .get(getAllAppUser)
  .post(verifyToken, addAppUser);

appUserRoutes.route('/:_id')
  .get(getAppUser);

export default appUserRoutes;
