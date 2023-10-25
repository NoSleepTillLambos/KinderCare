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

  const signup = async (email, password, username, icon) => {
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

      // done after user created and profile is updated
      // update user thumbnail
      // folder name is the users uid
      const uploadPath = `icons/${res.user.uid}/${icon.name}`;
      const userImage = await projectStorage.ref(uploadPath).put(icon);
      const imgUrl = await userImage.ref.getDownloadURL();

      // add display name to user
      await res.user.updateProfile({ username, photoURL: imgUrl });

      // create a user doc
      await projectFirestore.collection("users").doc(res.user.uid).set({
        online: true,
        username,
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
