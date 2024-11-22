'use client';

import TrackerCard from '@/components/TrackerCard';
import { useState, useContext } from 'react';
import { LoaderCircle } from 'lucide-react';
import { LoadingContext } from '@/context/LoadingContext';

const SearchWrapper = ({ trackers }: any) => {
  const [searchText, setSearchText] = useState('');
  const { isLoading } = useContext(LoadingContext);

  const filteredTrackers = trackers.filter((tracker: any) => {
    return tracker.title.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <section className="px-4 py-6">
      <div className="container m-auto py-4 px-6 text-center">
        <input
          type="text"
          placeholder="filter trackers"
          className="input shadow-md w-full max-w-sm"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
      </div>
      <div className="container m-auto py-6 px-6">
        {trackers.length === 0 ? (
          <>
            <p>No trackers found</p>
          </>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredTrackers.map((tracker: any) => (
              <TrackerCard key={tracker._id} tracker={tracker} />
            ))}
          </div>
        )}
      </div>
      {isLoading && (
        <dialog className="modal modal-open">
          <div className="flex align-middle justify-center">
            <LoaderCircle size={96} className="animate-spin text-green-500" />
          </div>
        </dialog>
      )}
    </section>
  );
};

export default SearchWrapper;
