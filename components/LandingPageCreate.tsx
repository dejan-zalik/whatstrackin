import { MousePointerClick, Plus, Trash2 } from 'lucide-react';

const LandingPageCreate = () => {
  return (
    <div>
      <h1 className="text-center underline italic">create</h1>
      <div className="w-full h-full rounded-md shadow-md">
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute top-7 left-7">
              <MousePointerClick size={20} />
            </div>
            <button className="btn btn-circle btn-ghost">
              <Plus className="text-green-500 m-2" />
            </button>
          </div>
        </div>
        <div className="content-center m-6">
          <div className="relative">
            <button className="btn btn-circle text-red-500 absolute -right-5 -top-5 md:-right-4 md:-top-4">
              <Trash2 />
            </button>
            <div className="rounded-xl shadow-md bg-secondary hover:rounded-xl hover:shadow-2xl hover:cursor-pointer">
              <div className="p-2">
                <div className="text-center my-3">
                  <h3 className="text-lg font-bold">exercise</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-center m-6">
          <div className="relative">
            <button className="btn btn-circle text-red-500 absolute -right-5 -top-5 md:-right-4 md:-top-4">
              <Trash2 />
            </button>
            <div className="rounded-xl shadow-md bg-secondary hover:rounded-xl hover:shadow-2xl hover:cursor-pointer">
              <div className="p-2">
                <div className="text-center my-3">
                  <h3 className="text-lg font-bold">headache</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-center m-6">
          <div className="relative">
            <button className="btn btn-circle text-red-500 absolute -right-5 -top-5 md:-right-4 md:-top-4">
              <Trash2 />
            </button>
            <div className="rounded-xl shadow-md bg-secondary hover:rounded-xl hover:shadow-2xl hover:cursor-pointer">
              <div className="p-2">
                <div className="text-center my-3">
                  <h3 className="text-lg font-bold">
                    drank at least 2 liters of water
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageCreate;
