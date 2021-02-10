import firebase from './firebase';

const firestore = firebase.firestore();

  {/**create new user and add on firestore */}
export function addUser(uid, data) {
    return firestore
    .collection('users')
    .doc(uid)
    .set({uid, ...data}, { merge: true });
}

 {/**create new site and add on firestore */}
export function addSite(data) {
  return firestore
  .collection('sites')
  .add(data);
}