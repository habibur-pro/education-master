import PageHeader from "../../components/PageHeader/PageHeader";
import { Controller, useForm } from "react-hook-form"
import useAuth from "../../hooks/useAuth";

const Register = () => {
    const { loginEmailPassword, registerEmailPassword } = useAuth()


    const {
        register,
        watch,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm()

    const password = watch('password', '');

    const onSubmit = (data) => {
        const { email, password } = data;
        registerEmailPassword(email, password)
            .then(result => console.log('user', result))
    }


    return (
        <div className="py-20">
            <PageHeader title={"Register"}></PageHeader>
            <form onSubmit={handleSubmit(onSubmit)} className="md:w-1/2 mx-auto border py-16 px-12 rounded mt-10" action="">
                <div className=" md:grid grid-cols-2 gap-10">
                    <div className=" ">
                        {/* first name field  */}
                        <div className="mb-7">
                            <label className="font-semibold" htmlFor="">First Name</label>
                            <input
                                {...register("firstName", { required: "First Name is required" })}
                                className="p-3 block border outline-primary outline-1 w-full mt-2" type="text" placeholder="First Name" />
                            {errors.firstName && <span className="text-red-500 text-sm" role="alert">{errors.firstName.message}</span>}

                        </div>
                        {/* last name field  */}
                        <div className="mb-7">
                            <label className="font-semibold" htmlFor="">Mobile</label>
                            <input
                                {...register("mobile", { required: "Mobile is required" })}
                                className="p-3 block border outline-primary outline-1  w-full mt-2" type="number" placeholder="Mobile" />
                            {errors.mobile && <span className="text-red-500 text-sm" role="alert">{errors.mobile.message}</span>}
                        </div>
                        {/* password  field  */}
                        <div className="mb-7">
                            <label className="font-semibold" htmlFor="">Password</label>
                            <Controller
                                name="password"
                                defaultValue=""
                                control={control}
                                rules={{
                                    required: 'Password is required',
                                    pattern: {
                                        value: /^(?=.*\d)(?=.*[^a-zA-Z0-9]).{6,}$/,
                                        message: "password must be 6 character, one number and one spacial character",
                                    }
                                }}
                                render={({ field }) => (
                                    <input
                                        className="p-3 block border outline-primary outline-1  w-full mt-2"
                                        placeholder="Password"
                                        type="password" {...field} />
                                )}
                            />
                            {errors.password && <span className="text-sm text-red-500">{errors.password.message}</span>}
                        </div>

                    </div>
                    <div>
                        {/* Last name field  */}
                        <div className="mb-7">
                            <label className="font-semibold" htmlFor="">Last Name</label>
                            <input
                                {...register("lastName", { required: "Last is required" })}
                                className="p-3 block border outline-primary outline-1  w-full mt-2" type="text" placeholder="Last Name" />
                            {errors.lastName && <span className="text-red-500 text-sm" role="alert">{errors.lastName.message}</span>}
                        </div>

                        {/* Email field  */}
                        <div className="mb-7">
                            <label className="font-semibold" htmlFor="">Email</label>
                            <input
                                {...register("email", { required: "Email is required" })}
                                className="p-3 block border outline-primary outline-1 w-full mt-2" type="email" placeholder="Email" />
                            {errors.email && <span className="text-red-500 text-sm" role="alert">{errors.email.message}</span>}
                        </div>

                        {/* confirm password field  */}
                        <div className="mb-7">
                            <label className="font-semibold" htmlFor="">Confirm Password</label>
                            <Controller
                                name="confirmPassword"
                                defaultValue=""
                                control={control}
                                rules={{
                                    required: 'Confirm password is required',
                                    validate: (value) => value === password || 'Confirm Passwords do not match',
                                }}
                                render={({ field }) => (
                                    <input
                                        className="p-3 block border outline-primary outline-1 w-full mt-2"
                                        placeholder="Confirm Password"
                                        type="password" {...field} />
                                )}
                            />
                            {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>}
                        </div>
                    </div>
                </div>
                <button className="btn btn-block btn-primary mt-10">Register</button>
            </form>
        </div>
    );
};

export default Register;