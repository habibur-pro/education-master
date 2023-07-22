import PageHeader from "../../components/PageHeader/PageHeader";


const Register = () => {
    return (
        <div className="py-20">
            <PageHeader title={"Register"}></PageHeader>
            <form className="md:w-1/2 mx-auto border py-16 px-12 rounded mt-10" action="">
                <div className=" md:grid grid-cols-2 gap-10">
                    <div className=" ">
                        <div className="mb-7">
                            <label className="font-semibold" htmlFor="">First Name</label>
                            <input className="p-3 block border outline-primary outline-1 w-full mt-2" type="text" placeholder="First Name" />
                        </div>
                        <div className="mb-7">
                            <label className="font-semibold" htmlFor="">Mobile</label>
                            <input className="p-3 block border outline-primary outline-1  w-full mt-2" type="number" placeholder="Mobile" />
                        </div>
                        <div className="mb-7">
                            <label className="font-semibold" htmlFor="">Password</label>
                            <input className="p-3 block border outline-primary outline-1  w-full mt-2" type="password" placeholder="Password" />
                        </div>

                    </div>
                    <div>
                        <div className="mb-7">
                            <label className="font-semibold" htmlFor="">Last Name</label>
                            <input className="p-3 block border outline-primary outline-1  w-full mt-2" type="text" placeholder="Last Name" />
                        </div>

                        <div className="mb-7">
                            <label className="font-semibold" htmlFor="">Email</label>
                            <input className="p-3 block border outline-primary outline-1 w-full mt-2" type="email" placeholder="Email" />
                        </div>

                        <div className="mb-7">
                            <label className="font-semibold" htmlFor="">Confirm Password</label>
                            <input className="p-3 block border outline-primary outline-1 w-full mt-2" type="password" placeholder="Confirm Password" />
                        </div>
                    </div>
                </div>
                <button className="btn btn-block btn-primary mt-10">Register</button>
            </form>
        </div>
    );
};

export default Register;