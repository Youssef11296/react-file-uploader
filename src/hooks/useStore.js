/* eslint-disable no-unused-expressions */
import {useState, useEffect} from 'react';
import {appStore} from '../firebase';

const useStore = collection => {
  const [documents, setDocuments] = useState ([]);
  useEffect (
    () => {
      const unset = appStore
        .collection (collection)
        .orderBy ('createdAt', 'desc')
        .onSnapshot (snap => {
          let videos = [];
          snap.forEach (doc => {
            videos.push ({...doc.data (), id: doc.id});
          });
          console.log ({videos});
          setDocuments (videos);
        });
      return () => unset ();
    },
    [collection]
  );
  return {documents};
};

export default useStore;
