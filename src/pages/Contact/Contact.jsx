/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
const Contact = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state?.data);
  }, [location]);

  const [successMsg,] = useState("");

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Contact" prevLocation={prevLocation} />
      {successMsg ? (
        <p className="pb-20 w-96 font-medium text-green-500">{successMsg}</p>
      ) : (
        <div className="mx-auto max-w-[1920px]">
          <div className="gap-5 px-0 pb-2 lg: xl:max-w-screen-xl flex flex-col md:flex-row w-full">
            <div className="mb-6 lg:border lg:rounded-md border-gray-300 lg:p-7 w-1/4">
              <h4 className="text-2xl md:text-lg font-bold text-heading pb-7 md:pb-10 lg:pb-6 -mt-1">Find us here</h4>
              <div className="flex pb-7 gap-3 ">
                <div className="flex flex-shrink-0 justify-center items-center p-1.5 border rounded-md border-gray-300 w-10 h-10"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path></svg>
                </div>
                <div className="flex flex-col ltr:pl-3 rtl:pr-3 ltr:2xl:pl-4 rtl:2xl:pr-4">
                  <h5 className="text-sm font-bold text-heading">Address</h5>
                  <a
                    href="https://www.google.com/maps?q=Lebanon,Beirut"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm mt-0"
                  >
                    Lebanon, Beirut
                  </a>
                </div>
              </div>
              <div className="flex pb-7 gap-3">
                <div className="flex flex-shrink-0 justify-center items-center p-1.5 border rounded-md border-gray-300 w-10 h-10">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M424 80H88a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h336a56.06 56.06 0 0056-56V136a56.06 56.06 0 00-56-56zm-14.18 92.63l-144 112a16 16 0 01-19.64 0l-144-112a16 16 0 1119.64-25.26L256 251.73l134.18-104.36a16 16 0 0119.64 25.26z"></path>
                  </svg>
                </div>
                <div className="flex flex-col ltr:pl-3 rtl:pr-3 ltr:2xl:pl-4 rtl:2xl:pr-4"><h5 className="text-sm font-bold text-heading">Email</h5>
                  <a className="text-sm mt-0" href="mailto:rami@gmail.com">rami@gmail.com</a>
                </div>
              </div>
              <div className="flex pb-7 gap-3">
                <div className="flex flex-shrink-0 justify-center items-center p-1.5 border rounded-md border-gray-300 w-10 h-10">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M478.94 370.14c-5.22-5.56-23.65-22-57.53-43.75-34.13-21.94-59.3-35.62-66.52-38.81a3.83 3.83 0 00-3.92.49c-11.63 9.07-31.21 25.73-32.26 26.63-6.78 5.81-6.78 5.81-12.33 4-9.76-3.2-40.08-19.3-66.5-45.78s-43.35-57.55-46.55-67.3c-1.83-5.56-1.83-5.56 4-12.34.9-1.05 17.57-20.63 26.64-32.25a3.83 3.83 0 00.49-3.92c-3.19-7.23-16.87-32.39-38.81-66.52-21.78-33.87-38.2-52.3-43.76-57.52a3.9 3.9 0 00-3.89-.87 322.35 322.35 0 00-56 25.45A338 338 0 0033.35 92a3.83 3.83 0 00-1.26 3.74c2.09 9.74 12.08 50.4 43.08 106.72 31.63 57.48 53.55 86.93 100 133.22S252 405.21 309.54 436.84c56.32 31 97 41 106.72 43.07a3.86 3.86 0 003.75-1.26A337.73 337.73 0 00454.35 430a322.7 322.7 0 0025.45-56 3.9 3.9 0 00-.86-3.86z"></path></svg>
                </div>
                <div className="flex flex-col ltr:pl-3 rtl:pr-3 ltr:2xl:pl-4 rtl:2xl:pr-4">
                  <h5 className="text-sm font-bold text-heading">Phone</h5>
                  <a className="text-sm mt-0" href="tel:+96171425839">+961 71 425 839</a>
                </div>
              </div>
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89105.2155378261!2d35.4725049462394!3d33.905299401195286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f17215880a78f%3A0x729182bae99836b4!2sBeirut%2C%20Libanon!5e0!3m2!1sde!2sde!4v1705519341428!5m2!1sde!2sde"
                referrerpolicy="no-referrer-when-downgrade"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
              {/* <img src="/assets/images/map-image.jpg" alt="Map" className="rounded-md" /> */}
            </div>
            <div className="md:w-full lg:w-3/5 2xl:w-4/6 flex h-full ltr:md:ml-7 rtl:md:mr-7 flex-col ltr:lg:pl-7 rtl:lg:pr-7">
              <div className="flex pb-7 gap-3 md:pb-9 mt-7 md:-mt-1.5"><h4 className="text-2xl 2xl:text-3xl font-bold text-heading">Get in touch</h4>
              </div>
              <form className="w-full mx-auto flex flex-col justify-center " >
                <div className="flex flex-col space-y-5 gap-x-3">
                  <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 gap-x-3">
                    <div className="w-full md:w-1/2 ">
                      <label for="name" className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer">Your Name (required)</label>
                      <input id="name" name="name" type="text" placeholder="Enter Your Name" className="py-2 px-4 md:px-5 w-full appearance-none  border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md" autocomplete="off" spellcheck="false" aria-invalid="false" />
                    </div>
                    <div className="w-full md:w-1/2 ltr:md:ml-2.5 rtl:md:mr-2.5 ltr:lg:ml-5 rtl:lg:mr-5 mt-2 md:mt-0"><label for="email" className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer">Your Email (required)</label>
                      <input id="email" name="email" type="email" placeholder="Enter Your Email" className="py-2 px-4 md:px-5 w-full appearance-none  border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md" autocomplete="off" spellcheck="false" aria-invalid="false" />
                    </div>
                  </div>
                  <div className="relative">
                    <label for="subject" className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer">Subject</label>
                    <input id="subject" name="subject" type="text" placeholder="Enter Your Subject" className="py-2 px-4 md:px-5 w-full appearance-none  border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md" autocomplete="off" spellcheck="false" aria-invalid="false" />
                  </div>
                  <div className="relative mb-4">
                    <label for="message" className="block text-gray-600 font-semibold text-sm leading-none mb-3">Message</label><textarea id="message" name="message" className="px-4 py-3 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 bg-white border border-gray-300 focus:shadow  focus:border-heading placeholder-body" autocomplete="off" spellcheck="false" rows="4" placeholder="Write your message here">

                    </textarea>
                  </div>
                  <div className="relative">
                    <button data-variant="flat" className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none rounded-md  bg-heading text-white px-3 md:px-3 lg:px-6 py-2 md:py-1.5 lg:py-2 hover:text-white hover:bg-gray-600 hover:shadow-cart h-12 lg:h-14 mt-1 text-sm lg:text-base w-full sm:w-auto bg-primeColor" type="button">Send Message</button>
                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Contact;
