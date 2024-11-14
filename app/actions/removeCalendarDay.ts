'use server';

import connectDB from '@/config/database';
import Tracker from '@/models/Tracker';

const removeCalendarDay = async (tracker: any, day: number) => {
  await connectDB();

  const updateTracker = await Tracker.findById(tracker._id);

  const index = updateTracker.subscribedDays.indexOf(day);
  updateTracker.subscribedDays.splice(index, 1);

  await Tracker.findByIdAndUpdate(tracker._id, updateTracker);
};

export default removeCalendarDay;
