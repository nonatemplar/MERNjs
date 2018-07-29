import mongoose, { Schema } from 'mongoose';

// create a measureCategorySchema
export const appUserSchema = new Schema({
  id: {
    type: String,
    required: [true, 'id is required.'],
  },
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  birth: {
    type: String,
  },
  sex: {
    type: String,
  },
  weight: {
    type: String,
  },
  height: {
    type: String,
  },
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
appUserSchema.pre('save', function (next) {
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
const AppUser = mongoose.model('AppUser', appUserSchema);

// make this available to our users in our Node applications
export default AppUser;
