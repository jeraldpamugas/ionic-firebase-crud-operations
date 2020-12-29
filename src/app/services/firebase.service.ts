import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root",
})
export class FirebaseService {
  collectionName = "Students";
  collectionMessage = "Messages";

  constructor(private firestore: AngularFirestore) {}

  create_student(record) {
    return this.firestore.collection(this.collectionName).add(record);
  }

  read_students() {
    return this.firestore.collection(this.collectionName).snapshotChanges();
  }

  update_student(recordID, record) {
    this.firestore.doc(this.collectionName + "/" + recordID).update(record);
  }

  delete_student(record_id) {
    this.firestore.doc(this.collectionName + "/" + record_id).delete();
  }

  create_Message(record) {
    return this.firestore.collection(this.collectionMessage).add(record);
  }

  read_Messages() {
    return this.firestore.collection(this.collectionMessage).snapshotChanges();
  }

  update_Message(recordID, record) {
    this.firestore.doc(this.collectionMessage + "/" + recordID).update(record);
  }

  delete_Message(record_id) {
    this.firestore.doc(this.collectionMessage + "/" + record_id).delete();
  }
}
