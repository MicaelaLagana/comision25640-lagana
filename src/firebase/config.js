import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAIp04_U-iQKLgzYl2PBmTqaAwhaLEWQKY",
    authDomain: "sinnarn-49d35.firebaseapp.com",
    projectId: "sinnarn-49d35",
    storageBucket: "sinnarn-49d35.appspot.com",
    messagingSenderId: "269933749451",
    appId: "1:269933749451:web:0523d27efbfe75b5d5a74e"
  };
  
  const app = initializeApp(firebaseConfig);
  
  export default function getFirestoreApp(){
      return app
  }