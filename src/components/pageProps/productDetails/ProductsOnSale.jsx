import React from "react";
import { SplOfferData } from "../../../constants";

const ProductsOnSale = () => {
  return (
    <div>
      <h3 className="font-titleFont text-xl font-semibold mb-6 underline underline-offset-4 decoration-[1px]">
        Products on sale
      </h3>
      <div className="flex flex-col gap-2">
        {SplOfferData.map((item) => (
          <div
            key={item._id}
            className="flex items-center gap-4 border-b-[1px] border-b-gray-300 py-2"
          >
            <div>
              <img className="w-24 rounded" src={item.img} alt={item.img} />
            </div>
            <div className="flex flex-col gap-2 font-titleFont">
              <p className="text-base font-medium">{item.productName}</p>
              <div className="font-semibold   flex flex-wrap gap-x-2 text-heading">
                {item.oldPrice ? (
                  <>
                    <del className=" font-normal text-gray-800 text-xs">${item.oldPrice}</del>
                    <span className="inline-block false text-red-700 text-sm">${item.price}</span>
                  </>
                ) : (
                  <span className="inline-block false text-sm">${item.price}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsOnSale;
