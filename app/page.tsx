'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { redirect } from 'next/navigation';

const LandingPage = () => {
  //   useEffect(() => {
  //     redirect('/trackers');
  //   });

  return (
    <>
      <div className="block m-12">
        <div className="text-center m-12">
          <Link href={'/trackers'} className="btn btn-square">
            temp
          </Link>
        </div>
        <div className="text-center">create</div>
        <div className="text-center">track</div>
        <div className="text-center">analytics</div>
      </div>
    </>
  );
};

export default LandingPage;
