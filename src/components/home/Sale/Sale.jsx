import React from "react";
import { Link } from "react-router-dom";
import {
  saleImgOne,
  saleImgTwo,
  saleImgThree,
} from "../../../assets/images/index";
import Image from "../../designLayouts/Image";

const Sale = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 grid-rows-1 gap-3 md:gap-5 xl:gap-7">


      <div className="row-span-full lg:row-span-2 col-span-full lg:col-span-2 cursor-pointer group flex flex-col  rounded-md relative items-center justify-between overflow-hidden transform transition-transform duration-300 hover:scale-105">
        <div className="flex justify-center  p-4 h-full 3xl:min-h-[330px] relative group">
          <Link to="/slim-threads/shop" className="block max-w-full">
            <span className="absolute left-5 top-3.5 md:top-5 3xl:top-7 ltr:left-3.5 rtl:right-3.5 ltr:md:left-5 rtl:md:right-5 ltr:3xl:left-7 rtl:3xl:right-7 bg-heading text-white text-10px md:text-sm leading-5 rounded-md inline-block px-2 xl:px-3 pt-0.5 pb-1 font-bold bg-black m-2 group-hover:opacity-0 transition-opacity duration-300">
              50%
            </span>
            <span className="absolute inset-0 m-4 bg-heading text-white text-9xl md:text-4xl leading-5 rounded-md inline-flex items-center justify-center font-bold bg-black-transparent opacity-0 group-hover:opacity-100 duration-300">
              50%
            </span>

            <Image className="max-w-full h-auto rounded transition-opacity duration-300 hover:opacity-80" imgSrc={saleImgOne} alt="Sale Image" />
          </Link>

        </div>
      </div>


      <div className="col-span-2 lg:col-span-1 cursor-pointer group flex flex-col rounded-md relative items-center justify-between overflow-hidden transform transition-transform duration-300 hover:scale-105">
        <div className="flex justify-center items-center p-4 h-full 3xl:min-h-[330px]  relative group">
          <Link to="/slim-threads/shop">
            <span className="absolute left-5 top-3.5 md:top-5 3xl:top-7 ltr:left-3.5 rtl:right-3.5 ltr:md:left-5 rtl:md:right-5 ltr:3xl:left-7 rtl:3xl:right-7 bg-heading text-white text-10px md:text-sm leading-5 rounded-md inline-block px-2 xl:px-3 pt-0.5 pb-1 font-bold bg-black m-2 group-hover:opacity-0 transition-opacity duration-300">
              15%
            </span>
            <span className="absolute inset-0 m-4 bg-heading text-white text-9xl md:text-4xl leading-5 rounded-md inline-flex items-center justify-center font-bold bg-black-transparent opacity-0 group-hover:opacity-100 duration-300">
              15%
            </span>

            <Image className="rounded w-full object-cover" imgSrc={saleImgTwo} />
          </Link>
        </div>
      </div>

      <div className="col-span-2 lg:col-span-1 cursor-pointer group flex flex-col  rounded-md relative items-center justify-between overflow-hidden transform transition-transform duration-300 hover:scale-105">
        <div className="flex justify-center items-center p-4 h-full 3xl:min-h-[330px]  relative group">
          <Link to="/slim-threads/shop">
            <span className="absolute left-5 top-3.5 md:top-5 3xl:top-7 ltr:left-3.5 rtl:right-3.5 ltr:md:left-5 rtl:md:right-5 ltr:3xl:left-7 rtl:3xl:right-7 bg-heading text-white text-10px md:text-sm leading-5 rounded-md inline-block px-2 xl:px-3 pt-0.5 pb-1 font-bold bg-black m-2 group-hover:opacity-0 transition-opacity duration-300">
              33%
            </span>
            <span className="absolute inset-0 m-4 bg-heading text-white text-9xl md:text-4xl leading-5 rounded-md inline-flex items-center justify-center font-bold bg-black-transparent opacity-0 group-hover:opacity-100 duration-300">
              33%
            </span>

            <Image
              className="rounded w-full object-cover"
              imgSrc={saleImgThree}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sale;
