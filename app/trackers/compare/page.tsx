import { ArrowLeftToLine } from 'lucide-react';
import Link from 'next/link';

const ComparePage = () => {
  return (
    <>
      <div className="flex justify-center my-6">
        <Link
          href={'/trackers'}
          className="btn btn-circle btn-ghost mr-1"
          title="back"
        >
          <ArrowLeftToLine />
        </Link>
      </div>

      <div>ComparePage</div>
    </>
  );
};

export default ComparePage;
