import { MdLocalShipping } from "react-icons/md";
import { CgRedo } from "react-icons/cg";

const BannerBottom = () => {
  return (
    <div className="w-full bg-white border-[1px] border-b-gray-200 py-4 px-4 rounded-md ">
      <div className="max-w-container mx-auto h-20 grid grid-cols-3  gap-2.5 lg:gap-5 xl:gap-7">
        <div className="flex items-center gap-2 w-auto shadow-md p-4 rounded-md bg-md-gray">
          <span className="w-6 text-center text-base font-bold sm:text-xs md:text-base lg:text-lg xl:text-xl">2</span>
          <p className="text-black text-base font-bold sm:text-xs md:text-base lg:text-lg xl:text-xl">Two years warranty</p>
        </div>
        <div className="flex w-auto items-center gap-2  shadow-md p-4 rounded-md bg-dark-gray">
          <span className="text-2xl text-center w-6">
            <CgRedo color="white" />
          </span>
          <p className="text-white text-base font-bold sm:text-xs md:text-base lg:text-lg xl:text-xl ">Return policy in 30 days</p>
        </div>
        <div className="flex w-auto items-center gap-2  shadow-md p-4 rounded-md bg-slim-red">
          <span className="text-xl text-center w-6 ml-1">
            <MdLocalShipping color="white" />
          </span>
          <p className="text-white text-base font-bold sm:text-xs md:text-base lg:text-lg xl:text-xl">Free shipping</p>
        </div>

      </div>
    </div>

  );
};

export default BannerBottom;
