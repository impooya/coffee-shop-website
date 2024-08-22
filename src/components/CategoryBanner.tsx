export default function CategoryBanner() {
  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-2 child:h-[142px] child:md:h-[248px] gap-5 ">
        <div className="categories-right-banner flex justify-start items-center text-white  pr-7 md:pr-12  rounded-2xl ">
          <div className="flex flex-col gap-4 md:gap-7">
            <a
              href="#"
              className="inline-block font-DanaDemiBold text-2xl/6 md:text-4xl/6"
            >
              انواع قهوه
            </a>
            <span className="font-DanaMedium text-base  md:text-xl/6">
              ترکیبی و تک خاستگاه
            </span>
          </div>
        </div>
        <div className="categories-left-banner flex justify-start items-center text-white pr-7 md:pr-12 rounded-2xl ">
          <div className="flex flex-col gap-4 md:gap-7">
            <h4 className="font-DanaDemiBold text-2xl/6 md:text-4xl/6 ">
              پودر های فوری
            </h4>
            <span className="font-DanaMedium text-base  md:text-xl/6">
              نسکافه ، هات چاکلت ، ماسالا
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
