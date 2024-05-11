import { Text, View } from 'react-native';

interface IChipsProps {
  label: string;
  number?: string;
  isSelect?: boolean;
}

export const ChipComponent = ({ label, number, isSelect }: IChipsProps) => {
  return (
    <View className="flex-row align-baseline ">
      <View className={`${isSelect && 'mr-2 '} flex-row `}>
        <Text className={`${isSelect ? 'text-blue-700' : 'text-slate-500'} font-[400] text-sm mr-1`}>{label}</Text>
        <View className={`px-1 ${isSelect ? 'bg-blue-700' : 'bg-slate-300'} rounded-lg justify-center`}>
          <Text className={`font-[400] text-sm text-white`}>{number}</Text>
        </View>
      </View>
      {isSelect && <View className="border-l  border-slate-300" />}
    </View>
  );
};
