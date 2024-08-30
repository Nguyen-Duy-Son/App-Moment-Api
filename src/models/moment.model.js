const mongoose = require('mongoose');

const { UPLOAD_LOCATION } = require('../constants');

const momentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    image: {
      type: String,
      trim: true,
      required: true,
    },
    uploadLocation: {
      type: String,
      default: UPLOAD_LOCATION.CLOUDINARY,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    deletedAt: {
      type: Date,
    },
    content: {
      type: String,
      trim: true,
    },
    musicId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Music',
    },
    location: {
      type: String,
      trim: true,
    },
    weather: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

momentSchema.virtual('momentId').get(function () {
  return this._id;
});

momentSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => {
    ret.momentId = ret._id;
    delete ret._id;
  },
});

module.exports = mongoose.model('Moment', momentSchema);
