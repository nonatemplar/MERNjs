import MeasureCategory from '../models/index.js';

/**
 * get blogs
 */
export function getAllAppUser(req, res, next) {
  MeasureCategory.find({
    status: 'Active',
  }).sort({
    createdAt: -1,
  }).populate('_createdBy').exec((err, app_user) => {
    if (err) return next(err);
    console.log('getAllAppUser(appUser): ', app_user);
    return res.status(200).json({
      success: true,
      message: 'Get all MeasureCategory',
      data: app_user,
    });
  });
}

/**
 * add app user
 */
export function addAppUser(req, res, next) {
  console.log('addAppUser(req.body): ', req.body);
  let newAppUser = new AppUser();
  Object.assign(newAppUser, req.body, {
    _createdBy: req.authUser._id,
  });
  console.log('addAppUser(newAppUser): ', newAppUser);
  newMeasureCategory.save(function (err, app_user) {
    if (err) return next(err);

    return res.status(201).json({
      success: true,
      message: 'Created App User!',
      data: app_user,
    });
  });
}

/**
 * get app user
 */
export function getAppUser(req, res, next) {
  AppUser.findById(req.params._id).populate('_createdBy').exec((err, app_user) => {
    if (err) return next(err);

    return res.status(200).json({
      success: true,
      message: 'Get App User',
      data: app_user,
    });
  });
}
