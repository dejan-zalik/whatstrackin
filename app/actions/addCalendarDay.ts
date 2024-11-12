'use server';

const addCalendarDay = async (tracker: any, day: number) => {
  const res = await fetch(`http://localhost:3500/trackers/${tracker.id}`);
  const updateTracker = await res.json();

  updateTracker.subscribedDays.push(day);

  await fetch(`http://localhost:3500/trackers/${tracker.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updateTracker),
  });
};

export default addCalendarDay;
