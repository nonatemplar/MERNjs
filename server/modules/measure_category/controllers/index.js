import MeasureCategory from '../models/index.js';

/**
 * get blogs
 */
export function getAllMeasureCategory(req, res, next) {
  MeasureCategory.find({
    status: 'Active',
  }).sort({
    createdAt: -1,
  }).populate('_createdBy').exec((err, measureCategory) => {
    if (err) return next(err);
    console.log('getAllMeasureCategory(measureCategory): ', measureCategory);
    return res.status(200).json({
      success: true,
      message: 'Get all MeasureCategory',
      data: measureCategory,
    });
  });
}

/**
 * add MeasureCategory
 */
export function addMeasureCategory(req, res, next) {
  console.log('addMeasureCategory(req.body): ', req.body);
  let newMeasureCategory = new MeasureCategory();
  Object.assign(newMeasureCategory, req.body, {
    _createdBy: req.authUser._id,
  });
  console.log('addMeasureCategory(newMeasureCategory): ', newMeasureCategory);
  newMeasureCategory.save(function (err, measureCategory) {
    if (err) return next(err);

    return res.status(201).json({
      success: true,
      message: 'Created MeasureCategory!',
      data: measureCategory,
    });
  });
}

/**
 * get MeasureCategory
 */
export function getMeasureCategory(req, res, next) {
  MeasureCategory.findById(req.params._id).populate('_createdBy').exec((err, measureCategory) => {
    if (err) return next(err);

    return res.status(200).json({
      success: true,
      message: 'Get MeasureCategory',
      data: measureCategory,
    });
  });
}
