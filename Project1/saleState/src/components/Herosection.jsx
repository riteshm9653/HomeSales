import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

const imgArray = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2s",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];
const Herosection = () => {
  return (
    <div>
      <Swiper className="w-full sm:h-[80vh] relative">
        <div className="  w-[50vw] mx-auto  z-10 items-center  top-72   bottom-52  justify-center left-52 right-48 absolute flex flex-col gap-14">
          <h2 className="text-center  text-white  text-2xl sm:text-9xl font-semibold  ">
            Find your Dream Home
          </h2>
          <div className="border sm:shrink-0  flex justify-around w-[70%] mx-auto">
            <input
              type="search"
              name=""
              id=""
              className="  py-7 text-gray-800  sm:text-2xl
               px-8  bg-white  rounded-lg  outline-none w-[70%]"
              placeholder="Search by City  or Address "
            />
            <button className="bg-yellow-400 text-xl sm:px-6  rounded-2xl w-[25%] text-white font-extrabold uppercase">
              Search
            </button>
          </div>
        </div>
        {imgArray.map(({ img, id }) => (
          <SwiperSlide
            className="text-center  z-20 font-[18px] flex justify-center items-center "
            key={id}
          >
            <img
              className=" block w-full h-full object-cover  brightness-50"
              src={img}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Herosection;
