import {Modal} from "@/components";

interface Props {
    onClose: () => void;
}

export const RegisterModal = ({onClose}: Props) => {
    return (
        <Modal title={"register"} closeModal={onClose}>
            <form>
                
            </form>
        </Modal>
    );
};