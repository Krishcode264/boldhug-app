import {View, Text} from 'react-native';
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction,
} from 'react';
import { User } from '@/constants/Types';
import { getValueFromEcriptedStorage } from '@/util/appStorage';



type AuthStateType = {
  isLoggedIn: boolean;
  user: Partial<User|null>
};
type AuthContextType = {
  authState: AuthStateType;
  loading:boolean;
  setLoading:Dispatch<SetStateAction<boolean>>
  setAuthState: Dispatch<SetStateAction<AuthStateType>>;
};
const AuthContext = createContext<AuthContextType | null>(null);
const AuthProvider = ({children}: {children: React.ReactNode}) => {
  const [authState, setAuthState] = useState<AuthStateType>({
    isLoggedIn:false,
    user:null
  });
  const [loading,setLoading]=useState(true)

  useEffect(() => {
    (async () => {
      try {
      //  console.log("something triggered auth context use effect ")
        const storedUserString = await getValueFromEcriptedStorage("user");
        const accessToken = await getValueFromEcriptedStorage("refresh_token");
        //    console.log(storedUserString,"storegd user string ")
        if (storedUserString && accessToken) {
          try {
            const user: User = JSON.parse(storedUserString);
            if (user) {
              setAuthState({ isLoggedIn: true,  user });
              setLoading(false)
              return; 
            }
          } catch (error) {
            console.error("Failed to parse user data:", error);
          }
        }

      
        setAuthState({ isLoggedIn: false, user: null });
        setLoading(false)
      } catch (error) {
        console.error("Error fetching auth data:", error);
        setAuthState({ isLoggedIn: false,user: null });
        setLoading(false)
      }
    })();
  }, []);

  return (
    <AuthContext.Provider value={{authState, setAuthState,loading,setLoading}}>
      {children}
    </AuthContext.Provider>
  );
};

export function getAuthContext():AuthContextType {
  const authState = useContext(AuthContext);
  if (authState) {
    return authState;
  } else {
    throw new Error('some thing wrong with auth context');
  }
}
export default AuthProvider;
