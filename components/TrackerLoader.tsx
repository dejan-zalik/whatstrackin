'use client';

import { LoaderCircle } from 'lucide-react';
import { useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { usePathname } from 'next/navigation';

const TrackerLoader = () => {
  const { pending } = useFormStatus();
  const pathname = usePathname();

  useEffect(() => {
    if (!pending) {
      const element =
        pathname === '/trackers'
          ? (document.getElementById('modalAddTracker') as HTMLDialogElement)
          : (document.getElementById('modalEditTracker') as HTMLDialogElement);
      if (element) element.close();
    }
  }, [pending]);

  return (
    <>
      {pending && (
        <dialog className="modal modal-open">
          <div className="flex align-middle justify-center">
            <LoaderCircle size={96} className="animate-spin text-green-500" />
          </div>
        </dialog>
      )}
    </>
  );
};

export default TrackerLoader;
