import React, { useEffect, useState, } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { useSelector } from "react-redux";
import { HiMenuAlt2 } from "react-icons/hi";
import { motion } from "framer-motion"
import { logo } from "../../../assets/images";
import Image from "../../designLayouts/Image";
import { navBarList } from "../../../constants";
import Flex from "../../designLayouts/Flex";
import { paginationItems } from "../../../constants";

const Header = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(true);
  const [sidenav, setSidenav] = useState(false);
  // const [category, setCategory] = useState(false);
  // const [brand, setBrand] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const products = useSelector((state) => state.orebiReducer.products);
  const [showUser, setShowUser] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    // Perform any other search-related actions here
  };


  useEffect(() => {
    let ResponsiveMenu = () => {
      if (window.innerWidth < 667) {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }
    };
    ResponsiveMenu();
    window.addEventListener("resize", ResponsiveMenu);
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredProducts([]);
      return;
    }

    const filtered = paginationItems.filter((item) => {
      const lowerCaseSearchQuery = searchQuery.toLowerCase();
      const productNameMatch = item.productName.toLowerCase().includes(lowerCaseSearchQuery);
      const descriptionMatch = item.des.toLowerCase().includes(lowerCaseSearchQuery);
      const priceMatch = item.price.toString().includes(lowerCaseSearchQuery);

      return productNameMatch || descriptionMatch || priceMatch || item._id.toString().includes(lowerCaseSearchQuery);
    });

    setFilteredProducts(filtered);
  }, [searchQuery]);


  const show = {
    opacity: 1,
    // transition: { duration: 1 },
    display: "block"
  };

  const hide = {
    opacity: 0,
    transitionEnd: {
      display: "none"
    }
  };

  const currentURL = window.location.pathname;
  return (
    <div className="w-full h-20 bg-white sticky top-0 z-50 border-b-[1px] border-b-gray-200">
      <nav className="h-full px-4 max-w-container mx-auto relative">

        <Flex className="flex items-center justify-between h-full">
          <div onClick={() => {
            currentURL === "/slim-threads/" ? window.scrollTo({
              top: 0,
              behavior: 'smooth',
            }) : navigate("/slim-threads/")
          }}>
            <Image className="w-20 object-cover" imgSrc={logo} />
          </div>
          <Flex className="flex items-center justify-start h-full">
            <div>
              {showMenu && (
                <motion.ul
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center w-auto z-50 p-0 gap-2"
                >
                  <>
                    {navBarList.map(({ _id, title, link }) => (
                      <NavLink
                        key={_id}
                        className="flex font-normal hover:font-bold w-20 h-6 justify-center items-center px-12 text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                        to={link}
                        dis
                        state={{ data: location.pathname.split("/")[1] }}
                      >
                        <li>{title}</li>
                      </NavLink>
                    ))}
                  </>
                </motion.ul>
              )}
              <HiMenuAlt2
                onClick={() => setSidenav(!sidenav)}
                className="inline-block md:hidden cursor-pointer w-8 h-6 absolute top-6 right-4"
              />
              {sidenav && (
                <div className="fixed top-0 left-0 w-full h-screen bg-black text-gray-200 bg-opacity-80 z-50">
                  <motion.div
                    initial={{ x: -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-[80%] h-full relative"
                  >
                    <div className="w-full h-full bg-primeColor p-6">
                      <img
                        className="w-28 mb-6"
                        src={logo}
                        alt="logo"
                      />
                      <ul className="text-gray-200 flex flex-col gap-2">
                        {navBarList.map((item) => (
                          <li
                            className="font-normal hover:font-bold items-center text-lg text-gray-200 hover:underline underline-offset-[4px] decoration-[1px] hover:text-white md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                            key={item._id}
                          >
                            <NavLink
                              to={item.link}
                              state={{ data: location.pathname.split("/")[1] }}
                              onClick={() => setSidenav(false)}
                            >
                              {item.title}
                            </NavLink>
                          </li>
                        ))}
                        <Link onClick={() => setSidenav(false)} to="/slim-threads/cart" className="font-normal hover:font-bold items-center text-lg text-gray-200 hover:underline underline-offset-[4px] decoration-[1px] hover:text-white md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                        >My Cart</Link>
                      </ul>
                      {/* <div className="mt-4">
                        <h1
                          onClick={() => setCategory(!category)}
                          className="flex justify-between text-base cursor-pointer items-center font-titleFont mb-2"
                        >
                          Shop by Category{" "}
                          <span className="text-lg">{category ? "-" : "+"}</span>
                        </h1>
                        {category && (
                          <motion.ul
                            initial={{ y: 15, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.4 }}
                            className="text-sm flex flex-col gap-1"
                          >
                            <li className="headerSedenavLi">New Arrivals</li>
                            <li className="headerSedenavLi">Gudgets</li>
                            <li className="headerSedenavLi">Accessories</li>
                            <li className="headerSedenavLi">Electronics</li>
                            <li className="headerSedenavLi">Others</li>
                          </motion.ul>
                        )}
                      </div>
                      <div className="mt-4">
                        <h1
                          onClick={() => setBrand(!brand)}
                          className="flex justify-between text-base cursor-pointer items-center font-titleFont mb-2"
                        >
                          Shop by Brand
                          <span className="text-lg">{brand ? "-" : "+"}</span>
                        </h1>
                        {brand && (
                          <motion.ul
                            initial={{ y: 15, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.4 }}
                            className="text-sm flex flex-col gap-1"
                          >
                            <li className="headerSedenavLi">New Arrivals</li>
                            <li className="headerSedenavLi">Gudgets</li>
                            <li className="headerSedenavLi">Accessories</li>
                            <li className="headerSedenavLi">Electronics</li>
                            <li className="headerSedenavLi">Others</li>
                          </motion.ul>
                        )}
                      </div> */}
                    </div>
                    <span
                      onClick={() => setSidenav(false)}
                      className="w-8 h-8 border-[1px] border-gray-300 absolute top-2 -right-10 text-gray-300 text-2xl flex justify-center items-center cursor-pointer hover:border-red-500 hover:text-red-500 duration-300"
                    >
                      <MdClose />
                    </span>
                  </motion.div>
                </div>
              )}
            </div>
          </Flex>
          {showMenu && (
            <motion.ul
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center w-auto z-40 p-0 gap-2"
            >
              <div className="border-solid border-b-2 border-gray-200 relative w-full lg:w-[600px] h-[50px] text-base text-primeColor bg-white flex items-center gap-2 justify-between px-6 rounded-xl">
                <input
                  className="flex-1 h-full outline-none placeholder:text-[#C4C4C4] placeholder:text-[14px]"
                  type="text"
                  onChange={handleSearch}
                  value={searchQuery}
                  placeholder="Search your products here"
                />
                <span onClick={() => { setShowSearchBar(!showSearchBar); setSearchQuery("") }}>
                  <FaSearch className="w-5 h-5" />
                </span>
                <div className="example">
                  <motion.div className={`w-full mx-auto h-96 bg-white top-16 absolute left-0 z-50 overflow-y-scroll shadow-2xl scrollbar-hide cursor-pointer`}
                    initial={hide} // Initial state before any animation
                    animate={!searchQuery ? hide : show}
                    exit={hide} >
                    {filteredProducts.length > 0 ? filteredProducts.map((item) => (
                      <motion.div
                        initial={{ x: 100 }}
                        animate={{ x: 0 }}
                        exit={hide}
                        transition={{ type: "spring", stiffness: 100 }}
                        onClick={() =>
                          navigate(
                            `/slim-threads/product/${item.productName
                              .toLowerCase()
                              .split(" ")
                              .join("")}`,
                            {
                              state: {
                                item: item,
                              },
                            }
                          ) &
                          setShowSearchBar(false) &
                          setSearchQuery("")
                        }
                        key={item._id}
                        className="max-w-[600px] h-28 bg-gray-100 mb-3 flex items-center gap-3"
                      >

                        <img className="w-24 rounded" src={item.img} alt="productImg" />
                        <div className="flex flex-col gap-1">
                          <p className="font-semibold text-lg">
                            {item.productName}
                          </p>
                          <p className="text-xs">{item.des}</p>
                          <p className="text-sm">
                            {item.oldPrice ? (
                              <div className="flex gap-2">
                                <span >  <del className=" text-primeColor text-sm font-semibold">${item.oldPrice}</del></span>
                                <span className="text-sm inline-block false text-red-700  font-semibold">${item.price}</span>
                              </div>
                            ) : (
                              <span className="text-sm inline-block text-primeColor font-semibold">${item.price}</span>
                            )}
                          </p>
                          {/* <p className="text-sm">
                            Price:{" "}
                            <span className="text-primeColor font-semibold">
                              ${item.price}
                            </span>
                          </p> */}
                        </div>
                      </motion.div>
                      // </motion.div>
                    )) : <div className="flex align-middle items-center content-center w-full h-full mx-auto justify-center font-bold">
                      No products Found
                    </div>}
                  </motion.div>
                </div>
              </div>
            </motion.ul>
          )}
          {showMenu && (
            <div className="flex gap-4 mt-2 lg:mt-0 items-center pl-4 cursor-pointer relative">
              {/* <div onClick={() => setShowUser(!showUser)} className="flex">
                <FaUser />
                <FaCaretDown />
              </div> */}
              {showUser && (
                <motion.ul
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute top-6 left-0 z-50 bg-primeColor w-44 text-[#767676] h-auto p-4 pb-6"
                >
                  <Link to="/slim-threads/signin">
                    <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                      Login
                    </li>
                  </Link>
                  <Link onClick={() => setShowUser(false)} to="/slim-threads/signup">
                    <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                      Sign Up
                    </li>
                  </Link>
                  <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    Profile
                  </li>
                  <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400  hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    Others
                  </li>
                </motion.ul>
              )}
              <motion.ul
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center w-auto z-40 p-0 gap-2"
              >
                <Link to="/slim-threads/cart">
                  <div className="relative">
                    <FaShoppingCart />
                    <span className="absolute font-titleFont top-3 -right-2 text-xs w-4 h-4 flex items-center justify-center rounded-full bg-primeColor text-white">
                      {products.length > 0 ? products.length : 0}
                    </span>
                  </div>
                </Link>
              </motion.ul>
            </div>
          )}
        </Flex>
      </nav>
    </div >
  );
};

export default Header;
