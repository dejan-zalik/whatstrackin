'use client';

import AnalyticsMonth from '@/components/AnalyticsMonth';
import { useEffect, useState } from 'react';

const AnalyticsBody = ({ trackers }: any) => {
  const [selectedTrackers, setSelectedTrackers] = useState<any>([]);

  console.log(selectedTrackers);

  const handleTrackerSelect = (trackerId: number) => {
    selectedTrackers.map((tracker: any) => {
      if (tracker._id === trackerId) {
        tracker.selected = !tracker.selected;
      }
    });

    setSelectedTrackers(selectedTrackers);

    console.log(selectedTrackers);

    // if (selectedTrackers.includes(trackerId)) {
    //   const trackerIndex = selectedTrackers.indexOf(trackerId);
    //   selectedTrackers.splice(trackerIndex, 1);
    //   setSelectedTrackers(selectedTrackers);
    //   return;
    // }
    // if (selectedTrackers.length === 4) {
    //   window.alert('Max 4 trackers. Please remove one before adding.');
    //   return;
    // }
    // selectedTrackers.push(trackerId);
    // setSelectedTrackers(selectedTrackers);
  };

  useEffect(() => {
    setSelectedTrackers(
      trackers.map((tracker: any) => {
        return Object.defineProperty(tracker, 'selected', {
          value: false,
          writable: true,
        });
      })
    );
  }, []);

  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <div className="flex justify-center flex-wrap">
            {trackers.map((tracker: any, index: any) => (
              <div
                key={index}
                // style={{
                //   backgroundColor: tracker.selected ? '#22c55e' : '#3b82f6',
                // }}
                onClick={() => handleTrackerSelect(tracker._id)}
                className={`${
                  tracker.selected ? 'bg-secondary' : 'bg-accent'
                } m-2 flex items-center justify-center h-12 w-24 rounded-xl hover:cursor-pointer`}
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
        <AnalyticsMonth />
      </section>
    </>
  );
};

export default AnalyticsBody;
