import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const CollegeCard = ({ college }) => {
    const { name, image, admission_date, events, researches_history, sports, _id } = college || {}
    console.log('college from card', college)
    return (
        <div>
            <img src={image} alt="" />
            <div className="p-5 bg-base-100">
                <h3 className="text-2xl">{name}</h3>
                <h3>{admission_date}</h3>
                <p>{researches_history}</p>
                {/* <p>{researches_history}</p>
                <p>{events}</p>
                <p>{sports}</p> */}
            </div>
            <Link to={`/colleges/${_id}`}>
                <button className="btn btn-primary btn-link hover:tracking-[2px] duration-500 ">Details <span className="text-xl"><HiOutlineArrowNarrowRight /></span></button>
            </Link>
        </div>
    );
};

export default CollegeCard;