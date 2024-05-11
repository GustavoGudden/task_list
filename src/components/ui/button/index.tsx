import { ReactNode } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface IButtonProps extends TouchableOpacityProps {
  label: string;
  icon?: ReactNode;
  press: () => void;
  textClassName?: string;
}

export const ButtonComponent = ({ className, label, icon, press, textClassName, ...rest }: IButtonProps) => {
  return (
    <TouchableOpacity onPress={press} className={className} {...rest}>
      {icon && icon}
      <Text className={textClassName}>{label}</Text>
    </TouchableOpacity>
  );
};
