import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDTpgzgmeVlimeGpiUiQ0YNgJA-yQrh2kM",
  authDomain: "bistro-boss-restaurant-webapp.firebaseapp.com",
  projectId: "bistro-boss-restaurant-webapp",
  storageBucket: "bistro-boss-restaurant-webapp.appspot.com",
  messagingSenderId: "450286666689",
  appId: "1:450286666689:web:eff61d704092b275f86540"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);