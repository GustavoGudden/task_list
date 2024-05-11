import { TaskModel } from '@common/types/task.model';
import { ButtonComponent } from '@components/ui/button';
import { InputComponent } from '@components/ui/input';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { GripHorizontal } from 'lucide-react-native';
import { Text, View } from 'react-native';

import { formatDate } from '@common/utils/formatDate';

interface INewTaskForm {
  newtaskForm: TaskModel;
  setTaskForm: React.Dispatch<React.SetStateAction<TaskModel>>;
  HandleCreateTask: (task: TaskModel) => void;
  oncloseBottomSheet: () => void;
}

export const NewTaskForm = ({ newtaskForm, setTaskForm, HandleCreateTask, oncloseBottomSheet }: INewTaskForm) => {
  function handleCreate() {
    HandleCreateTask(newtaskForm);
  }

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setTaskForm((prevValue) => ({ ...prevValue, initialDate: currentDate }));
  };

  const showDatepicker = (currentValue: Date | null) => {
    if (currentValue === null) {
      return;
    }
    DateTimePickerAndroid.open({
      value: currentValue,
      onChange,
      mode: 'date',
    });
  };

  return (
    <View className="flex-col w-full pt-3 px-5 pb-8 rounded-t-xl ">
      <View className="items-center">
        <GripHorizontal color={'#64748B'} size={20} />
      </View>
      <View className="flex-col mt-5">
        <Text className="font-[600] text-xl text-[#1E293B] mb-1">Create a new task</Text>
        <Text className="font-[400] text-sm text-[#64748B]">Organize your tasks with us!</Text>
      </View>
      <View className="mt-5">
        <InputComponent
          label="Title"
          placeholder="Drink water"
          onChangeText={(text) => setTaskForm((prevValue) => ({ ...prevValue, title: text }))}
          className=" h-[40px] rounded-lg px-3 py-2 mt-1 mb-3 border-[1px] border-[#CBD5E1] w-full text-[#64748B]"
        />
        <InputComponent
          label="Description"
          placeholder="It is very important"
          onChangeText={(text) => setTaskForm((prevValue) => ({ ...prevValue, description: text }))}
          className=" h-[40px] rounded-lg px-3 py-2 mt-1 mb-3 border-[1px] border-[#CBD5E1] w-full text-[#64748B]"
        />
        <InputComponent
          label="Initial date"
          placeholder="mm/dd/YYYY - hh:mm"
          onPress={() => showDatepicker(newtaskForm.initialDate)}
          value={formatDate(newtaskForm.initialDate)}
          className="rounded-lg h-[40px] px-3 py-2 mt-1 mb-3 border-[1px] border-[#CBD5E1] w-full text-[#64748B]"
        />
        <InputComponent
          label="End date"
          placeholder="mm/dd/YYYY - hh:mm"
          onPress={() => showDatepicker(newtaskForm.endDate)}
          value={formatDate(newtaskForm.initialDate)}
          className=" h-[40px] rounded-lg px-3 py-2 mt-1 mb-3 border-[1px] border-[#CBD5E1] w-full text-[#64748B]"
        />
      </View>
      <View className="mt-5">
        <ButtonComponent
          label="Create task"
          press={handleCreate}
          className="rounded-lg px-4 items-center py-3 bg-[#1D4ED8]"
          textClassName="font-[500] text-sm text-white"
        />
        <ButtonComponent
          label="Cancel"
          press={oncloseBottomSheet}
          className="rounded-lg px-4 mt-2  py-3 items-center bg-[#E2E8F0]"
          textClassName="font-[500] text-sm text-[#1E293B]"
        />
      </View>
    </View>
  );
};
