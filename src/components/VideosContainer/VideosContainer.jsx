// Modules & Hooks
import useStore from "../../hooks/useStore";
import ReactPlayer from "react-player";

const VideosContainer = () => {
  const { documents } = useStore("videos");

  console.log(documents);
  return (
    <div className="videos__container">
      <h1>Videos Container</h1>
      <div className="videos__container__grid">
        {documents.map((doc) => (
          <div key={doc.id} className="video__item">
            <ReactPlayer controls url={doc.url} width={350} height={250} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideosContainer;
