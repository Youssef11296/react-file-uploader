// Modules & Hooks
import useStorage from "../../hooks/useStorage";
// Styles
import "./ProgressBar.scss";

const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = useStorage(file);

  console.log(progress);
  if (url) {
    setTimeout(() => {
      setFile(null);
    }, 5000);
    console.log(url);
  }
  return (
    <div className="progress__bar" style={{ width: progress + "%" }}></div>
  );
};

export default ProgressBar;
