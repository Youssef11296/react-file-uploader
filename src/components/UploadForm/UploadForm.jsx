// Modules & Hooks
import { useState } from "react";
// Components
import ProgressBar from "../ProgressBar/ProgressBar";
// Styles
import "./UploadForm.scss";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  // Change Handler
  const changeHandler = (e) => {
    const selected = e.target.files[0];

    // Specify the file types
    // For the purpose of the app The user can only upload videos
    const types = ["video/mp3", "video/mp4"];

    // Checking if the uploaded file is a video or not
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError(null);
    } else {
      setError("Please, select a video only (mp3, mp4)");
      setFile(null);
    }
  };

  return (
    <form className="upload__form">
      <div className="input__field">
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </div>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
        {file && <div className="file">{file.name}</div>}
      </div>
    </form>
  );
};

export default UploadForm;
