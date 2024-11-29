import TrackerMonth from '@/components/TrackerMonth';
import connectDB from '@/config/database';
import Tracker from '@/models/Tracker';
import convertToSerializableObject from '@/utils/convertToSerializableObject';
import TrackerHeader from '@/components/TrackerHeader';

type Params = Promise<{ id: string }>;

const TrackerPage = async (props: { params: Params }) => {
  const params = await props.params;

  await connectDB();

  const trackerDoc = await Tracker.findById(params.id).lean();
  const tracker = convertToSerializableObject(trackerDoc);

  return (
    <>
      <section>
        <TrackerHeader tracker={tracker} />
        <TrackerMonth tracker={tracker} />
      </section>
    </>
  );
};

export default TrackerPage;
