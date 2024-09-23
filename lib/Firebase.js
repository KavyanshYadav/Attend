// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, getDoc, getDocs, doc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDb3iOKWbrgc19dR4KPHzo_tmCNZiaGjHc",
  authDomain: "attend-5a127.firebaseapp.com",
  projectId: "attend-5a127",
  storageBucket: "attend-5a127.appspot.com",
  messagingSenderId: "431381387908",
  appId: "1:431381387908:web:b08f8aef325bb4fbe6c0d1",
  measurementId: "G-9M7HZ1NDSG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)



export const FirebaseGetUser = async() =>{
    try {
        const userdoc = doc(collection(db,"users"))
    } catch (error) {
        
    }
}

export const CreateAssigment = async(Name,DateTime,Subject,Priority,Completed) =>{
    try {
        await addDoc(collection(db,"fgh"),{
            Name:Name,
            DateTime:DateTime,
            Subject:Subject,
            Priority:Priority,
            Completed:Completed

        })
    } catch (error) {
        
    }
}

export const getAssigments =async() =>{
    try {
        const data = await getDocs(collection(db,"fgh"));
        const datarray = []
        data.forEach(element => {
            datarray.push({id:element.id,...element.data()})
        });
        return datarray
    } catch (error) {
        console.log(error)
    }
}