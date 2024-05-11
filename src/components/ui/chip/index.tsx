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
        <Text className={`${isSelect ? 'text-[#1D4ED8]' : 'text-[#64748B]'} font-[400] text-[14px] mr-1`}>{label}</Text>
        <View className={`px-1 ${isSelect ? 'bg-[#1D4ED8]' : 'bg-[#CBD5E1]'} rounded-lg justify-center`}>
          <Text className={`font-[400] text-[12px] text-white`}>{number}</Text>
        </View>
      </View>
      {isSelect && <View className="border-l  border-[#CBD5E1]" />}
    </View>
  );
};
