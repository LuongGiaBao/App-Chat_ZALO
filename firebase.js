import { initializeApp, getApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import {
  getAuth,
  getReactNativePersistence,
  RecaptchaVerifier,
  PhoneAuthProvider,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
// import { getDatabase } from "firebase/database";
import Constants from "expo-constants";
//import { AsyncStorage } from "react-native";
const firebaseConfig = {
......


};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const auth = getAuth(app, {
//   persistence: getReactNativePersistence(AsyncStorage),
// });
// const db = getFirestore(app, { experimentalForceLongPolling: true });
const db = getFirestore(app);
const storage = getStorage(app);

export { db, auth, collection, storage, RecaptchaVerifier, PhoneAuthProvider };
