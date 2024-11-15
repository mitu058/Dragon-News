import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext()
const auth = getAuth(app);

const AuthProvider = ({children}) => {  
    const [user,setUser] = useState(null)
    const creatNewUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const AuthInfo = {
        user,
        setUser,
        creatNewUser,
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;