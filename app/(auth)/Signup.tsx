import {View, Text, Image, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import type {LoginStateType} from './Login';


import { useRouter } from 'expo-router';
import { getAuthContext } from '@/context/AuthContext';
import Button from '@/components/base/Button';
import GoogleAuth from '@/components/auth/GoogleAuth';
import BrandLogo from '@/components/base/BrandLogo';
import InputBox from '@/components/base/Input';



export type SignupStateType = {
identifier:string
};
const Signup = () => {
  const navigation = useNavigation();
  const AuthState = getAuthContext();
  const [signupState, setSignupState] = useState<SignupStateType>({
  identifier:""
  });
const loading=false;
const router=useRouter()
  const handleSignup = async () => {
    // try {
   

   
    //     AuthState.setAuthState({
    //       user: userdata,
    //       isLoggedIn: true,
    //     });
    //     AuthState.setLoading(false)
    //   }
    // } catch (err) {
    //   AuthState.setLoading(false)
    //   console.error('Signup failed', err);
    // }
  };

  return (
    <SafeAreaView className=" w-full px-4 h-[75%]  my-auto  ">
      <BrandLogo />
      <InputBox
        editable={!loading}
        placeholder="Your Name"
        value={signupState.identifier}
        className=" w-[95%]  bg-gray-200 h-16 text-xl text-black font-semibold rounded-2xl     "
        onChangeText={text =>
          setSignupState(prev => ({...prev, userName: text}))
        }
      />
      {/* <InputBox
        editable={!loading}
        placeholder="Your Email  "
        className=" w-[95%] mt-4   bg-gray-200 h-16 text-xl text-black font-semibold rounded-2xl     "
        value={signupState.email}
        onChangeText={text => setSignupState(prev => ({...prev, email: text}))}
      />
      <InputBox
        editable={!loading}
        placeholder="Enter Password"
        value={signupState.password}
        className=" w-[95%] mb-6 mt-4  bg-gray-200 h-16 text-xl text-black font-semibold rounded-2xl     "
        onChangeText={text =>
          setSignupState(prev => ({...prev, password: text}))
        }
      /> */}

      <Button
        disabled={loading}
        title={loading ? 'Signing you in...' : 'Sign up'}
        className="  bg-violet-500 w-full   mb-3 mx-auto   rounded-2xl  "
        textStyle="text-2xl text-white  font-semibold "
        onPress={handleSignup}
      />
      <GoogleAuth />

      <Button
        title="continue with Login"
        onPress={() => {
          router.push("/(auth)/Login")
        }}
        className=" mt-3 bg-violet-500 w-full mb-3 mx-auto   rounded-2xl  "
        textStyle="text-2xl text-white  font-semibold "
      />
    </SafeAreaView>
  );
};

export default Signup;
