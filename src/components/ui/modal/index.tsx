import React from 'react';
import { Text, View } from 'react-native';
import { ButtonComponent } from '../button';

interface IModal {
  index: number;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  handleDeleteTask: (index: number) => void;
}

export const Modal = ({ handleDeleteTask, setModalVisible, index }: IModal) => {
  return (
    <View className="flex-1 absolute top-0 left-0 w-full h-full justify-center items-center bg-[#0000007f] p-5">
      <View className="bg-white p-5 rounded-2xl flex-col">
        <Text className="text-xl text-[#1E293B] font-[600]">Delete task</Text>
        <Text className="text-sm text-[#64748B] font-[400] mt-3">Are you sure you want to delete this task? This action is irreversible.</Text>
        <View className="mt-5 flex-row justify-end">
          <ButtonComponent
            press={() => {
              setModalVisible(false);
            }}
            label="Cancel"
            className="rounded-lg px-4 py-2"
            textClassName="text-[#1D4ED8] text-sm font-[500]"
          />
          <ButtonComponent
            press={() => {
              handleDeleteTask(index);
              setModalVisible(false);
            }}
            label="Delete"
            className="rounded-lg px-4 py-2 bg-[#1D4ED8]"
            textClassName="text-white text-sm font-[500]"
          />
        </View>
      </View>
    </View>
  );
};
