import CalendarMonth from '@/components/CalendarMonth';
import connectDB from '@/config/database';
import Tracker from '@/models/Tracker';
import convertToSerializableObject from '@/utils/convertToSerializableObject';
import { X, Pencil } from 'lucide-react';
import Link from 'next/link';

type Params = Promise<{ id: string }>;

const TrackerPage = async (props: { params: Params }) => {
  const params = await props.params;

  await connectDB();

  const trackerDoc = await Tracker.findById(params.id).lean();
  const tracker = convertToSerializableObject(trackerDoc);

  return (
    <>
      <section>
        <div className="my-6 flex justify-center">
          <Link
            href={'/trackers'}
            className="shadow-md rounded border hover:bg-secondary font-bold py-4 px-6"
          >
            back
          </Link>
        </div>
        <div className="flex justify-center my-3">
          <button className="btn btn-circle mr-1">
            <Pencil />
          </button>
          <button className="btn btn-circle ml-1 text-red-500">
            <X />
          </button>
        </div>

        <CalendarMonth tracker={tracker} />
      </section>
    </>
  );
};

export default TrackerPage;
