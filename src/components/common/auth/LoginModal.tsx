import {Input, Modal} from "@/components";
import {useModal} from "@/store/ModalContext";
import {useUser} from "@/store/AuthContext";
import {useForm} from "react-hook-form";
import {useMutation} from "@tanstack/react-query";
import {loginApiCall} from "@/api/Auth";
import {toast} from "react-toastify";
import {useBasket} from "@/hooks/useBasket";

interface Props {
    onClose: () => void;
}
interface FormData {
    identifier: string;
    password: string;
}
export const LoginModal = ({onClose}: Props) => {
    const {openModal , closeModal} = useModal()
    const {login} = useUser()
    const {uuid2user} = useBasket()
    const {register,handleSubmit,formState:{errors}} = useForm<FormData>()

    const mutate = useMutation({mutationFn:loginApiCall})

    const onSubmit = (data:FormData)=>{
        mutate.mutate(data,{
            onSuccess:(response)=>{
                console.log(response);
                login(response.jwt,response.user)
                toast.success("Login successful");
                closeModal()
                uuid2user()
            }
        })
    }
    return (
        <Modal title={"login"} closeModal={onClose}>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md"
            >
                <Input errors={errors} register={register('identifier', { required: "enter your username" })}  {...{placeholder:"username..."}} type={"text"} label={"Username"} />
                <Input errors={errors} register={register('password', { required: true,minLength:{value:3,message:"minimum 3 char needed."} })}  {...{placeholder:"password..."}} type={"password"} label={"Password"} />
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Login
                </button>
            </form>
            <span onClick={()=>openModal("register")} >go to register</span>
        </Modal>
    );
};