export default function CategoryProducts() {
  return (
    <>
      <div className="flex items-center justify-center md:gap-[65px] gap-y-6 gap-x-[29px] flex-wrap">
        <div className="flex flex-col gap-2.5 items-center w-[100px] md:w-[200px]">
          <img
            src="/CoffeeShop-Files/categories/category1.png"
            alt=""
            loading="lazy"
          />
          <a
            href="#"
            className="font-DanaDemiBold text-zinc-700 text-sm   md:text-xl dark:text-white text-center"
          >
            قهوه دمی و اسپرسو
          </a>
        </div>
        <div className="flex flex-col gap-1.5 md:gap-2.5 items-center  w-[100px] md:w-[200px] ">
          <img src="/CoffeeShop-Files/categories/category2.png" alt="" />
          <a
            href="#"
            className="font-DanaDemiBold text-zinc-700 text-sm   md:text-xl dark:text-white text-center"
          >
            لوازم جانبی و تجهیزات
          </a>
        </div>
        <div className="flex flex-col gap-1.5 md:gap-2.5 items-center  w-[100px] md:w-[200px] ">
          <img src="/CoffeeShop-Files/categories/category3.png" alt="" />
          <a
            href="#"
            className="font-DanaDemiBold text-zinc-700 text-sm   md:text-xl dark:text-white text-center"
          >
            اسپرسو ساز
          </a>
        </div>

        <div className=" flex flex-col gap-2.5 items-center   w-[100px] md:w-[200px]">
          <img src="/CoffeeShop-Files/categories/category4.png" alt="" />
          <a
            href="#"
            className="font-DanaDemiBold text-zinc-700 text-sm   md:text-xl dark:text-white text-center"
          >
            پک تستر قهوه
          </a>
        </div>
        <div className="flex flex-col gap-2.5 items-center justify-center  w-[100px] md:w-[200px]">
          <img src="/CoffeeShop-Files/categories/category5.png" alt="" />
          <a
            href="#"
            className="font-DanaDemiBold text-zinc-700 text-sm   md:text-xl dark:text-white text-center"
          >
            قهوه ترک
          </a>
        </div>
      </div>
    </>
  );
}
