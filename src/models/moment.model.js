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
      default: null,
    },
    linkMusic: {
      type: String,
      default: null,
      trim: true,
    },
    musicId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Music',
      default: null,
    },
    location: {
      type: String,
      trim: true,
      default: null,
    },
    weather: {
      type: String,
      trim: true,
      default: null,
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
