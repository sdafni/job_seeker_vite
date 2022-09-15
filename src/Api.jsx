import { initializeApp } from 'firebase/app';
import { getFirestore } from "@firebase/firestore";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  setDoc
} from "firebase/firestore";// Follow this pattern to import other Firebase services


const firebaseConfig = {
  apiKey: "AIzaSyBZAyI_ON7F4VEZ_9k1ETzF4_k6qcBJ1uo",
  authDomain: "yuveta2-166505.firebaseapp.com",
  databaseURL: "https://yuveta2-166505-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "yuveta2-166505",
  storageBucket: "yuveta2-166505.appspot.com",
  messagingSenderId: "238877844764",
  appId: "1:238877844764:web:0b49af2563aa55139806d9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const jobsCollectionRef = collection(db, "jobs");



  const fetchJobs = async () => {
    const JobsColSnapshot = await getDocs(jobsCollectionRef);
    const jobsList = JobsColSnapshot.docs.map(doc => doc.data());
    return jobsList;
  }

  const addJob = async (job) => {
    const id = String(Math.floor(Math.random() * 10000) + 1);
    const newJob = { id, ...job }
    await setDoc(doc(db, "jobs", newJob.id), newJob);
    setJobs([...jobs, newJob])
  }

  const deleteJob = async (id) => {
    const jobDoc = doc(db, "jobs", id);
    await deleteDoc(jobDoc);
    setJobs(jobs.filter((job) => job.id !== id))
  }

  const updateJob = async (modifiedJob) => {
    const jobDoc = doc(db, "jobs", modifiedJob.id);
    await updateDoc(jobDoc, modifiedJob);
    setJobs(jobs.map(j => modifiedJob.id === j.id ? Object.assign(j, modifiedJob) : j))
  }

  export {updateJob, deleteJob, addJob, fetchJobs };