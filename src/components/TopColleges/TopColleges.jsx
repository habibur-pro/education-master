import { useEffect, useState } from "react";
import MyContainer from "../MyContainer/MyContainer";
import CollegeCard from "../CollegeCard/CollegeCard";


const TopColleges = () => {
    const [colleges, setColleges] = useState([])

    useEffect(() => {
        const baseURL = import.meta.env.VITE_BASEURL
        fetch(`${baseURL}/colleges`)
            .then(res => res.json())
            .then(data => setColleges(data))
    }, [])

    return (
        <div className="my-20">
            <MyContainer>
                <div>
                    <h1 className="text-center text-3xl font-bold">Top Colleges</h1>
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                        {
                            colleges.map(college => <CollegeCard
                                key={college._id}
                                college={college}
                            ></CollegeCard>)
                        }
                    </div>
                </div>
            </MyContainer>
        </div>
    );
};

export default TopColleges;