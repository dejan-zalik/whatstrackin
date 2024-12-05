import addTracker from '@/app/actions/addTracker';
import { useState } from 'react';
import TrackerLoader from '@/components/TrackerLoader';
import { HexColorPicker } from 'react-colorful';

const AddTracker = () => {
  const [titleText, setTitleText] = useState<string>('');
  const [trackerColor, setTrackerColor] = useState<any>('#3c7879');

  const handleAddTracker = addTracker.bind(null, trackerColor);

  const handleButtonClick = () => {
    setTimeout(() => {
      setTitleText('');
      setTrackerColor('#3c7879');
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
          action={handleAddTracker}
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
          <h1 className="mb-4 mx-auto">choose a tracker color</h1>
          <div className="flex justify-center mb-4">
            <HexColorPicker color={trackerColor} onChange={setTrackerColor} />
          </div>
          <div className="flex justify-center mb-6 ">
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
          <TrackerLoader />
        </form>
      </div>
    </>
  );
};

export default AddTracker;
