import { initializeApp } from "firebase/app";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAZUZq7Nme4y8C1X1GKFhYFTjOlIw8_KRA",
    authDomain: "linkedin-clone-637be.firebaseapp.com",
    projectId: "linkedin-clone-637be",
    storageBucket: "linkedin-clone-637be.appspot.com",
    messagingSenderId: "1040418036639",
    appId: "1:1040418036639:web:844fe6bf6beab0ea3abbaa"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const addPost = async (post) => {
  try {
    await addDoc(collection(db, "posts"), post);
    console.log("Posted secessufully");
  } catch (e) {
    console.log(e);
  }
};

export const getPost = async () => {
  let posts = [];
  try {
    const data = await getDocs(collection(db, "posts"));
    data.forEach((doc) => posts.push({ id: doc.id, data: doc.data() }));
  } catch (e) {
    console.log(e);
  }
  return posts;
};