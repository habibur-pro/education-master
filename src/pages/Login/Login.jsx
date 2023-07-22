import PageHeader from "../../components/PageHeader/PageHeader";


const Login = () => {
    return (
        <div className="py-20">
            <PageHeader title={"Login"}></PageHeader>
            <form className="md:w-1/2 mx-auto border py-16 px-12 rounded mt-10" action="">
                <div className="mb-7">
                    <label className="font-semibold" htmlFor="">First Name</label>
                    <input className="p-3 block border outline-primary outline-1 w-full mt-2" type="text" placeholder="First Name" />
                </div>
                <button className="btn btn-block btn-primary mt-10">Submit</button>
            </form>
        </div>
    );
};

export default Login;