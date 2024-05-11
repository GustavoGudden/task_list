import { TaskModel } from '@common/types/task.model';
import { ButtonComponent } from '@components/ui/button';
import { InputComponent } from '@components/ui/input';
import { Calendar, GripHorizontal } from 'lucide-react-native';
import { Text, View } from 'react-native';
import { formatDate } from '@common/utils/formatDate';

interface INewTaskForm {
  newtaskForm: TaskModel;
  setTaskForm: React.Dispatch<React.SetStateAction<TaskModel>>;
  HandleCreateTask: (task: TaskModel) => void;
  showDatepicker: (currentValue: Date | null) => void;
  oncloseBottomSheet: () => void;
}

export const NewTaskForm = ({ newtaskForm, setTaskForm, HandleCreateTask, oncloseBottomSheet, showDatepicker }: INewTaskForm) => {
  return (
    <View className="flex-col  pt-3 px-5 pb-8 rounded-t-xl">
      <View className="items-center">
        <GripHorizontal color={'#64748B'} size={20} />
      </View>
      <View className="flex-col mt-5">
        <Text className="font-[600] text-xl text-slate-800 mb-1">Create a new task</Text>
        <Text className="font-[400] text-sm text-slate-500">Organize your tasks with us!</Text>
      </View>
      <View className="mt-5">
        <InputComponent
          label="Title"
          placeholder="Drink water"
          className="rounded-lg px-4 py-3 mt-[2px] mb-3 border-[1px] border-slate-300 w-full text-slate-500"
          onChangeText={(text) => setTaskForm((prevValue) => ({ ...prevValue, title: text }))}
        />
        <InputComponent
          label="Description"
          placeholder="It is very important"
          className="rounded-lg px-4 py-3 mt-[2px] mb-3 border-[1px] border-slate-300 w-full text-slate-500"
          onChangeText={(text) => setTaskForm((prevValue) => ({ ...prevValue, description: text }))}
        />
        <InputComponent
          label="Initial date"
          placeholder="mm/dd/YYYY - hh:mm"
          className="rounded-lg px-4 py-3 mt-[2px] mb-3 border-[1px] border-slate-300 w-full text-slate-500"
          onPress={() => showDatepicker(newtaskForm.initialDate)}
          value={formatDate(newtaskForm.initialDate)}
        />
        <InputComponent
          label="End date"
          placeholder="mm/dd/YYYY - hh:mm"
          className="rounded-lg px-4 py-3 mt-[2px] mb-3 border-[1px] border-slate-300 w-full text-slate-500"
          onPress={() => showDatepicker(newtaskForm.endDate)}
          value={formatDate(newtaskForm.endDate)}
        />
      </View>
      <View className="mt-5">
        <ButtonComponent
          label="Create task"
          press={() => {
            HandleCreateTask(newtaskForm);
          }}
          className="rounded-lg px-4 items-center py-3 bg-blue-700"
          textClassName="font-[500] text-sm text-white"
        />
        <ButtonComponent
          label="Cancel"
          press={oncloseBottomSheet}
          className="rounded-lg px-4 mt-2  py-3 items-center bg-slate-200"
          textClassName="font-[500] text-sm text-slate-800"
        />
      </View>
    </View>
  );
};
