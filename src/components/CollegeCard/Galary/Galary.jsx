import { useEffect, useState } from "react";
import MyContainer from "../../MyContainer/MyContainer";


const Galary = () => {
    const baseURL = import.meta.env.VITE_BASEURL;
    const [images, setImages] = useState([])
    useEffect(() => {
        fetch(`${baseURL}/galary`)
            .then(res => res.json())
            .then(data => {
                setImages(data)
                console.log('imges', data)
            })
    }, [])
    return (
        <MyContainer>
            <div>
                <h1 className="text-3xl text-center mb-20 font-bold ">Success Gallery</h1>
                <div className="grid md:grid-cols-4 gap-5 ">
                    {
                        images.map(item => <div key={item._id}
                            className=" overflow-hidden"
                        >
                            <img className="max-h-[200px] w-full hover:scale-125 shadow-lg duration-300" src={item?.image} alt="" />
                        </div>)
                    }
                </div>
            </div>
        </MyContainer>
    );
};

export default Galary;