

export default function CircleDownPagination() {

  return (
    <>
      <div className="absolute w-full  items-center justify-center bottom-0 md:flex hidden ">
        <div className=" text-gray-100 dark:text-zinc-800">
          <svg
            width="100"
            height="22"
            viewBox="0 0 100 22"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M50 0C69 0 81 22 100 22L0 22C18.75 22 31 0 50 0Z" />
          </svg>
        </div>
        <div className="size-[203px] border-white/25 rounded-full child:border border child:rounded-full  absolute bg-inherit flex justify-center items-center">
          <div className="size-36 border-white/50  flex justify-center items-center">
            <div className="size-24 border-white/80 border rounded-full  "></div>
          </div>
        </div>
        <div className="absolute top-3 size-4 cursor-pointer z-[500]  dark:text-white"  onClick={() => {
          window.scrollTo(0, 938)
        }}>
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
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        <div id="circle-1" className="border-orange-300 size-[30px] absolute rounded-full border-2 top-[7px] flex z-0 "></div>
      </div>
    </>
  );
}
