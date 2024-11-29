'use server';

import connectDB from '@/config/database';
import Tracker from '@/models/Tracker';
import { revalidatePath } from 'next/cache';
import { getSessionUser } from '@/utils/getSessionUser';

const addTracker = async (formData: FormData) => {
  await connectDB();

  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error('User ID is required');
  }

  const { userId } = sessionUser;

  const title = formData.get('title');
  const titleString = title?.toString();
  const titleLowerCase = titleString?.toLowerCase();

  const trackerData = {
    owner: userId,
    title: titleLowerCase,
    subscribedDays: [],
  };

  console.log(trackerData);

  const newTracker = new Tracker(trackerData);

  await newTracker.save();

  revalidatePath('/', 'layout');
};

export default addTracker;
