import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration with environment variable override options
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyC4hjTn_aKYXIHiNKLFKRwS6yoFdMTGdw4",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "gen-lang-client-0290291257.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "gen-lang-client-0290291257",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "gen-lang-client-0290291257.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "462047911490",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:462047911490:web:04c0b5fa0a9880640a17db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);

// Initialize Cloud Firestore database with custom database ID from config if present
const databaseId = import.meta.env.VITE_FIREBASE_FIRESTORE_DB_ID || "ai-studio-jamshedpurconnec-8a251e34-55bc-4071-9e1e-c466b8a7428f";
export const db = getFirestore(app, databaseId);

export default app;
