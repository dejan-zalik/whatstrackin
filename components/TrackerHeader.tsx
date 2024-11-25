'use client';

import { Pencil, ArrowLeftToLine, X } from 'lucide-react';
import Link from 'next/link';
import EditTracker from '@/components/EditTracker';

const TrackerHeader = ({ tracker }: any) => {
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
        <button
          className="btn btn-circle btn-ghost ml-1 text-[#3b82f6]"
          title="edit"
          onClick={() => {
            const element = document.getElementById(
              'modalEditTracker'
            ) as HTMLDialogElement;
            element.showModal();
          }}
        >
          <Pencil />
        </button>
      </div>
      <dialog id="modalEditTracker" className="modal">
        <div className="modal-box rounded-lg">
          <div className="modal-action mt-0 justify-center">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                  }
                }}
                className="btn btn-ghost btn-circle shadow-md text-red-500"
              >
                <X />
              </button>
            </form>
          </div>
          <EditTracker tracker={tracker} />
        </div>
      </dialog>
    </>
  );
};

export default TrackerHeader;
