"use client";

import Image from "next/image";
import { itemProps } from "../../type";
import { calculatePercentage } from "@/helpers";
import FormattedPrice from "./FormattedPrice";
import { IoIosStar } from "react-icons/io";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/shoppingSlice";
import toast, { Toaster } from "react-hot-toast";

const ProductsData = ({ item }: itemProps) => {
  const dispatch = useDispatch();
  const startArray = Array.from({ length: item?.rating }, (_, index) => (
    <span key={index} className="text-yellow-400">
      <IoIosStar />
    </span>
  ));
  return (
    <div className=" w-full rounded-lg overflow-hidden">
      <div>
        <Link href={{ pathname: "/product", query: { _id: item?._id } }}>
          <div className=" w-full h-96 group overflow-hidden relative">
            <Image
              src={item?.image}
              alt="product image"
              width={500}
              height={500}
              className=" w-full h-full object-cover duration-200 group-hover:scale-110 rounded-t-lg"
            />
            {item?.isNew && (
              <span className="absolute top-2 rounded-full bg-white duration-200 group-hover:text-white group-hover:bg-orange-600 right-2 font-medium text-xs py-1 px-3">
                New Arrival
              </span>
            )}
          </div>
        </Link>

        <div>
          <p className=" border-[1px] border-slate-300 border-t-0 px-2 py-4 flex flex-col gap-y-2 bg-white rounded-b-lg">
            {item?.title}
          </p>

          <div className="flex items-center justify-between m-2">
            <div className="border-[1px] border-orange-600 py-1 px-4 rounded-full text-xs">
              <p>{calculatePercentage(item?.price, item?.oldPrice)}% off</p>
            </div>
            <div className="flex items-center gap-x-2">
              <p className="text-slate-500 line-through text-sm">
                <FormattedPrice amount={item?.oldPrice} />
              </p>
              <p className=" font-semibold">
                <FormattedPrice amount={item?.price} />
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between m-2">
            {/* add to cart button */}
            <button
              onClick={() => dispatch(addToCart(item)) && toast.success(`${item?.title.substring(0,15)} added successfully!`)}
              className=" bg-orange-600  px-4 py-2 text-sm tracking-wide rounded-full text-slate-100 hover:bg-orange-800 hover:text-white duration-200"
            >
              add to cart
            </button>

            {/* star icon */}
            <div className="flex items-center gap-x-1">{startArray}</div>
          </div>
        </div>
      </div>
      <Toaster/>
    </div>
  );
};

export default ProductsData;
