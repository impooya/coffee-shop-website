export default function ContactUs() {
  return (
    <>
      <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-x-5 gap-y-8 h-auto  text-zinc-700 dark:text-white">
        <img
          src="../src/assets/CoffeeShop-Files/contact.png"
          alt="contact"
          className="w-[296px] h-[305px] object-cover "
        />
        <div className="flex flex-col justify-center items-start gap-y-5 lg:gap-y-6">
          <div className="flex flex-col gap-y-0.5 md:gap-y-1.5 ">
            <h4 className="font-MorabbaMedium text-2xl lg:text-5xl">
              یکی از بهترین قهوه ها !
            </h4>
            <p className="font-MorabbaLight text-lg/8 lg:text-3xl lg:leading-[48px]">
              کیفیت قهوه را از ما بخواهید ...
            </p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 "
            >
              <path
                fillRule="evenodd"
                d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-y-5  lg:gap-y-6">
            <p className="text-lg lg:text-2xl">
              فضای گرم و دنج ما را احساس کنید، جایی که همه می توانند قهوه معطری
              پیدا کنند و دسرهای خوشمزه ما را که کاملاً با قهوه داغ همراه شده
              است، امتحان کنند. فضای داخلی شیک و کارکنان خوش برخورد ما روز شما
              را می سازد!
            </p>
            <div className="inline-flex justify-center items-center w-[180px] h-[50px] lg:w-[216px] lg:h-[60px] border-2 border-orange-300 text-orange-300 rounded-full `">
              <a
                href=""
                className="inline-flex justify-center items-center gap-2 w-max "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="lg:size-8 size-[22px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
                <span className="text-base  lg:text-xl tracking-tightest">
                  ثبت سفارش تلفنی
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
