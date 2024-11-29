import AnalyticsMonth from '@/components/AnalyticsMonth';

const AnalyticsBody = ({ trackers }: any) => {
  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <div className="flex justify-center flex-wrap">
            {trackers.map((tracker: any, index: any) => (
              <div
                key={index}
                className="m-2 flex items-center justify-center h-12 w-24 rounded-xl bg-secondary hover:bg-accent hover:cursor-pointer"
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
