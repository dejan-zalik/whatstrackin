import Link from 'next/link';

const LandingPage = () => {
  return (
    <>
      <div className="block m-12">
        <div className="text-center m-12">
          <Link href={'trackers'} className="btn btn-square">
            temp
          </Link>
        </div>
        <div className="text-center">create</div>
        <div className="text-center">track</div>
        <div className="text-center">compare</div>
      </div>
    </>
  );
};

export default LandingPage;
