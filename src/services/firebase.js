import { firebase, FieldValue } from "../lib/firebase";

const doesUsernameExist = async (username) => {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("username", "==", username)
    .get();

  console.log("result.docs", result.docs);

  return result.docs.map((user) => user.data().length > 0);
};

export default doesUsernameExist;
