import { ButtonComponent } from '@components/ui/button';
import { Archive, Check, GripHorizontal, Trash2 } from 'lucide-react-native';
import { Text, TouchableOpacity, View } from 'react-native';

interface IOptionsTask {
  index: number;
  handleFinishTask: (index: number) => void;
  handleArhivedTask: (index: number) => void;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const OptionsTask = ({ index, setOpenModal, handleArhivedTask, handleFinishTask }: IOptionsTask) => {
  return (
    <View className="flex-col w-full pt-3 px-5 pb-8  rounded-t-xl ">
      <View className="items-center">
        <GripHorizontal color={'#64748B'} size={20} />
      </View>
      <View className="mt-4">
        <Text className="text-xl font-[600] text-slate-800">Options</Text>
      </View>
      <View className="mt-4">
        <TouchableOpacity onPress={() => handleFinishTask(index)}>
          <View className="flex-row border-b py-4 border-slate-300">
            <Check size={20} color="#64748B" />
            <Text className="font-[400] text-sm text-slate-800 ml-3">Finish</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleArhivedTask(index)}>
          <View className="flex-row border-b py-4 border-slate-300">
            <Archive size={20} color="#64748B" />
            <Text className="font-[400] text-sm text-slate-800 ml-3">Archive</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setOpenModal(true)}>
          <View className="flex-row  py-4 ">
            <Trash2 size={20} color="#64748B" />
            <Text className="font-[400] text-sm text-slate-800 ml-3">Delete</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View className="mt-4">
        <ButtonComponent
          label="Cancel"
          press={() => {}}
          className="rounded-lg px-4 mt-2  py-3 items-center bg-slate-200"
          textClassName="font-[500] text-sm text-slate-800"
        />
      </View>
    </View>
  );
};
