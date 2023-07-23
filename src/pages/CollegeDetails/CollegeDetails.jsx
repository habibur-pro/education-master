import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const CollegeDetails = () => {
    const { id } = useParams()
    const [college, setCollege] = useState({})
    const baseURL = import.meta.env.VITE_BASEURL
    useEffect(() => {

        fetch(`${baseURL}/colleges/${id}`)
            .then(res => res.json())
            .then(data => setCollege(data))
    }, [])


    return (
        <div>
            <img src={college?.image} alt="" />
        </div>
    );
};

export default CollegeDetails;