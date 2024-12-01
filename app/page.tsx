'use client';

import LandingPageCreate from '@/components/LandingPageCreate';
import LandingPageTrack from '@/components/LandingPageTrack';
import LandingPageAnalyze from '@/components/LandingPageAnalyze';

const LandingPage = () => {
  return (
    <>
      <div className="container flex justify-center my-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <LandingPageCreate />
          <LandingPageTrack />
          <LandingPageAnalyze />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
