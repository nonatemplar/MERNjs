import mongoose, { Schema } from 'mongoose';

// create a measureItemSchema
export const measureItemSchema = new Schema({
  id: {
    type: String,
    //required: [true, 'id is required.'],
  },
  typeName: {
    type: String,
  },
  typeImage: {
    type: String,
  },
  helpImage: {
    type: String,
  },
  description: {
    type: String,
  },
  //_createdBy: {
  //  type: Schema.Types.ObjectId,
  //  ref: 'User',
  //  required: [true, 'Blog created by is required.'],
  //},
  createdAt: Date,
  updatedAt: Date,
  }, {
     versionKey: false 
  }
);

/*
 * Schema middlewares
 */

// on every save, add the date
measureItemSchema.pre('save', function (next) {
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
const MeasureItem = mongoose.model('MeasureItem', measureItemSchema);

// make this available to our users in our Node applications
export default MeasureItem;
