export interface InputProps {
    label?: string;
    name?: string;
    value?: string;
    defaultValue?: string;
    type?: string;
    autoFocus?: boolean;
    onBlur?: (e: any) => void;
    onChange?: (e: any) => void;
    onFocus?: (e: any) => void;
    error?: string;
    instructions?: string;
    disabled?: boolean;
    icon?: string;
    isLabelRaised?: boolean;
    labelStyles?: object;
    inputStyles?: object;
    styles?: object;
    gutterStyles?: object;
}
