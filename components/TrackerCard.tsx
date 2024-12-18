'use client';

import Link from 'next/link';
import { Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import deleteTracker from '@/app/actions/deleteTracker';
import { useContext } from 'react';
import { LoadingContext } from '@/context/LoadingContext';
import invert from 'invert-color';

const TrackerCard = ({ tracker }: any) => {
  const router = useRouter();
  const { setIsLoading } = useContext(LoadingContext);

  const handleDeleteTracker = async () => {
    const confirmed = window.confirm('Delete this tracker?');

    if (!confirmed) return;
    setIsLoading(true);
    await deleteTracker(tracker._id);
    setIsLoading(false);
    router.refresh();
  };

  return (
    <>
      <div className="content-center">
        <div className="relative">
          <button
            onClick={(e) => {
              e.preventDefault();
              handleDeleteTracker();
            }}
            className="btn btn-circle ml-1 text-red-500 absolute -right-4 -top-4"
            title="delete"
          >
            <Trash2 />
          </button>
          <Link
            href={`/trackers/${tracker._id}`}
            onClick={() => {
              setIsLoading(true);
            }}
          >
            <div
              className="rounded-xl shadow-md hover:rounded-xl hover:shadow-2xl"
              style={{ backgroundColor: `${tracker.trackerColor}` }}
            >
              <div className="p-4">
                <div className="text-center my-3">
                  <h3
                    className="text-xl font-bold"
                    style={{ color: invert(tracker.trackerColor, true) }}
                  >
                    {tracker.title}
                  </h3>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default TrackerCard;
