import { Schema, model, models } from 'mongoose';

const TrackerSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: [true, 'Title is required'],
    },
    subscribedDays: [],
  },
  {
    timestamps: true,
  }
);

const Tracker = models.Tracker || model('Tracker', TrackerSchema);

export default Tracker;
