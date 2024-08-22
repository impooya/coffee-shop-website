import { useRef } from "react";
import CoffeeItems from "./CoffeeItems";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper as SwiperClass } from "swiper";

// Define the component
export default function BestSellingProducts() {
  // Create a ref for the Swiper instance with the correct type
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <>
      <div className="flex flex-col gap-5 md:gap-12">
        <div className="flex justify-between items-end">
          <div className="flex flex-col gap-0.5 md:gap-2 text-zinc-700 dark:text-white">
            <h3 className="font-MorabbaMedium text-2xl md:text-5xl">
              محصولات پر فروش
            </h3>
            <p className="font-MorabbaLight text-lg md:text-3xl">
              پیشنهاد قهوه خور ها ...
            </p>
          </div>
          <div className="flex items-center justify-center gap-3 md:gap-[18px]">
            <span
              className="slide-to-left md:size-11 size-9 md:child:size-[26px] child:size-5 bg-white text-zinc-700 p-[9px] rounded-full cursor-pointer hover:bg-gray-300 dark:hover:bg-white dark:bg-zinc-700 dark:text-white dark:hover:text-zinc-700 transition-all"
              onClick={() => swiperRef.current?.slidePrev()} // Slide to previous slide
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span
              className="slide-to-right md:size-11 size-9 md:child:size-[26px] child:size-5 bg-white text-zinc-700 p-[9px] rounded-full cursor-pointer hover:bg-gray-300 dark:hover:bg-white dark:bg-zinc-700 dark:text-white dark:hover:text-zinc-700 transition-all"
              onClick={() => swiperRef.current?.slideNext()} // Slide to next slide
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
        </div>
        <Swiper
          dir="rtl"
          modules={[Pagination, Autoplay]}
          spaceBetween={14}
          className="w-full"
          slidesPerView={2}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper; // Assign swiper instance to ref
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          {/* Your slides go here */}
          <SwiperSlide>
            <CoffeeItems />
          </SwiperSlide>
          <SwiperSlide>
            <CoffeeItems />
          </SwiperSlide>
          <SwiperSlide>
            <CoffeeItems />
          </SwiperSlide>
          <SwiperSlide>
            <CoffeeItems />
          </SwiperSlide>
          <SwiperSlide>
            <CoffeeItems />
          </SwiperSlide>
          <SwiperSlide>
            <CoffeeItems />
          </SwiperSlide>
          <SwiperSlide>
            <CoffeeItems />
          </SwiperSlide>
          <SwiperSlide>
            <CoffeeItems />
          </SwiperSlide>
          {/* ... more SwiperSlide components */}
        </Swiper>
      </div>
    </>
  );
}
