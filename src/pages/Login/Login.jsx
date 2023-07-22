import PageHeader from "../../components/PageHeader/PageHeader";
import { useForm } from "react-hook-form"

const Login = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => console.log(data)



    return (
        <div className="py-20">
            <PageHeader title={"Login"}></PageHeader>
            <form onSubmit={handleSubmit(onSubmit)} className="md:w-1/3 mx-auto border py-16 px-12 rounded mt-10" action="">
                <div className="mb-7">
                    <label className="font-semibold" htmlFor="">Email</label>
                    <input
                        {...register("email", { required: true, maxLength: 30 })}
                        className="p-3 block border outline-primary outline-1 w-full mt-2" type="email" placeholder="Email" />
                </div>
                <div className="mb-7">
                    <label className="font-semibold" htmlFor="">Password</label>
                    <input
                        {...register("password", { required: true, maxLength: 30 })}
                        className="p-3 block border outline-primary outline-1 w-full mt-2" type="password" placeholder="Password" />
                </div>
                <button className="btn btn-block btn-primary mt-10">Login</button>
            </form>
        </div>
    );
};

export default Login;