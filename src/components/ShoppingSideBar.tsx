import { CartItemsForMobile } from "./CartItems";

export default function ShoppingSideBar({
  isOpenShoppingCart,
  onCloseCart,
}: {
  isOpenShoppingCart: boolean;
  onCloseCart: () => void;
}) {
  return (
    <>
      {/*Shopping Cart SideBar*/}
      <div
        className={`absolute  z-20 left-0  bg-white md:hidden top-0 bottom-0  pt-5 -mb-1 overflow-auto  dark:bg-zinc-700 flex flex-col justify-between  transition-all ${
          isOpenShoppingCart ? "w-64 px-4 " : "w-0 px-0"
        } `}
      >
        {/*Title and Close Btn */}
        <div className="flex flex-col">
          <div className="flex justify-between items-center  border-b border-b-gray-300 pb-5 ">
            <div
              className="size-5 text-zinc-600 cursor-pointer dark:text-white"
              onClick={onCloseCart}
            >
              <svg
                id="x-min"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.2vite8 5.22Z" />
              </svg>
            </div>
            <span className="text-zinc-700 text-base/[22.88px] font-DanaMedium dark:text-white">
              سبد خرید
            </span>
          </div>
          {/*Products to Buy*/}
          <div className="flex flex-col ">
            <div className="scroll-bar-style flex flex-col overflow-auto divide-y divide-gray-100 dark:divide-white/10 max-h-[400px] ">
              {/*shopping cart items*/}
              <CartItemsForMobile />
              <CartItemsForMobile />
              <CartItemsForMobile />
              <CartItemsForMobile />
              <CartItemsForMobile />
              <CartItemsForMobile />
              <CartItemsForMobile />
              <CartItemsForMobile />
              <CartItemsForMobile />
            </div>
          </div>
        </div>

        {/*Buy btn and Finall Price*/}
        <footer className="flex mb-8 items-center gap-4">
          <button
            type="button"
            className="bg-teal-600 w-28 h-11 rounded-xl  py-[10px] px-[17px] text-base/[22.88px] text-white shrink-0 text-center dark:bg-emerald-500 active:bg-teal-700 dark:hover:bg-emerald-600"
          >
            ثبت سفارش
          </button>
          <div className="flex flex-col  ">
            <span className="font-DanaMedium text-gray-300 text-xs/6 tracking-tighter ">
              مبلغ قابل پرداخت
            </span>
            <span className="font-DanaDemiBold flex items-center gap-1 text-zinc-700 text-base/[22.8px] dark:text-white">
              350,000
              <span className="font-Dana text-xs/[17.16px]">تومان</span>
            </span>
          </div>
        </footer>
      </div>
    </>
  );
}
