import { useState } from "react";
import Rating from "./Rating";

interface Star {
  id: number;
  starId: string;
  onIcon: boolean;
}

export default function CoffeeItems({ img }: { img: string }) {
  const [valuRate, setValueRate] = useState<number>(0);

  // Create an array of stars with their properties
  const starRateBox: Star[] = Array.from({ length: 5 }, (_, index) => ({
    id: index + 1,
    starId: `star_${index + 1}`,
    onIcon: index < valuRate, // Determine if the star should be "on" based on the current rating
  }));

  return (
    <>
      <svg className="hidden">
        <symbol
          id="arrows-right-left"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
          />
        </symbol>
        <symbol
          id="shopping-cart"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </symbol>
      </svg>
      <div className="flex flex-col items-center bg-white dark:bg-zinc-700 p-2 md:p-5 rounded-2xl  shadow-normal md:gap-5 gap-2">
        <div className=" relative">
          <div className="size-32 md:size-[260px]">
            <img
              src={img}
              alt="قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی"
              loading="lazy"
            />
          </div>
          <span className="absolute w-10 h-5 lg:w-[54px] lg:h-[30px] bg-orange-300 flex items-center justify-center top-0 rounded-[100px] text-white font-DanaDemiBold text-xs md:text-base md:leading-9">
            12%
          </span>
        </div>

        <div className="flex flex-col gap-1.5 md:gap-2.5">
          <a
            href="#"
            className="font-DanaMedium text-sm md:text-xl text-zinc-700 line-clamp-2 dark:text-white h-10 md:h-14 px-2 "
          >
            قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی
          </a>
          <div className="flex items-center gap-2.5 font-DanaDemiBold text-base md:text-xl ">
            <span className="text-teal-600 flex items-center gap-1 dark:text-emerald-500 ">
              175,000
              <span className="font-Dana text-xs md:text-sm tracking-tighter ">
                تومان
              </span>
            </span>
            <span className=" flex items-center gap-0.5 md:gap-1 text-gray-400 relative line-through decoration-red-500 md:no-underline">
              175,000
              <span className=" hidden md:inline font-Dana text-xs md:text-sm tracking-tighter before:absolute before:inset-0 before:h-px before:bg-red-500 before:top-1/2 before:transform before:-translate-y-1/2">
                تومان
              </span>
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center w-full text-gray-400">
          <div className="flex gap-2.5 lg:gap-[19px]">
            <button
              type="button"
              className="bg-gray-100 rounded-full p-[7px] hover:bg-teal-600 hover:text-white transition-all dark:bg-zinc-800 dark:hover:bg-emerald-500"
            >
              <svg className="size-4 md:size-[22px]">
                <use xlinkHref="#shopping-cart"></use>
              </svg>
            </button>
            <button
              type="button"
              className="hover:text-teal-600 transition-all dark:hover:text-emerald-500"
            >
              <svg className="size-4 md:size-[22px]">
                <use xlinkHref="#arrows-right-left"></use>
              </svg>
            </button>
          </div>
          <div className="flex text-gray-300" dir="ltr">
            {starRateBox.map((items) => (
              <Rating
                {...items}
                key={items.id}
                onRateStar={(e) => {
                  const selectedId = Number(
                    e.currentTarget.getAttribute("data-id")
                  );
                  setValueRate(selectedId); // Set the value rate based on the selected star
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
