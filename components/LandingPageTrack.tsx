import generateMonth from '@/utils/generateMonth';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const LandingPageTrack = () => {
  const [selectedYear] = useState(new Date().getFullYear());
  const [selectedMonth] = useState(new Date().getMonth() + 1);

  const dateToday = new Date().toLocaleDateString();

  const dayClassAttributes = 'w-11 md:w-6 m-0.5 text-sm md:text-[10px] pb-1';
  const boxClassAttributes =
    'h-11 w-11 md:h-7 md:w-7 m-0.5 text-sm md:text-[10px] md:text-center p-1 md:p-0.5 rounded-md';

  const monthDayStart =
    new Date(selectedYear, selectedMonth - 1, 1).getDay() === 0
      ? 7
      : new Date(selectedYear, selectedMonth - 1, 1).getDay();
  const selectedMonthArr = generateMonth(selectedYear, selectedMonth);

  for (let i = 1; i < monthDayStart; i++) {
    selectedMonthArr.unshift(0);
  }

  return (
    <div className="mt-9 md:mt-0">
      <h1 className="text-center font-bold mb-3">{`2) track daily`}</h1>
      <div className="w-full h-full rounded-md shadow-md md:pt-9">
        <h1 className="pt-3 font-bold md:text-lg text-center text-[#87CEEB]">
          exercise
        </h1>
        <div className="flex justify-evenly">
          <button className="btn btn-circle btn-ghost">
            <ChevronLeft size={18} />
          </button>
          <div className="text-sm md:text-xs text-center underline my-auto">
            {selectedMonth}/{selectedYear}
          </div>
          <button className="btn btn-circle btn-ghost">
            <ChevronRight size={18} />
          </button>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-7 w-full text-center mx-1">
            <div className={dayClassAttributes}>Mon</div>
            <div className={dayClassAttributes}>Tue</div>
            <div className={dayClassAttributes}>Wed</div>
            <div className={dayClassAttributes}>Thu</div>
            <div className={dayClassAttributes}>Fri</div>
            <div className={dayClassAttributes}>Sat</div>
            <div className={dayClassAttributes}>Sun</div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-7 grid-rows-6 w-full mx-1">
            {selectedMonthArr.map((day, index) => (
              <div
                key={index}
                className={boxClassAttributes}
                style={{
                  outline: `${
                    new Date(
                      `${selectedYear}-${selectedMonth}-${day}`
                    ).toLocaleDateString() === dateToday
                      ? 'dotted 2px'
                      : ''
                  }`,
                  backgroundColor: `${
                    day === 0 ? '' : day % 2 === 0 ? '#cccccc' : '#87CEEB'
                  }`,
                  cursor: `${day === 0 ? '' : 'grab'}`,
                }}
              >
                {day === 0 ? '' : day}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageTrack;
