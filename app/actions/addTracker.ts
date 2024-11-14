'use server';

import connectDB from '@/config/database';
import Tracker from '@/models/Tracker';
import { revalidatePath } from 'next/cache';

const addTracker = async (formData: FormData) => {
  await connectDB();

  const trackerData = {
    title: formData.get('title'),
    subscribedDays: [],
  };

  const newTracker = new Tracker(trackerData);
  await newTracker.save();

  revalidatePath('/', 'layout');
};

export default addTracker;
