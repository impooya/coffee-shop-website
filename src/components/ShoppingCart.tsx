import CartItems from "./CartItems";

export default function ShoppingCart({ isOpenCart }: { isOpenCart: boolean }) {
  return (
    <>
      <div
        className={`${
          isOpenCart ? "visible opacity-100" : "invisible opacity-0"
        } flex flex-col gap-6 left-0 absolute top-full rounded-2xl bg-white border-t-[3px] border-t-orange-300 p-5 transition-all delay-75 w-[400px] dark:bg-zinc-700 shadow-normal`}
      >
        {/*when cart was empty */}
        {/* <div className="flex flex-col  gap-11 ">
          <div className="flex flex-col items-center gap-3 ">
            <div className="size-[54px] text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </div>
            <span className="font-DanaMedium text-base text-zinc-700 dark:text-white">
              هنوز محصولی به سبد خرید اضافه نشده
            </span>
          </div>
          <button
            type="button"
            className="rounded-xl w-full bg-teal-600 py-[14px] px-[45px] font-Dana text-xl tracking-tightest text-white hover:bg-emerald-600 transition-colors"
          >
            مشاهده صفحه فروشگاه
          </button>
        </div> */}
        {/* Shopping Cart */}
        <div className="">
          <div className="flex flex-col  ">
            <div className="flex justify-between">
              <span className="font-DanaMedium text-xs/6 text-gray-300 tracking-tighter">
                1 مورد
              </span>
              {/* {More Products btn} */}

              <a
                href=""
                className="flex hover:bg-orange-200/20 hover:py-1.5 hover:px-3 rounded-md transition-all"
              >
                <span className="font-DanaMedium tracking-tighter">
                  مشاهده سبد خرید
                </span>
                <div className="w-4 h-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5 8.25 12l7.5-7.5"
                    />
                  </svg>
                </div>
              </a>
            </div>
            {/* chosen products for buy */}
            <div className="scroll-bar-style flex flex-col divide-y child:py-5 dark:divide-white/5 border-t-gray-100 overflow-y-auto  max-h-[470px] ">
              <CartItems />
              <CartItems />
              <CartItems />
              <CartItems />
              <CartItems />
            </div>
          </div>
          {/* Total Price */}
          <div className="flex justify-between items-center border-t-[1px] dark:border-t-white/10 border-t-gray-300 pt-6">
            <div className="flex flex-col">
              <span className="font-DanaMedium text-xs/6 tracking-tighter text-gray-300">
                مبلغ قابل پرداخت
              </span>
              <span className="font-DanaDemiBold text-xl/[28.6px] text-gray-700 dark:text-white">
                350,000
                <span className="font-Dana text-sm mr-1">تومان</span>
              </span>
            </div>
            <button
              type="button"
              className="bg-teal-600 text-white py-3.5 px-7 rounded-xl font-Dana tracking-tightest h-14 w-36 text-xl dark:bg-emerald-500 dark:hover:bg-emerald-600 hover:bg-emerald-600 transition-colors "
            >
              ثبت سفارش
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
