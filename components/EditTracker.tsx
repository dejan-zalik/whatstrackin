import editTracker from '@/app/actions/editTracker';
import { useState } from 'react';
import TrackerLoader from '@/components/TrackerLoader';

const EditTracker = ({ tracker }: any) => {
  const [titleText, setTitleText] = useState(tracker.title);
  const editTrackerWithId = editTracker.bind(null, tracker._id);

  return (
    <>
      <div>
        <form
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
            }
          }}
          action={editTrackerWithId}
          className="grid grid-cols-1"
        >
          <h1 className="mt-6 mx-auto">edit tracker title below:</h1>
          <input
            type="text"
            value={titleText}
            onChange={(e) => setTitleText(e.target.value)}
            required
            name="title"
            placeholder="type here"
            className="input text-sm rounded-xl shadow-md w-full max-w-xs my-6 m-auto"
          />
          <div>
            <div className="justify-self-center mb-6 ">
              <button
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                  }
                }}
                className="btn btn-ghost shadow-md rounded-xl border font-bold"
              >
                edit
              </button>
            </div>
          </div>
          <TrackerLoader />
        </form>
      </div>
    </>
  );
};

export default EditTracker;
