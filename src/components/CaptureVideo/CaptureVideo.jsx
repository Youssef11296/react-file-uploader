// Modules & Hooks
import { useState } from "react";
import img from "../../assets/images/video-camera.png";
// Styles
import "./CaptureVideo.scss";

const CaptureVideo = ({ setOverlay }) => {
  const [playing, setPlaying] = useState(false);

  // let video = document.getElementById("#video");
  const [stream, setStream] = useState(null);

  const startRec = () => {
    setPlaying(true);
    var constraints = { audio: true, video: { width: 1280, height: 720 } };
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(function (mediaStream) {
        var video = document.querySelector("video");

        video.srcObject = mediaStream;
        video.onloadedmetadata = function (e) {
          video.play();
        };
        setStream(video);
      })
      .catch(function (err) {
        console.log(err.name + ": " + err.message);
      });
    setOverlay(true);
  };

  function stopRec() {
    const streamRec = stream.srcObject;
    const tracks = streamRec.getTracks();

    tracks.forEach(function (track) {
      track.stop();
    });

    setPlaying(false);
    setOverlay(false);
    console.log("Stop");
    streamRec.srcObject = null;
  }

  return (
    <div className="capture__video">
      <div className="capture__video__option">
        <img
          onClick={startRec}
          src={img}
          alt="Capture a video with your camera"
        />
      </div>
      {playing ? (
        <div className="video__record__container">
          <video id="video" width={800} height={800} autoPlay muted />
          <button onClick={stopRec}>Stop</button>
        </div>
      ) : null}
    </div>
  );
};

export default CaptureVideo;
