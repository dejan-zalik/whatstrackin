import TrackerCard from '@/components/TrackerCard';

const TrackersPage = async () => {
  const res = await fetch('http://localhost:3500/trackers');
  const trackers = await res.json();

  return (
    <section className="px-4 py-6">
      <div className="container m-auto py-6 px-6">
        {trackers.length === 0 ? (
          <>
            <p>No recipes found</p>
          </>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trackers.map((tracker: any) => (
              <TrackerCard key={tracker.id} tracker={tracker} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TrackersPage;
