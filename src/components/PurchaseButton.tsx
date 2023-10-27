'use client'
import React, { useState } from 'react';
import { TProduct } from "@/types";
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';
import makePayment from '@/utils/makepayment';
import {
	ChevronLeftIcon,
	ChevronRightIcon,
} from "@heroicons/react/24/solid";


type ButtonProps = {
  pd: TProduct;
};







const PurchaseButton = ({ pd }: ButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1); 
  const handleOpenModal = () => {
    setIsModalOpen(true);


  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const getRidOfFraction = (price: number, quantity: number) => {
    const totalProductAmount = price * quantity;
    return totalProductAmount.toFixed(2);
  };

  const increment = () => {
    if (quantity < pd.quantity) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };







  return (
    <>
      <button
        className="py-3 bg-blue-500 rounded-md hover:bg-blue-500/80 font-medium text-white w-full"
        onClick={handleOpenModal}
      >
        Buy
      </button>
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 flex items-center justify-center z-50"
          >
            <div className="bg-[rgba(0,0,0,0.5)] fixed z-40 inset-0"></div>
            <div className=" bg-white max-w-lg mx-auto rounded shadow-lg z-50 overflow-y-auto">

              <div className="relative min-w-[500px] flex  flex-col  p-10">
                <button onClick={handleCloseModal} className="absolute cursor-pointer px-4 py-2 text-white rounded-lg right-2.5 top-2.5 hover:scale-[1.045] bg-blue-500 hover:bg-blue-500/80 z-[99]">
                  <AiOutlineClose size={24} />
                </button>
                <h4 className="text-lg font-semibold leading-snug sm:pr-8">
													{pd.title.slice(0, 70)}
												</h4>
								<p className="text-lg">${pd.price}</p>
                <div className="flex items-center justify-between text-sm my-5">

											<div className="w-20 flex justify-between">
												<button
                        onClick={decrement}
												>
													<ChevronLeftIcon className="h-4 w-4" />
												</button>
												<span>{quantity}</span>
												<button
                        onClick={increment}

												>
													<ChevronRightIcon className="h-4 w-4" />
												</button>


											</div>
                      <p>Total Amount: {getRidOfFraction(pd.price, quantity)}</p>
										</div>
                <button
        className="py-3 bg-blue-500 rounded-md hover:bg-blue-500/80 font-medium text-white w-full"
        onClick={()=>makePayment([{
          title:pd.title,
          price:pd.price,
          productQuantity:quantity
        }])}
      >
        Buy
      </button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PurchaseButton;

