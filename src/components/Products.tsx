import ProductsItems from "./ProductsItems";

export default function Products() {
  return (
    <>
      <div className="flex flex-col gap-5 md:gap-12">
        {/*Title and More product Btn */}
        <div className="flex justify-between items-end">
          <div className="flex flex-col gap-0.5 md:gap-2 text-zinc-700 dark:text-white">
            <h3 className="font-MorabbaMedium text-2xl md:text-5xl ">
              جدیدترین محصولات
            </h3>
            <p className="font-MorabbaLight text-lg md:text-3xl">
              فرآوری شده از دانه قهوه
            </p>
          </div>
          <span className="inline-block">
            <a
              href=""
              className="inline-flex text-base md:text-xl items-center text-orange-300 gap-0 md:gap-1 hover:bg-orange-200/20 rounded-md h-10 pr-3  pl-1 transition-colors"
            >
              <span className="tracking-tightest hidden md:inline-block">
                مشاهده همه محصولات
              </span>
              <span className="tracking-tightest inline-block md:hidden">
                مشاهده همه
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </a>
          </span>
        </div>
        {/*Items  */}
        <ProductsItems />
      </div>
    </>
  );
}
