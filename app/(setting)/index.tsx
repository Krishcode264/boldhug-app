import { View, Text } from 'react-native'
import React from 'react'
import SafeAreaWrapper from '@/components/base/SafeAreaWrapper'
import Button from '@/components/base/Button'
import { useUserState } from '@/store/userStore'
import * as SecureStorage from "expo-secure-store";
import { useRouter } from 'expo-router'

const Settings = () => {
      const { logout } = useUserState();
       const router=useRouter()
      const handleLogout = async () => {
      
        await SecureStorage.deleteItemAsync("token");
        await SecureStorage.deleteItemAsync("user");
        await SecureStorage.deleteItemAsync("resfresh_token");
        logout();
        router.replace("(auth)/Auth");
      };
  return (
    <SafeAreaWrapper>
     
     <Button onPress={handleLogout} className='bg-red-600  py-3 w-[90%] mx-auto rounded-xl '>
        <Text className='text-white text-center text-xl font-medium space-x-5'>
            Signout
        </Text>
     </Button>
    </SafeAreaWrapper>
  )
}

export default Settings