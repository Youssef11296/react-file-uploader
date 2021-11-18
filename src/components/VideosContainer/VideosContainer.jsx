// Modules & Hooks
import useStore from "../../hooks/useStore";
import VideoItem from "../VideoItem/VideoItem";
// Styles
import "./VideosContainer.scss";

const VideosContainer = () => {
  const { documents } = useStore("videos");

  console.log(documents);
  return (
    <div className="videos__container">
      <div className="videos__container__grid">
        {documents.map((doc) => (
          <VideoItem key={doc.id} doc={doc} />
        ))}
      </div>
    </div>
  );
};

export default VideosContainer;
