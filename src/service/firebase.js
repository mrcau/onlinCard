//파이어베이스 임포트 설정
import firebase from 'firebase';

const firebaseConfig = {
  apiKey:process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain:process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL:process.env.REACT_APP_FIREBASE_DB_URL,
  projectId:process.env.REACT_APP_FIREBASE_PROJECT_ID,
};
// Initialize Firebase
const firebaseApp= firebase.initializeApp(firebaseConfig);
//설정한 firebase 기초 설정 값을 firebaseApp 에 담아 익스포트
export default firebaseApp;