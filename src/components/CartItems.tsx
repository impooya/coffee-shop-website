export default function CartItems() {
  return (
    <>
      <div className="flex items-center ">
        <div className="size-[120px] flex-shrink-0">
          <img src="/CoffeeShop-Files/products/p2.png" alt="" />
        </div>

        {/* {Text info Product} */}
        <div className="flex flex-col gap-6">
          <h4 className="font-DanaMedium text-base text-zinc-700 dark:text-white line-clamp-2">
            قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی
          </h4>
          <div className="flex flex-col ">
            <span className="font-DanaMedium text-xs/6 tracking-tighter text-teal-600">
              14.500 تومان تخفیف
            </span>
            <span className="font-DanaDemiBold text-xl/[28.6px] text-zinc-700 dark:text-white">
              175,000
              <span className="font-Dana text-sm mr-1">تومان</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export function CartItemsForMobile() {
  return (
    <>
      <div className="flex gap-1 items-center py-5">
        <div className="size-[90px] shrink-0">
          <img src="/CoffeeShop-Files/products/p2.png" alt="" />
        </div>
        <div className="flex flex-col gap-[6px]">
          <h4 className="font-DanaMedium text-sm text-zinc-700 dark:text-white line-clamp-2">
            قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی
          </h4>
          <span className="flex flex-col ">
            <span className="font-DanaMedium text-xs/6 tracking-tighter text-teal-600 dark:text-emerald-500 ">
              14.500 تومان تخفیف
            </span>
            <span className="flex gap-1 font-DanaDemiBold text-base/[22.8px] items-center text-zinc-700 dark:text-white">
              175,000
              <span className="font-Dana text-xs/[17.6px] ">تومان</span>
            </span>
          </span>
        </div>
      </div>
    </>
  );
}
