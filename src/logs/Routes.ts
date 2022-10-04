import * as express from 'express';
import { getList } from './LogController';

export const logRoutes = express.Router();
logRoutes.get('/list', getList)
