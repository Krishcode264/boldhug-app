import {View, Text, Platform, KeyboardAvoidingView, Pressable, TouchableHighlight, Alert} from 'react-native';
import React, {useState, type Dispatch, type SetStateAction} from 'react';
import Input from '@/components/base/Input';
import {ScrollView} from 'react-native';
import Button from '@/components/base/Button';
import {Plus, SendIcon} from 'lucide-react-native';
import * as ImagePicker from 'expo-image-picker';
import {
  launchCamera,
  launchImageLibrary,
  type Asset,
  type ImagePickerResponse,
} from 'react-native-image-picker';
import MessageInputMediaAttachment from './MessageInputMediaAttachment';
import { ImagePickerAsset } from 'expo-image-picker';

type AddFileButtonProps = {
  setAttachments: Dispatch<SetStateAction<ImagePickerAsset[]>>;
};

const AddFileButton = ({setAttachments}: AddFileButtonProps) => {
 

  async function handleImagePicker() {
 
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (status !== 'granted') {
      Alert.alert('Permission Required', 'Please allow access to your media library in settings.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsMultipleSelection: true, 
      allowsEditing: true,
      aspect: [4, 3],
      selectionLimit: 5, 
      quality: 1,
    });

  //  console.log(result);

    if (!result.canceled && result.assets.length > 0) {
      setAttachments(prev => {
        const newfiles = result.assets?.filter(
          newfile =>
            !prev.some(
              prevItem => prevItem.fileName == newfile.fileName,
            ),
        );
      

        return [...prev, ...(newfiles as ImagePickerAsset[] | [])];
      });
    }
  }

  return (
    <Button
      onPress={handleImagePicker}
      className="bg-violet-100 mt-1 h-12 w-12 rounded-xl flex items-center justify-center">
      <Plus  color="black" size={25}/>
    </Button>
  );
};

const ChatInput = () => {
  const [mediaAttachements, setMediaAttachments] = useState<ImagePickerAsset[]>([]);
  return (
    <View className="bg-violet-200 p-2  gap-2">
      {mediaAttachements.length > 0 && (
        <MessageInputMediaAttachment
          setAttachments={setMediaAttachments}
          assets={mediaAttachements}
        />
      )}

      <View className=" p-2  flex flex-row items-start gap-2">
        <AddFileButton setAttachments={setMediaAttachments} />
        <Input
          multiline={true}
          placeholder="write a message "
          className=" text-black bg-violet-100 pl-1 flex-1 text-xl   w- rounded-xl"
        />
        <TouchableHighlight
         
          activeOpacity={0.6}
          
          className="flex items-center justify-center mt-1 bg-violet-300 h-12 w-12 rounded-full">
          <SendIcon fill="white"   />
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default ChatInput;
