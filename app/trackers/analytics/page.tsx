import { ArrowLeftToLine, LoaderCircle } from 'lucide-react';
import Link from 'next/link';
import AnalyticsBody from '@/components/AnalyticsBody';
import connectDB from '@/config/database';
import Tracker from '@/models/Tracker';
import convertToSerializableObject from '@/utils/convertToSerializableObject';
import { getSessionUser } from '@/utils/getSessionUser';

const AnalyticsPage = async () => {
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
      <div className="flex justify-center my-6">
        <Link
          href={'/trackers'}
          className="btn btn-circle btn-ghost mr-1"
          title="back"
        >
          <ArrowLeftToLine />
        </Link>
      </div>

      {/* <AnalyticsBody trackers={trackers} /> */}

      <div className="relative flex justify-center">
        <LoaderCircle
          size={180}
          className="absolute animate-spin text-green-500"
        />
        <h1 className="absolute top-20 text-green-500">coming soon...</h1>
      </div>
    </>
  );
};

export default AnalyticsPage;
