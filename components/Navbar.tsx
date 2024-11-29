'use client';

import Link from 'next/link';
import { Plus, X, ChartNoAxesCombined, LogOut } from 'lucide-react';
import AddTracker from './AddTracker';
import { useEffect, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Navbar = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState<any>(null);

  const pathname = usePathname();

  useEffect(() => {
    const setAuthProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };

    setAuthProviders();
  }, []);

  return (
    <nav>
      <div className="container flex m-auto mt-3">
        {session && (
          <>
            <div className="navbar justify-between">
              <div className="w-1/3"></div>
              <div className="w-1/3 flex justify-center">
                {pathname === '/trackers/analytics' ? (
                  ''
                ) : (
                  <Link href={'/trackers/analytics'}>
                    <button
                      title="analytics"
                      className="btn btn-ghost btn-circle text-blue-500 mx-1"
                    >
                      <ChartNoAxesCombined />
                    </button>
                  </Link>
                )}
                {pathname === '/trackers' && (
                  <button
                    title="add tracker"
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
                )}
              </div>
              <div className="w-1/3 flex justify-end">
                <button
                  title="sign out"
                  onClick={() => signOut({ callbackUrl: '/' })}
                  className="btn btn-ghost btn-circle mr-1"
                >
                  <LogOut />
                </button>
              </div>
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
        )}

        {!session && (
          <div className="navbar justify-center">
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  // @ts-ignore
                  key={provider.id}
                  onClick={() =>
                    // @ts-ignore
                    signIn(provider.id, { callbackUrl: '/trackers' })
                  }
                  className="btn btn-ghost flex items-center rounded-md px-3 py-2 shadow-md"
                >
                  <FaGoogle />
                  <span>sign in</span>
                </button>
              ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
