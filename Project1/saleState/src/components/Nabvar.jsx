import { IoMailOpenSharp } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";

const Navbar = () => {
  return (
    <>
      <nav className="w-[80vw]  m-auto  ">
        <div className=" flex flex-col sm:flex-row  justify-between  items-center py-2  border-b-2 border-gray-600 ">
          <ul className="flex gap-3 text-md text-gray-600">
            <li className="uppercase">Login</li>
            <li className="uppercase">Registers</li>
          </ul>
          <ul className="flex sm:gap-4 flex-col sm:flex-row  sm:text-sm items-center text-lg text-gray-800">
            <li className="flex gap-2 justify-center items-center">
              <IoMailOpenSharp />
              info@realState.in
            </li>
            <li className="flex gap-1  justify-center items-center">
              <IoIosCall />
              1800-1243-876
            </li>
          </ul>
        </div>

        <div className="flex justify-between items-center my-6">
          <span className="text-3xl font-extrabold ">
            INTENSE <span className="text-yellow-300 text-sm">real State</span>
          </span>
          <ul className="flex gap-6 text-2xl uppercase font-bold ">
            <li className="cursor-pointer hover:text-yellow-100 border-b-yellow-400 hover:">
              Home
            </li>
            <li className="cursor-pointer hover:text-yellow-100 border-b-yellow-400 hover:">
              Catalog
            </li>
            <li className="cursor-pointer hover:text-yellow-100 border-b-yellow-400 hover:">
              Submit Property
            </li>
            <li className="cursor-pointer hover:text-yellow-100 border-b-yellow-400 hover:">
              Services
            </li>
            <li className="cursor-pointer hover:text-yellow-100 border-b-yellow-400 hover:">
              About
            </li>
            <li className="cursor-pointer hover:text-yellow-100 border-b-yellow-400 hover:">
              Contact
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
