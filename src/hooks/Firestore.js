
import { db } from "@/firebase/confic"
import { addDoc, collection, getDocs, query, where, updateDoc, doc, deleteDoc } from "firebase/firestore"

export const useFirestore = (fbCollections) => {

    const createDocument = async (data) => {
        try {
            const collectionRef = collection(db, fbCollections)
            const docRef = await addDoc(collectionRef, data);
            console.log("Document successfully written!", docRef.id);
            return docRef.id;
        } catch (error) {
            console.error("Error writing document: ", error);
            throw error;
        }
    }

    const getDocument = async () => {
        try {
            const collectionRef = collection(db, fbCollections)
            const q = query(collectionRef);
            const querySnapshot = await getDocs(q);
            const docs = [];
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                docs.push({ id: doc.id, ...doc.data() });
            });
            return docs;
        } catch (error) {
            console.error("Error reading document: ", error);
            throw error;
        }
    }

    const updateDocument = async (id, data) => {
        try {
            const docRef = doc(db, fbCollections, id);
            await updateDoc(docRef, data);
            console.log("Document successfully updated!");
        } catch (error) {
            console.error("Error updating document: ", error);
            throw error;
        }
    }

    const deleteDocument = async (id) => {
        try {
            const docRef = doc(db, fbCollections, id);
            await deleteDoc(docRef);
            console.log("Document successfully deleted!");
        } catch (error) {
            console.error("Error deleting document: ", error);
            throw error;
        }
    }

    return {
        createDocument,
        getDocument,
        updateDocument,
        deleteDocument
    }
}
