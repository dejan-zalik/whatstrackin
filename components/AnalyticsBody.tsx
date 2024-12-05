'use client';

import AnalyticsMonth from '@/components/AnalyticsMonth';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const AnalyticsBody = ({ trackers }: any) => {
  const [selectedTrackers, setSelectedTrackers] = useState<any>([]);

  const handleTrackerSelect = (tracker: any) => {
    setSelectedTrackers((prevState: any) => {
      const index = prevState.findIndex(
        (item: any) => item._id === tracker._id
      );

      if (index === -1) {
        if (selectedTrackers.length > 3) {
          const customId = 'this-will-prevent-duplicate-toast-popup';
          toast.warn('you can only use 4 at a time', {
            toastId: customId,
          });
          return [...prevState];
        } else {
          return [...prevState, tracker];
        }
      } else {
        const updatedTrackers = [...prevState];
        updatedTrackers.splice(index, 1);
        return updatedTrackers;
      }
    });
  };

  // useEffect(() => {
  //   setSelectedTrackers(trackers.slice(0, 3));
  // }, []);

  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <div className="flex justify-center flex-wrap">
            {trackers.map((tracker: any, index: any) => (
              <div
                key={index}
                onClick={() => handleTrackerSelect(tracker)}
                style={{
                  backgroundColor:
                    selectedTrackers.findIndex(
                      (item: any) => item._id === tracker._id
                    ) === -1
                      ? '#3b82f6'
                      : `${tracker.trackerColor}`,
                }}
                className="m-2 flex items-center justify-center h-12 w-24 rounded-xl hover:cursor-pointer"
              >
                <h1 title={tracker.title} className="text-sm text-center">
                  {tracker.title.length >= 15
                    ? tracker.title.slice(0, 10) + '...'
                    : tracker.title}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <AnalyticsMonth selectedTrackers={selectedTrackers} />
      </section>
    </>
  );
};

export default AnalyticsBody;
