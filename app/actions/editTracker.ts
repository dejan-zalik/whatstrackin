'use server';

import connectDB from '@/config/database';
import Tracker from '@/models/Tracker';
import { revalidatePath } from 'next/cache';

const editTracker = async (trackerId: any, formData: FormData) => {
  await connectDB();

  const updateTracker = await Tracker.findById(trackerId);

  updateTracker.title = formData.get('title');

  await Tracker.findByIdAndUpdate(trackerId, updateTracker);

  revalidatePath('/', 'layout');
};

export default editTracker;
