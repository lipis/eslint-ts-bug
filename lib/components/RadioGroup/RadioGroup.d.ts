import { FlexProps } from "../Flex";
import { OptionProps } from "./RadioItem";
interface RadioGroupProps extends FlexProps {
    options: OptionProps[];
    defaultValue?: any;
    value?: any;
    disabled?: any[];
    onChange?: (value: any) => void;
    style?: object;
    css?: any;
    className?: string;
}
declare const RadioGroup: (props: RadioGroupProps) => JSX.Element;
export default RadioGroup;
