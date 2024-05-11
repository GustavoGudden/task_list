import { TaskModel } from '@common/types/task.model';
import { calculateTimeDifference } from '@common/utils/calculateTime';
import { formatDate } from '@common/utils/formatDate';
import { Archive, Check, Clock4 } from 'lucide-react-native';
import { Text, View } from 'react-native';

interface ITaskComponent {
  task: TaskModel;
}

export const TaskComponent = ({ task }: ITaskComponent) => {
  return (
    <View className="px-5 py-4 rounded-xl gap-2 bg-[#FFFFFF] my-2 shadow-2xl shadow-[#94A3B840] tracking-tight">
      <View className="flex-row justify-between">
        <View className="flex-col gap-1">
          <Text className={`font-[500] text-base text-slate-800 ${task.status === 'CLOSE' && 'line-through'}`}>{task.title}</Text>
          <Text className="font-[400] text-sm text-slate-500">{task.description}</Text>
        </View>
        <View>{RenderIcon(task.status)}</View>
      </View>
      <View className="border-b-[1px] border-[#E2E8F0]" />

      <View className="flex-row gap-2">
        <Text className="text-sm font-[400] text-slate-500">{calculateTimeDifference(task)}</Text>
        <Text className="font-[400] text-sm text-slate-400">{formatDate(task.initialDate)}</Text>
      </View>
    </View>
  );
};

const RenderIcon = (status: string) => {
  switch (status) {
    case 'OPEN':
      return (
        <View className="bg-slate-300 p-2 rounded-[50px]">
          <Clock4 size={14} color="#1E293B" />
        </View>
      );
    case 'ARCHIVED':
      return (
        <View className="bg-slate-300 p-2 rounded-[50px]">
          <Archive size={14} color="#1E293B" />
        </View>
      );
    case 'CLOSE':
      return (
        <View className="bg-blue-700 p-2 rounded-[50px]">
          <Check size={14} color="#fff" />
        </View>
      );
  }
};
