import React from 'react';


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
                        <p className="mt-1  text-lg font-medium text-center lg:text-start ">{review.user_name}</p>
                        <p className="mt-1  text-lg text-primary font-medium text-center lg:text-start ">{review.college}</p>
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