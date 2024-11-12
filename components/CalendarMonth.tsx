'use client';

import addCalendarDay from '@/app/actions/addCalendarDay';
import removeCalendarDay from '@/app/actions/removeCalendarDay';
import { useRouter } from 'next/navigation';

const CalendarMonth = ({ tracker }: any) => {
  const router = useRouter();

  const monthArr = [
    {
      day: 1,
      clicked: false,
    },
    {
      day: 2,
      clicked: false,
    },
    {
      day: 3,
      clicked: false,
    },
    {
      day: 4,
      clicked: false,
    },
    {
      day: 5,
      clicked: false,
    },
    {
      day: 6,
      clicked: false,
    },
    {
      day: 7,
      clicked: false,
    },
    {
      day: 8,
      clicked: false,
    },
    {
      day: 9,
      clicked: false,
    },
    {
      day: 10,
      clicked: false,
    },
    {
      day: 11,
      clicked: false,
    },
    {
      day: 12,
      clicked: false,
    },
    {
      day: 13,
      clicked: false,
    },
    {
      day: 14,
      clicked: false,
    },
    {
      day: 15,
      clicked: false,
    },
    {
      day: 16,
      clicked: false,
    },
    {
      day: 17,
      clicked: false,
    },
    {
      day: 18,
      clicked: false,
    },
    {
      day: 19,
      clicked: false,
    },
    {
      day: 20,
      clicked: false,
    },
    {
      day: 21,
      clicked: false,
    },
    {
      day: 22,
      clicked: false,
    },
    {
      day: 23,
      clicked: false,
    },
    {
      day: 24,
      clicked: false,
    },
    {
      day: 25,
      clicked: false,
    },
    {
      day: 26,
      clicked: false,
    },
    {
      day: 27,
      clicked: false,
    },
    {
      day: 28,
      clicked: false,
    },
    {
      day: 29,
      clicked: false,
    },
    {
      day: 30,
      clicked: false,
    },
  ];

  const dayClassAttributes = 'w-14 m-0.5 text-sm pb-1';
  const boxClassAttributes = 'h-14 w-14 m-0.5 hover:cursor-grab p-1 rounded-md';

  const handleDayClick = (day: number) => {
    if (tracker.subscribedDays.includes(day)) {
      console.log('includes');
      removeCalendarDay(tracker, day);
      router.refresh();
    } else {
      console.log('excludes, so let us add it');
      addCalendarDay(tracker, day);
      router.refresh();
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="border rounded-md shadow-md p-3">
          <div className="grid grid-cols-7 gap-0 w-fit text-center">
            <div className={dayClassAttributes}>Mon</div>
            <div className={dayClassAttributes}>Tue</div>
            <div className={dayClassAttributes}>Wed</div>
            <div className={dayClassAttributes}>Thu</div>
            <div className={dayClassAttributes}>Fri</div>
            <div className={dayClassAttributes}>Sat</div>
            <div className={dayClassAttributes}>Sun</div>
          </div>

          <div className="grid grid-cols-7 grid-rows-6 gap-0 w-fit">
            {monthArr.map((day, index) => (
              <div
                key={index}
                className={boxClassAttributes}
                style={{
                  backgroundColor: `${
                    tracker.subscribedDays.includes(day.day)
                      ? '#22c55e'
                      : '#3b82f6'
                  }`,
                }}
                onClick={() => handleDayClick(day.day)}
              >
                {day.day}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendarMonth;
