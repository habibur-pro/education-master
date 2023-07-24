import Rating from 'react-rating';
import { IoStarSharp } from "react-icons/io5";

const ReviewItem = ({ review }) => {
    return (
        <>
            <blockquote className="rounded-lg bg-accent  text-black p-8">
                <div className="lg:flex items-center gap-4 ">
                    <img
                        alt="Man"
                        src={review.user_image}
                        className="h-16 w-16 rounded-full object-cover mx-auto lg:mx-0 text-center lg:text-start"
                    />
                    <div>
                        <p className="mt-1 capitalize text-lg font-medium text-center lg:text-start ">{review.user_name}</p>
                        <p className=" capitalize text-lg text-primary font-medium text-center lg:text-start ">{review.college}</p>
                        <Rating className="mt-2"
                            readonly
                            placeholderRating={3.5}
                            emptySymbol={<IoStarSharp className="icon text-slate-300" />}
                            placeholderSymbol={<IoStarSharp className="icon text-primary" />}
                            fullSymbol={<IoStarSharp className="icon text-primary" />}
                        />
                    </div>
                </div>
                <p className="line-clamp-2 sm:line-clamp-none mt-4 ">
                    {review.reviewed}
                </p>
            </blockquote>
        </>
    );
};

export default ReviewItem;