import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCbyZ5Zi4bLri-kv1WKmCMsrKV4wbt_-bY",
  authDomain: "bottomfunnel-f4760.firebaseapp.com",
  projectId: "bottomfunnel-f4760",
  storageBucket: "bottomfunnel-f4760.appspot.com",
  messagingSenderId: "1081513569547",
  appId: "1:1081513569547:web:a8c804c09b545cb1fe060e",
  measurementId: "G-WSW54PFP4M"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 