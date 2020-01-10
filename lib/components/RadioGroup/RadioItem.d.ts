export interface OptionProps {
    checked?: boolean;
    onChange?: (value: any) => void;
    label?: string | number;
    disabled?: boolean;
    value?: any;
}
declare const RadioItem: (props: OptionProps) => JSX.Element;
export default RadioItem;
