import express from 'express';
import {
  categoryGet,
  categoryListGet,
  categoryPost,
} from '../controllers/categoryController';
import {body, param} from 'express-validator';
import {validationErrors} from '../../middlewares';

const router = express.Router();

router.route('/').get(categoryListGet);

router
  .route('/')
  .get(categoryListGet)
  .post(
    body('category_name').notEmpty().isString().isAlpha().escape(),
    validationErrors,
    categoryPost
  );

router.route('/:id').get(param('id').isInt(), validationErrors, categoryGet);

router
  .route('/:id')
  .get(param('id').isInt(), validationErrors, categoryGet)
  .put(
    param('id').isInt(),
    body('category_name').notEmpty().isString().isAlpha().escape(),
    validationErrors,
    categoryGet
  );

export default router;
