"use client";

import Image from "next/image";
import FormattedPrice from "./FormattedPrice";
import { IoMdCard, IoMdCart } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/shoppingSlice";
import toast, { Toaster } from "react-hot-toast";

const SingleProduct = ({ product }: any) => {
  const dispatch = useDispatch();
  return (
    <div className="grid lg:grid-cols-2 gap-5 bg-white p-2 rounded-lg">
      <div>
        <Image
          src={product?.image}
          alt="product image"
          width={500}
          height={500}
          className=" w-full max-h-[700px] object-cover rounded-lg"
        />
      </div>
      <div className="flex  justify-center flex-col gap-y-10">
        <div>
          <p className="text-3xl font-semibold">{product?.title}</p>
          <p className="text-xl font-semibold">
            <FormattedPrice amount={product?.price} />
          </p>
        </div>
        <p className=" text-lightText">{product?.description}</p>
        <div className=" text-lightText text-sm flex flex-col">
          <span>
            SKU: <span className="text-darkText">{product?._id}</span>
          </span>
          <span>
            Category: <span className="text-darkText">{product?.category}</span>
          </span>
        </div>
        <div
          onClick={() =>
            dispatch(addToCart(product)) &&
            toast.success(
              `${product?.title.substring(0, 15)} added successfully!`
            )
          }
          className="flex items-center  group cursor-pointer"
        >
          <button className=" bg-darkText flext items-center uppercase border-r-[1px] border-r-slate-500  text-slate-100 px-6 py-3 text-sm">
            Add to cart
          </button>
          <span className="bg-darkText text-xl text-slate-100 w-12 flex items-center justify-center group-hover:bg-orange-500 duration-200 py-3">
            {" "}
            <IoMdCart />{" "}
          </span>
        </div>
        <p className="flex items-center gap-x-2 text-sm">
          <MdFavoriteBorder className=" text-xl" />
          Add to whishList
        </p>
      </div>
      <Toaster/>
    </div>
  );
};

export default SingleProduct;
