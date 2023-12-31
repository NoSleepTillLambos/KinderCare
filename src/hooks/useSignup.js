import { useState, useEffect } from "react";
import {
  projectAuth,
  projectStorage,
  projectFirestore,
} from "../Firebase/firebaseConfig";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, displayName, icon) => {
    setError(null);
    setIsPending(true);

    try {
      // signup
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      if (!res) {
        throw new Error("OOPS!!! Could not complete signup");
      }

      const uploadPath = `icons/${res.user.uid}/${icon.name}`;
      const userImage = await projectStorage.ref(uploadPath).put(icon);
      const imgUrl = await userImage.ref.getDownloadURL();

      await res.user.updateProfile({ displayName, photoURL: imgUrl });

      await projectFirestore.collection("users").doc(res.user.uid).set({
        online: true,
        displayName,
        notes: [],
        photoURL: imgUrl,
      });

      // dispatch login action
      dispatch({ type: "LOGIN", payload: res.user });

      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { signup, error, isPending };
};
