import { FlexProps } from "../Flex";
interface ModalProps extends FlexProps {
    children: JSX.Element | JSX.Element[];
    isOpen: boolean;
    onClose?: () => void;
}
declare const Modal: React.SFC<ModalProps>;
export default Modal;
