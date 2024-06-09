import { getAuth, loginWithEmailAndPassword } from "firebase/auth";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

export const loginWithEmailAndPassword = async (email, password) => {
    try{
        const auth = getAuth();
        const userCredential = await loginWithEmailAndPassword(auth, email, password);
        return getUserData(userCredential);

    }catch(error) {
        console.log("Error logging in: ", error);
        throw error;
    }
}

export const registerWithEmailAndPassword = async (email, password) => {
    try {
        const auth = getAuth();
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return getUserData(userCredential);
    }catch(error) {
        console.log("Error register in: ", error);
        throw error;
    }
}


const getUserData = (userCredential) => {
    const user = userCredential.user;
    const token = user.stsTokenManager.accessToken;
    console.log("Token: ",token);
    console.log("User logged in: ", user);

    return userData = { user, token };
}