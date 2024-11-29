import TrackerCard from '@/components/TrackerCard';
import connectDB from '@/config/database';
import Tracker from '@/models/Tracker';
import convertToSerializableObject from '@/utils/convertToSerializableObject';
import SearchWrapper from '@/components/SearchWrapper';
import { getSessionUser } from '@/utils/getSessionUser';

const TrackersPage = async () => {
  await connectDB();

  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error('User ID is required');
  }

  const { userId } = sessionUser;

  const trackersDoc = await Tracker.find({ owner: userId }).lean();
  const trackers = trackersDoc.map(convertToSerializableObject);

  return (
    <>
      <SearchWrapper trackers={trackers} />
    </>
  );
};

export default TrackersPage;
