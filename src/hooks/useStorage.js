import {useState, useEffect} from 'react';
import {appStorage, appStore, timestamp} from '../firebase';

const useStorage = file => {
  const [progress, setProgress] = useState (0);
  const [error, setError] = useState (null);
  const [url, setUrl] = useState (null);

  useEffect (
    () => {
      const storageRef = appStorage.ref (file.name);
      const collectionRef = appStore.collection ('videos');

      storageRef.put (file).on (
        'state_changed',
        snap => {
          const {bytesTransferred, totalBytes} = snap;
          let percentage = bytesTransferred / totalBytes * 100;
          setProgress (percentage);
        },
        error => {
          setError (error);
        },
        async () => {
          const downloadUrl = await storageRef.getDownloadURL ();

          const createdAt = timestamp ();
          if (downloadUrl)
            return collectionRef.add ({createdAt, url: downloadUrl});

          // appStore.collection ('videos').doc (file.name).set ({
          //   url: downloadUrl,
          // });
          setUrl (downloadUrl);
        }
      );
    },
    [file, url]
  );

  return {progress, error, url};
};

export default useStorage;
