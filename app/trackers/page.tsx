import TrackerCard from '@/components/TrackerCard';
import connectDB from '@/config/database';
import Tracker from '@/models/Tracker';
import convertToSerializableObject from '@/utils/convertToSerializableObject';

const TrackersPage = async () => {
  await connectDB();

  const trackersDoc = await Tracker.find({}).lean();
  const trackers = trackersDoc.map(convertToSerializableObject);

  return (
    <section className="px-4 py-6">
      <div className="container m-auto py-6 px-6">
        {trackers.length === 0 ? (
          <>
            <p>No trackers found</p>
          </>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trackers.map((tracker: any) => (
              <TrackerCard key={tracker._id} tracker={tracker} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TrackersPage;
