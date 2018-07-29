import MeasureItem from '../models/index.js';

/**
 * get All MeasureItem
 */
export function getAllMeasureItem(req, res, next) {
  MeasureItem.find().sort({
    createdAt: -1,
  }).populate('_createdBy').exec((err, measure_item) => {
    if (err) return next(err);
    console.log('getAllMeasureCategory(measureCategory): ', measure_item);
    return res.status(200).json({
      success: true,
      message: 'Get all measure item',
      data: measure_item,
    });
  });
}

/**
 * add MeasureItem
 */
export function addMeasureItem(req, res, next) {
  console.log('addMeasureCategory(req.body): ', req.body);
  let newMeasureItem = new MeasureItem();
  Object.assign(newMeasureItem, req.body, {
  //  _createdBy: req.authUser._id,
  });
  console.log('addMeasureItem(newMeasureItem): ', newMeasureItem);
  newMeasureItem.save(function (err, measureitem) {
    if (err) return next(err);

    return res.status(201).json({
      success: true,
      message: 'Created measure item!',
      data: measureitem,
    });
  });
}

/**
 * get MeasureItem
 */
export function getMeasureItem(req, res, next) {
  MeasureItem.findById(req.params._id).populate('_createdBy').exec((err, measureitems) => {
    if (err) return next(err);

    return res.status(200).json({
      success: true,
      message: 'Get measure item',
      data: measureitems,
    });
  });
}
