import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB-mLm52sEOL8IZhCmEadZFQz31nHuIAiU",
    authDomain: "prueba-real-800f7.firebaseapp.com",
    projectId: "prueba-real-800f7",
    storageBucket: "prueba-real-800f7.appspot.com",
    messagingSenderId: "224125992698",
    appId: "1:224125992698:web:127eac65f4c187f3b81343"
    };
    
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth