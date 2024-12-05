'use client';

import addCalendarDay from '@/app/actions/addCalendarDay';
import removeCalendarDay from '@/app/actions/removeCalendarDay';
import { useRouter } from 'next/navigation';
import generateMonth from '@/utils/generateMonth';
import { useState, useEffect, useContext } from 'react';
import { ChevronLeft, ChevronRight, LoaderCircle } from 'lucide-react';
import { LoadingContext } from '@/context/LoadingContext';

const AnalyticsMonth = ({ selectedTrackers }: any) => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const router = useRouter();
  const { setIsLoading } = useContext(LoadingContext);

  const dateToday = new Date().toLocaleDateString();

  const dayClassAttributes = 'w-11 md:w-14 m-0.5 text-sm pb-1';
  const boxClassAttributes = 'h-11 w-11 md:h-14 md:w-14 m-0.5 rounded-md';

  const monthDayStart =
    new Date(selectedYear, selectedMonth - 1, 1).getDay() === 0
      ? 7
      : new Date(selectedYear, selectedMonth - 1, 1).getDay();
  const selectedMonthArr = generateMonth(selectedYear, selectedMonth);

  for (let i = 1; i < monthDayStart; i++) {
    selectedMonthArr.unshift(0);
  }

  return (
    <>
      <div className="flex justify-center">
        <div className="border rounded-md shadow-md p-3">
          <div className="flex justify-evenly">
            <button
              onClick={() =>
                selectedMonth === 1
                  ? (setSelectedYear(selectedYear - 1), setSelectedMonth(12))
                  : setSelectedMonth(selectedMonth - 1)
              }
              className="btn btn-circle btn-ghost"
            >
              <ChevronLeft />
            </button>
            <div className="text-center underline my-auto">
              {selectedMonth < 10 ? '0' + selectedMonth : selectedMonth}/
              {selectedYear}
            </div>
            <button
              onClick={() =>
                selectedMonth === 12
                  ? (setSelectedYear(selectedYear + 1), setSelectedMonth(1))
                  : setSelectedMonth(selectedMonth + 1)
              }
              className="btn btn-circle btn-ghost"
            >
              <ChevronRight />
            </button>
          </div>
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
            {selectedMonthArr.map((day, index) => (
              <div
                key={index}
                className={boxClassAttributes}
                style={{
                  border: `${
                    new Date(
                      `${selectedYear}-${
                        selectedMonth < 10 ? '0' + selectedMonth : selectedMonth
                      }-${day < 10 ? '0' + day : day}`
                    ).toLocaleDateString() === dateToday
                      ? 'dotted'
                      : day === 0
                      ? ''
                      : 'solid'
                  }`,
                }}
              >
                <div className="grid grid-cols-2 grid-rows-2 gap-0 w-full h-full">
                  {day === 0
                    ? ''
                    : selectedTrackers.map((tracker: any) => (
                        <div
                          key={tracker._id}
                          className={
                            tracker.subscribedDays.includes(
                              Date.parse(
                                `${selectedYear}-${
                                  selectedMonth < 10
                                    ? '0' + selectedMonth
                                    : selectedMonth
                                }-${day < 10 ? '0' + day : day}`
                              )
                            ) &&
                            'w-full h-full text-center content-center rounded-full'
                          }
                          style={{
                            backgroundColor:
                              tracker.subscribedDays.includes(
                                Date.parse(
                                  `${selectedYear}-${
                                    selectedMonth < 10
                                      ? '0' + selectedMonth
                                      : selectedMonth
                                  }-${day < 10 ? '0' + day : day}`
                                )
                              ) && tracker.trackerColor,
                          }}
                        ></div>
                      ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AnalyticsMonth;
