import PageHeader from "../../components/PageHeader/PageHeader";
import { useForm } from "react-hook-form"
import useAuth from "../../hooks/useAuth";

const Login = () => {
    const { loginEmailPassword } = useAuth()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        loginEmailPassword(data?.email, data?.password)
            .then(result => console.log('login successful', result))
    }



    return (
        <div className="py-20">
            <PageHeader title={"Login"}></PageHeader>
            <form onSubmit={handleSubmit(onSubmit)} className="md:w-1/3 mx-auto border py-16 px-12 rounded mt-10" action="">
                <div className="mb-7">
                    <label className="font-semibold" htmlFor="">Email</label>
                    <input
                        {...register("email", { required: "Email is required" })}
                        className="p-3 block border outline-primary outline-1 w-full mt-2" type="email" placeholder="Email" />
                    {errors.email && <span className="text-red-500 text-sm" role="alert">{errors.email.message}</span>}
                </div>
                <div className="mb-7">
                    <label className="font-semibold" htmlFor="">Password</label>
                    <input
                        {...register("password", {
                            required: 'password is required', pattern: {
                                value: /^(?=.*\d)(?=.*[^a-zA-Z0-9]).{6,}$/,
                                message: "password must be 6 character, one number and one spacial character",
                            }
                        })}
                        className="p-3 block border outline-primary outline-1 w-full mt-2" type="password" placeholder="Password" />
                    {errors.password && <span className="text-red-500 text-sm" role="alert">{errors.password.message}</span>}
                </div>
                <button className="btn btn-block btn-primary mt-10">Login</button>
            </form>
        </div>
    );
};

export default Login;