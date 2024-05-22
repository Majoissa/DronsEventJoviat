import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBwLnpAS3D78hfKuHkTSGAEhXdvcoox3zU",
  authDomain: "eventodronesapp.firebaseapp.com",
  databaseURL:
    "https://eventodronesapp-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "eventodronesapp",
  storageBucket: "eventodronesapp.appspot.com",
  messagingSenderId: "66405580784",
  appId: "1:66405580784:web:dce3fba1ac207e5a492735",
  measurementId: "G-GWZP3RY712",
};

const app = initializeApp(firebaseConfig);
export default app;
