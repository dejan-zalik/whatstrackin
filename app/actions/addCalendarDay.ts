'use server';

import connectDB from '@/config/database';
import Tracker from '@/models/Tracker';

const addCalendarDay = async (tracker: any, day: number) => {
  await connectDB();

  const updateTracker = await Tracker.findById(tracker._id);

  updateTracker.subscribedDays.push(day);

  await Tracker.findByIdAndUpdate(tracker._id, updateTracker);
};

export default addCalendarDay;
