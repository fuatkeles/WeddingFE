import React, { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkIzXinHFttht3PczCiB-Yjj_BX3s2JEM",
  authDomain: "efwedding-6d4fa.firebaseapp.com",
  projectId: "efwedding-6d4fa",
  storageBucket: "efwedding-6d4fa.appspot.com",
  messagingSenderId: "132300325486",
  appId: "1:132300325486:web:c2a6cc1935f733ebc79c7f",
  measurementId: "G-YEFYNV4TRV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function ImageUpload() {
  const [file, setFile] = useState(null);

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onUpload = () => {
    const storage = getStorage(app);
    const storageRef = ref(storage, 'images/' + file.name);
    uploadBytes(storageRef, file).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    });
  };

  return (
    <div>
      <input type="file" onChange={onFileChange} />
      <button onClick={onUpload}>Upload</button>
    </div>
  );
}

export default ImageUpload;