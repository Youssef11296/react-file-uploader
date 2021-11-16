// Components
import UploadForm from "../../components/UploadForm/UploadForm";
import VideosContainer from "../../components/VideosContainer/VideosContainer";
// Styles
import "./Home.scss";

const Home = () => {
  return (
    <div className="home__screen">
      <UploadForm />
      <h1>Your gallery</h1>
      <VideosContainer />
    </div>
  );
};

export default Home;
