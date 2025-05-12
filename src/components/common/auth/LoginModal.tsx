import {Modal} from "@/components";

interface Props {

}

export const LoginModal = ({}: Props) => {
    return (
        <Modal title={"login"} closeModal={()=>{}}>
            <form></form>
        </Modal>
    );
};