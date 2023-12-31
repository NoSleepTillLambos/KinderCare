import { useEffect, useState } from "react";
import { projectFirestore } from "../Firebase/firebaseConfig";

export const useDocument = (collection, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ref = projectFirestore.collection(collection).doc(id);

    const unsubscribe = ref.onSnapshot(
      (snapshot) => {
        if (snapshot.data()) {
          setDocument({ ...snapshot.data(), id: snapshot.id });
          setError(null);
        } else {
          setError("Doc does not exist");
        }
      },
      (err) => {
        console.log(err.message);
        setError("oops");
      }
    );

    return () => unsubscribe();
  }, [collection, id]);

  return { document, error };
};
