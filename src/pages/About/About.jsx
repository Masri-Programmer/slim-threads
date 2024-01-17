import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
// import {
//   rami1,
//   rami2,
//   rami3,
// } from "../../assets/images/index";
// import Image from "../../components/designLayouts/Image";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state?.data);
  }, [location]);

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About" prevLocation={prevLocation} />

      <div className="pb-10 grid grid-flow-col sm:grid-flex-row">
        <div>
          <h1 className="max-w-[600px] text-base text-lightText mb-2">
            <span className="text-primeColor font-semibold text-lg">SLIM THREADS</span>{" "}
            is one of the worlds leading ecommerce brands and is localy
            recognized for celebrating the essence of classic Worldwide cool
            looking style.
          </h1>
          <Link to="/slim-threads/shop">
            <button className="rounded-md w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
              Continue Shopping
            </button>
          </Link>
        </div>
        {/* <div className="flex flex-col">
          <p className="flex  gap-3 px-2.5 text-xl font-bold">
            Founder: <p className="font-bold text-xl font-mono">Rami Slim</p>
          </p>
          <div className="px-2.5 grid grid-cols-3 mx-auto">
            <Image className="w-full h-full rounded aspect-square object-contain" imgSrc={rami2} />
            <Image className="w-full h-full rounded aspect-square object-contain" imgSrc={rami1} />
            <Image className="w-full h-full rounded aspect-square object-contain" imgSrc={rami3} />
          </div>
        </div> */}

      </div>
    </div>
  );
};

export default About;
