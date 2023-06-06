import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, where, getDocs, addDoc } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyBRVaz22ElV9u2RM2DMqc7G7FRxPcfN9Zg",
    authDomain: "talki-about-db-954fa.firebaseapp.com",
    databaseURL: "https://talki-about-db-954fa-default-rtdb.firebaseio.com",
    projectId: "talki-about-db-954fa",
    storageBucket: "talki-about-db-954fa.appspot.com",
    messagingSenderId: "533971252485",
    appId: "1:533971252485:web:34e59f3d706087b106b36c"
};

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const usersRef = collection(db,"usuarios");

  export const queryUser = async ({
    email,
    password
  }:{
    email: string;
    password: string;
  }) => {
    try {
        const q = query(usersRef, where("email", "==", email),where("password","==",password));
        const querySnapshot = await getDocs(q);
        console.log(querySnapshot);

        querySnapshot.forEach((doc:any) => {
            console.log(doc.id,"=>",doc.data());
        });
        
        return !querySnapshot.empty;
    } catch (error) {
        return false;
    }
  }

  export const addUser = async ({
    email,
    password
  }:{
    email: string;
    password: string;
  }) => {
    try {
        if(email != "" && password != ""){
          const docRef = await addDoc(collection(db,"usuarios"),{
              email,
              password
          });
          return true;
        }
    } catch (error) {
        return false;
    }
  }

  export const addPost = async ({
    username,
    image,
    comment
  }:{
    username: string;
    image: string;
    comment: string;
  }) => {
    try {
        await addDoc(collection(db,"posts"),{
          user: username,
          viewers: 0,
          comments: 0,
          pictureprofile: "https://yt3.ggpht.com/GUW78kIdMM2mVjl-c1rkSD8DqNYSRZAfTUTie3j4xKFN6agTpdb9UiMDGwQB2yuoDpKB1a8QNn8=s900-c-k-c0x00ffffff-no-rj",
          ubi: "Cali, Valle",
          content: image,
          likes: "7777 Likes",
          description: comment,
          coments: "View all 10 coments",
          date: 'Just now',
          time: Date.now(),
        });
        return true;
    } catch (error) {
        return false;
    }
  }

  export const getPosts = async () => {
    try {
      const posts: { user: string, viewers: number, comments: number, pictureprofile: string, ubi: string, content: string, likes: string, description: string, coments: string, date: string, time: number }[] = [];
      const querySnapshot = await getDocs(collection(db, 'posts'));
      querySnapshot.forEach((post:any) => {
        posts.push(post.data());
        console.log(post.data());
      });
      return posts;
    } catch (error) {
      console.error(error);
      alert('Ocurrió un error');
    }
  }
  
