import { Text, TextInput, TextInputProps } from 'react-native';

interface IInput extends TextInputProps {
  label?: string;
}

export const InputComponent = ({ className, label, ...rest }: IInput) => {
  return (
    <>
      {label && <Text className="text-slate-600 font-[500] text-sm">{label}</Text>}
      <TextInput className={className} {...rest} />
    </>
  );
};
