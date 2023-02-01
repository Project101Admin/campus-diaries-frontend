import {FC} from 'react';
type ButtonProps = {
  title: string;
  navigation?: () => null;
};

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  return <button className="bg-violet-500 rounded-lg text-white  px-8 py-3  whitespace-nowrap">{props.title}</button>;
};

export default Button;
