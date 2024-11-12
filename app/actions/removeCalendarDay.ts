'use server';

const removeCalendarDay = async (tracker: any, day: number) => {
  const res = await fetch(`http://localhost:3500/trackers/${tracker.id}`);
  const updateTracker = await res.json();

  const index = updateTracker.subscribedDays.indexOf(day);
  updateTracker.subscribedDays.splice(index, 1);

  await fetch(`http://localhost:3500/trackers/${tracker.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updateTracker),
  });
};

export default removeCalendarDay;
