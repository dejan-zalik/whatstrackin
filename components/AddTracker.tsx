import addTracker from '@/app/actions/addTracker';
import { useState } from 'react';
import TrackerLoader from '@/components/TrackerLoader';

const AddTracker = () => {
  const [titleText, setTitleText] = useState<string>('');

  const handleButtonClick = () => {
    setTimeout(() => {
      setTitleText('');
    }, 100);
  };

  return (
    <>
      <div>
        <form
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
            }
          }}
          action={addTracker}
          className="grid grid-cols-1"
        >
          <h1 className="mt-6 mx-auto">what do you want to track?</h1>
          <input
            autoFocus
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
                onClick={() => handleButtonClick()}
                className="btn btn-ghost shadow-md rounded-xl border font-bold"
              >
                add
              </button>
            </div>
          </div>
          <TrackerLoader />
        </form>
      </div>
    </>
  );
};

export default AddTracker;
