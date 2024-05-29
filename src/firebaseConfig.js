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

/*TEST
const firebaseConfig = {
  apiKey: "AIzaSyCiT98xvswfP0VwveQ4HaY43r27-t2i2Gk",
  authDomain: "eventodroneswepyapp.firebaseapp.com",
  projectId: "eventodroneswepyapp",
  storageBucket: "eventodroneswepyapp.appspot.com",
  messagingSenderId: "71191491181",
  appId: "1:71191491181:web:3bc7a30350d6f4d73b0564",
  measurementId: "G-0NBHZSK000"
};*/

const app = initializeApp(firebaseConfig);
export default app;
