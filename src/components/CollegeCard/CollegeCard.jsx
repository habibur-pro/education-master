import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const CollegeCard = ({ college }) => {
    const { name, image, admission_date, events, researches_history, sports, _id } = college || {}
    console.log('college from card', college)
    return (
        <div className="group ">
            <div className="overflow-hidden">
                <img className="group-hover:scale-125 duration-300 " src={image} alt="" />
            </div>
            <div className="py-5 px-7 bg-accent text-black">
                <h3 className="text-2xl font-bold group-hover:text-primary duration-300">{name}</h3>
                <h3>{admission_date}</h3>
                <p>{researches_history}</p>
                {/* <p>{researches_history}</p>
                <p>{events}</p>
                <p>{sports}</p> */}
                <Link className="hover:tracking-[2px] duration-500 inline-flex items-center text-primary mt-2" to={`/colleges/${_id}`}>
                    Details <span className="text-xl"><HiOutlineArrowNarrowRight /></span>
                </Link>
            </div>

        </div>
    );
};

export default CollegeCard;