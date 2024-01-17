/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch, } from "react-redux";
import { addToCart } from "../../../redux/orebiSlice";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const ProductInfo = ({ productInfo }) => {
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="flex flex-col gap-5">
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >{productInfo.productName} has been added to Cart</Alert>
      </Snackbar>
      <h2 className="text-4xl font-semibold">{productInfo.productName} {productInfo.id}</h2>
      {/* <p className="text-xl font-semibold">${productInfo.price}</p> */}
      <div className="font-semibold  flex flex-wrap gap-x-2 text-heading">
        {productInfo.oldPrice ? (
          <>
            <del className=" font-normal text-gray-800 text-xl">${productInfo.oldPrice}</del>
            <span className="inline-block false text-red-700 text-2xl">${productInfo.price}</span>
          </>
        ) : (
          <span className="inline-block false text-xl">${productInfo.price}</span>
        )}
      </div>
      <p className="text-base text-gray-600">{productInfo.des}</p>
      <p className="text-sm">Be the first to leave a review.</p>
      <p className="font-medium text-lg">
        <span className="font-normal"></span> {productInfo.color}
      </p>
      <button
        onClick={() => {
          dispatch(
            addToCart({
              _id: productInfo._id,
              name: productInfo.productName,
              quantity: 1,
              image: productInfo.img,
              badge: productInfo.badge,
              price: productInfo.price,
              colors: productInfo.color,
            })
          )
          handleClick();
        }

        }
        className="rounded-md w-full py-4 bg-primeColor hover:bg-black duration-300 text-white text-lg font-titleFont"
      >
        Add to Cart
      </button>
      <p className="font-normal text-sm">
        <span className="text-base font-medium"> Categories:</span> Spring
        collection, Streetwear, Women Tags: featured SKU: N/A
      </p>
    </div >
  );
};

export default ProductInfo;
