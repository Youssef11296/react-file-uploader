import ReactPlayer from "react-player";
import "./VideoItem.scss";

const VideoItem = ({ doc }) => {
  return (
    <div className="video__item">
      <ReactPlayer controls url={doc.url} />
    </div>
  );
};

export default VideoItem;
