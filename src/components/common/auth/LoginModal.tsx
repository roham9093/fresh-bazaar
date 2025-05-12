import {Modal} from "@/components";
import {useModal} from "@/store/ModalContext";

interface Props {
    onClose: () => void;
}

export const LoginModal = ({onClose}: Props) => {
    const {openModal} = useModal()

    return (
        <Modal title={"login"} closeModal={onClose}>
            <form>
            </form>
            <span onClick={()=>openModal("register")} >go to register</span>
        </Modal>
    );
};