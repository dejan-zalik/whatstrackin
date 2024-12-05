'use server';

import connectDB from '@/config/database';
import Tracker from '@/models/Tracker';
import { revalidatePath } from 'next/cache';

const editTracker = async (
  trackerId: any,
  trackerColor: string,
  formData: FormData
) => {
  await connectDB();

  const updateTracker = await Tracker.findById(trackerId);

  updateTracker.title = formData.get('title');
  updateTracker.trackerColor = trackerColor;

  await Tracker.findByIdAndUpdate(trackerId, updateTracker);

  revalidatePath('/', 'layout');
};

export default editTracker;
