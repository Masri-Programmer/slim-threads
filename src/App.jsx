import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
  useRouteError,
  ScrollRestoration,
} from "react-router-dom";
import Footer from "./components/home/Footer/Footer";
import FooterBottom from "./components/home/Footer/FooterBottom";
import Header from "./components/home/Header/Header";
// import HeaderBottom from "./components/home/Header/HeaderBottom";
import SpecialCase from "./components/SpecialCase/SpecialCase";
import About from "./pages/About/About";
import SignIn from "./pages/Account/SignIn";
import SignUp from "./pages/Account/SignUp";
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Journal from "./pages/Journal/Journal";
import Offer from "./pages/Offer/Offer";
import Payment from "./pages/payment/Payment";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Shop from "./pages/Shop/Shop";
// import PageNotFound from "./pages/PageNotFound";
import { motion } from "framer-motion";

const Layout = () => {

  const bounceTransition = {
    y: {
      duration: 5,
      yoyo: Infinity,
      ease: "easeOut",
      repeat: Infinity,
      repeatType: 'mirror',
    },
    backgroundColor: {
      duration: 0,
      yoyo: Infinity,
      ease: "easeOut",
      repeatDelay: 0.8,
    },
  }
  const ballStyle = {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "2rem",
    bottom: "0",
    right: "0",
    height: "3rem",
    width: "3rem",
    border: "0.2rem solid",
    backgroundColor: "#941412e4",
    overflow: "hidden",
    color: "white",
    borderRadius: "50%",
    cursor: "pointer",
  };

  return (
    <div className="relative">
      <Header />
      {/* <HeaderBottom /> */}
      <SpecialCase />
      <ScrollRestoration
        getKey={(location) => {
          return location.key;
        }}
      />
      <Outlet />
      <Footer />
      <FooterBottom />
      <motion.span
        style={ballStyle}
        transition={bounceTransition}
        onClick={() => window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })}
        animate={{
          y: ["40%", "-40%"],
          backgroundColor: ["#941412e4", "#941412e4"],
        }}
      >
        Up
      </motion.span>
      {/* <div className="absolute flex justify-center items-center m-12 bottom-0 right-0 h-8 w-8 border-3 bg-red-800 text-white rounded-full">
        UP
      </div> */}
      {/* </div> */}
    </div>
  );
};

function ErrorBoundary() {
  let error = useRouteError();
  console.error(error);
  // Uncaught ReferenceError: path is not defined
  return <div> <div className="min-h-[90vh] relative w-full align-middle items-center flex justify-center">
    <strong className="absolute  text-black text-4xl">
      404 page not found
    </strong>
  </div></div>;
}
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorBoundary />}>
      <Route errorElement={<ErrorBoundary />} path="/slim-threads" element={<Layout />}>
        <Route errorElement={<ErrorBoundary />} index element={<Home />}></Route>
        <Route errorElement={<ErrorBoundary />} path="/slim-threads/shop" element={<Shop />}></Route>
        <Route errorElement={<ErrorBoundary />} path="/slim-threads/about" element={<About />}></Route>
        <Route errorElement={<ErrorBoundary />} path="/slim-threads/contact" element={<Contact />}></Route>
        <Route errorElement={<ErrorBoundary />} path="/slim-threads/journal" element={<Journal />}></Route>
        <Route errorElement={<ErrorBoundary />} path="/slim-threads/offer" element={<Offer />}></Route>
        <Route errorElement={<ErrorBoundary />} path="/slim-threads/product/:_id" element={<ProductDetails />}></Route>
        <Route errorElement={<ErrorBoundary />} path="/slim-threads/cart" element={<Cart />}></Route>
        <Route errorElement={<ErrorBoundary />} path="/slim-threads/paymentgateway" element={<Payment />}></Route>
      </Route>
      <Route errorElement={<ErrorBoundary />} path="/slim-threads/signup" element={<SignUp />}></Route>
      <Route errorElement={<ErrorBoundary />} path="/slim-threads/signin" element={<SignIn />}></Route>
      {/* <Route errorElement={<ErrorBoundary />} path="*" element={<PageNotFound />}></Route> */}
    </Route>
  )
);

function App() {
  return (
    <div className="font-bodyFon">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
