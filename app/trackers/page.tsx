import TrackerCard from '@/components/TrackerCard';
import connectDB from '@/config/database';
import Tracker from '@/models/Tracker';
import convertToSerializableObject from '@/utils/convertToSerializableObject';
import SearchWrapper from '@/components/SearchWrapper';

const TrackersPage = async () => {
  await connectDB();

  const trackersDoc = await Tracker.find({}).lean();
  const trackers = trackersDoc.map(convertToSerializableObject);

  return (
    <>
      <SearchWrapper trackers={trackers} />
    </>
  );
};

export default TrackersPage;
