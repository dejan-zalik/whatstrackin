'use client';

import Link from 'next/link';
import { Plus, X, ChartNoAxesCombined } from 'lucide-react';
import AddTracker from './AddTracker';
import { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <nav>
      <div className="container flex m-auto mt-3">
        {isLoggedIn ? (
          <>
            <div className="navbar justify-center">
              <Link href={'/trackers/compare'}>
                <button className="btn btn-ghost btn-circle text-blue-500 mr-1">
                  <ChartNoAxesCombined />
                </button>
              </Link>
              <button
                className="btn btn-ghost btn-circle text-green-500 ml-1"
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
          </>
        ) : (
          <div className="navbar justify-center">
            <Link href={'/trackers'}>
              <button className="btn btn-ghost flex items-center rounded-md px-3 py-2 shadow-md">
                <FaGoogle />
                <span>Sign in</span>
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
