import CardVideo from '../components/CardVideo';

const Hightlights = () => (
  <>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
      <CardVideo src="./video.mp4" type="video/mp4" />
    </div>
  </>
);

export default Hightlights;
