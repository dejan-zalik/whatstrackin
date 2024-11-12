import CalendarMonth from '@/components/CalendarMonth';

type Params = Promise<{ id: string }>;

const TrackerPage = async (props: { params: Params }) => {
  const params = await props.params;

  // const res = await fetch(`http://localhost:3500/trackers/${params.id}`);
  const res = await fetch('http://localhost:3500/trackers');
  const data = await res.json();
  const tracker = data.filter(
    (dataPoint: any) => dataPoint.id === params.id
  )[0];

  return (
    <>
      <section>
        <div>This is the params id: {params.id}</div>
        <div>Tracker id: {tracker.name}</div>

        <CalendarMonth tracker={tracker} />

        {/* <div className="carousel carousel-vertical rounded-box h-96">
          <div className="carousel-item h-full">
            <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" />
          </div>
          <div className="carousel-item h-full">
            <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" />
          </div>
          <div className="carousel-item h-full">
            <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" />
          </div>
          <div className="carousel-item h-full">
            <img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp" />
          </div>
          <div className="carousel-item h-full">
            <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" />
          </div>
          <div className="carousel-item h-full">
            <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" />
          </div>
          <div className="carousel-item h-full">
            <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp" />
          </div>
        </div> */}
      </section>
    </>
  );
};

export default TrackerPage;
