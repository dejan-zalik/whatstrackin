'use client';

import Link from 'next/link';
import { Plus, X } from 'lucide-react';
import AddTracker from './AddTracker';

const Navbar = () => {
  return (
    <nav>
      <div className="container flex m-auto mt-3">
        <div className="navbar ml-3 md:ml-6">
          <Link href={'/'}>
            <button className="btn btn-ghost">whatstrackin</button>
          </Link>
        </div>
        <div className="navbar justify-end mr-3 md:ml-6">
          <button
            className="btn btn-ghost btn-circle text-green-500"
            onClick={() => {
              const element = document.getElementById(
                'modalAddTracker'
              ) as HTMLDialogElement;
              element.showModal();
            }}
          >
            <Plus />
          </button>
        </div>
        <dialog id="modalAddTracker" className="modal">
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
            <AddTracker />
          </div>
        </dialog>
      </div>
    </nav>
  );
};

export default Navbar;
