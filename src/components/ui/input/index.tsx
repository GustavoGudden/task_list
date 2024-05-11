import { View } from 'lucide-react-native';
import { Text, TextInput, TextInputProps } from 'react-native';

interface IInput extends TextInputProps {
  label?: string;
}

export const InputComponent = ({ className, label, ...rest }: IInput) => {
  return (
    <>
      {label && <Text className="text-[#475569] font-[500] text-sm">{label}</Text>}
      <TextInput className={className} {...rest} />
    </>
  );
};
