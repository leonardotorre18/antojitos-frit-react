import { initializeApp } from "firebase/app";

export const initFirebaseConfig =  () => {
  
  const firebaseConfig = {
    apiKey: "AIzaSyCMFVc50RjJtBXZ47doPYmYL6x9Wg4sKiQ",
    authDomain: "areadepruebas1234.firebaseapp.com",
    projectId: "areadepruebas1234",
    storageBucket: "areadepruebas1234.appspot.com",
    messagingSenderId: "763398738955",
    appId: "1:763398738955:web:999048253b1b36ef67630e",
    measurementId: "G-2P5N9TC75S"
  };
  
  const firebaseApp  = initializeApp(firebaseConfig);
  
}