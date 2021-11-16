import {useState, useEffect} from 'react';
import {appStorage} from '../firebase';

const useStorage = file => {
  const [progress, setProgress] = useState (0);
  const [error, setError] = useState (null);
  const [url, setUrl] = useState (null);

  useEffect (
    () => {
      const storageRef = appStorage.ref (file.name);

      storageRef.put (file).on (
        'state_changed',
        snap => {
          //   const {bytesTransferred, totalBytes} = snap;
          let percentage = snap.bytesTransferred / snap.totalBytes * 100;
          setProgress (percentage);
        },
        error => {
          setError (error);
        },
        async () => {
          const downloadUrl = await storageRef.getDownloadURL ();
          setUrl (downloadUrl);
        }
      );
    },
    [file]
  );

  return {progress, error, url};
};

export default useStorage;
