'use server';

import connectDB from '@/config/database';
import Tracker from '@/models/Tracker';
import { revalidatePath } from 'next/cache';

const deleteTracker = async (id: any) => {
  await connectDB();

  const tracker = await Tracker.findById(id);

  await tracker.deleteOne();

  revalidatePath('/', 'layout');
};

export default deleteTracker;
