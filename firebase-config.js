// Firebase web config. Never add service-account private keys or passwords here.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
export const ADMIN_UID = "rDDW4TmIvNVlqTgzHGCpAAHkIPU2";
const firebaseConfig = {
 apiKey:"AIzaSyCJMtm6qwB9GKeCSyMvhHwafdWcnP4r47c",
 authDomain:"new-hi-tech-computer-institute.firebaseapp.com",
 projectId:"new-hi-tech-computer-institute",
 storageBucket:"new-hi-tech-computer-institute.firebasestorage.app",
 messagingSenderId:"805608766416",
 appId:"1:805608766416:web:2698bb85eca8e52c1057d5",
 measurementId:"G-C40NWPRL7L"
};
export const app=initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);
