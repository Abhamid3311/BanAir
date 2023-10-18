import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDZe6OncrK8We8VpEZ4SsO0PrucT3JKB1k",
    authDomain: "banair.firebaseapp.com",
    projectId: "banair",
    storageBucket: "banair.appspot.com",
    messagingSenderId: "826276583483",
    appId: "1:826276583483:web:17f0f03c6399564f0c641e"
};




/* const firebaseConfig = {
    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId,
}; */

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);


/// admin@technet.com
// admin@technet.com