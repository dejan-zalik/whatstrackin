import Link from 'next/link';

const TrackerCard = ({ tracker }: any) => {
  return (
    <Link
      href={`/trackers/${tracker._id}`}
      className="hover:rounded-xl hover:shadow-2xl"
    >
      <div className="rounded-xl shadow-md relative bg-secondary">
        <div className="p-4">
          <div className="text-left md:text-center lg:text-left mb-6">
            <h3 className="text-xl font-bold">{tracker.title}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TrackerCard;
