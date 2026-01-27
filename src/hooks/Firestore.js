
import { db } from "@/firebase/confic"
import { addDoc, collection, getDocs, query, where, updateDoc, doc } from "firebase/firestore"

export const useFirestore = (fbCollections) => {

    const collectionRef = collection(db, fbCollections)

    // //  CREATE

    const createDocument = async (data) => {
        try {
            const docRef = await addDoc(collectionRef, data);
            console.log("Document successfully written!", docRef.id);
        } catch (error) {
            console.error("Error writing document: ", error);
        }
    }

    // //  READ

    const getDocument = async () => {
        try {
            const q = query(collectionRef);
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
            });
        } catch (error) {
            console.error("Error reading document: ", error);
        }
    }

    // //  UPDATE

    const updateDocument = async (id, data) => {
        try {
            const docRef = doc(db, fbCollections, id);
            await updateDoc(docRef, data);
            console.log("Document successfully updated!");
        } catch (error) {
            console.error("Error updating document: ", error);
        }
    }

    // //  DELETE

    const deleteDocument = async (id) => {
        try {
            const docRef = doc(db, fbCollections, id);
            await deleteDoc(docRef);
            console.log("Document successfully deleted!");
        } catch (error) {
            console.error("Error deleting document: ", error);
        }
    }

    return {
        createDocument,
        getDocument,
        updateDocument,
        deleteDocument
    }

}

