// Components
import UploadForm from "../../components/UploadForm/UploadForm";
import CaptureVideo from "../../components/CaptureVideo/CaptureVideo";
import VideosContainer from "../../components/VideosContainer/VideosContainer";
// Styles
import "./Home.scss";

const Home = ({ overlay, setOverlay }) => {
  return (
    <div className="home__screen">
      {overlay ? <div className="overlay"></div> : null}

      <div className="options">
        <UploadForm />
        <CaptureVideo setOverlay={setOverlay} />
      </div>
      <h1>Your gallery</h1>
      <VideosContainer />
    </div>
  );
};

export default Home;
