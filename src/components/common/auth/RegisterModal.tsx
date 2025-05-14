import {Input, Modal} from "@/components";
import {useForm} from "react-hook-form";
import {useMutation} from "@tanstack/react-query";
import {registerApiCall} from "@/api/Auth";
import {useUser} from "@/store/AuthContext";
import {toast} from "react-toastify";
import {useModal} from "@/store/ModalContext";
import {useBasket} from "@/hooks/useBasket";

interface Props {
    onClose: () => void;
}
interface FormData {
    username: string;
    password: string;
    email: string;
}
export const RegisterModal = ({onClose}: Props) => {
    const {closeModal} = useModal()
    const {login} = useUser()
    const {uuid2user} = useBasket()

    const {register,handleSubmit,formState:{errors}} = useForm<FormData>()

    const mutate = useMutation({mutationFn:registerApiCall})

    const onSubmit = (data:FormData)=>{
        mutate.mutate(data,{
            onSuccess:(response)=>{
                console.log(response);
                login(response.jwt,response.user)
                toast.success("Register successful");
                closeModal()
                uuid2user()
            }
        })
    }

    return (
        <Modal title={"register"} closeModal={onClose}>
            <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md"
            >
                <Input errors={errors} register={register('username', { required: "enter your username" })}  {...{placeholder:"username..."}} type={"text"} label={"Username"} />
                <Input errors={errors} register={register('email', { required: "enter your email" })}  {...{placeholder:"email..."}} type={"email"} label={"Email"} />
                <Input errors={errors} register={register('password', { required: true,minLength:{value:3,message:"minimum 3 char needed."} })}  {...{placeholder:"password..."}} type={"password"} label={"Password"} />

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Register
                </button>
             </form>
        </Modal>
    );
};