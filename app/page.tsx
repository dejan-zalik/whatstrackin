import Link from 'next/link';

const LandingPage = () => {
  return (
    <>
      <div>
        <Link href={'/trackers'}>
          <button className="btn">trackers</button>
        </Link>
      </div>
    </>
  );
};

export default LandingPage;
