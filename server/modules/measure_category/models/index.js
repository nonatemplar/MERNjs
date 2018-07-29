import mongoose, { Schema } from 'mongoose';

// create a measureCategorySchema
export const measureCategorySchema = new Schema({
  id: {
    type: String,
    required: [true, 'id is required.'],
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  avatar: {
    type: String,
  },
  items: [{
    type: String
  }],
  _createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Blog created by is required.'],
  },
  createdAt: Date,
  updatedAt: Date,
}, { versionKey: false });

/*
 * Schema middlewares
 */

// on every save, add the date
measureCategorySchema.pre('save', function (next) {
  // get the current date
  var currentDate = new Date();

  // change the updated_at field to current date
  this.updatedAt = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.createdAt) {
    this.createdAt = currentDate;
  }

  next();
});

// the schema is useless so far
// we need to create a model using it
const MeasureCategory = mongoose.model('MeasureCategory', measureCategorySchema);

// make this available to our users in our Node applications
export default MeasureCategory;
