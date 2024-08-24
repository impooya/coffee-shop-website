import BlogPosts from "./BlogPosts";
interface blogsPosts {
  id: number;
  title: string;
  month: string;
  date: number;
  year: string;
  img: string;
}

const blogs: blogsPosts[] = [
  {
    id: 1,
    title: "طرز تهیه قهوه دمی با دستگاه اروپرس",
    date: 21,
    month: "مرداد",
    year: "1402",
    img: "/CoffeeShop-Files/blogs/blog-1.png",
  },
  {
    id: 2,
    title: "یک نوشیدنی هیجان انگیز و پرکالری برای شروع روز",
    date: 21,
    month: "مرداد",
    year: "1402",
    img: "/CoffeeShop-Files/blogs/blog-2.png",
  },
  {
    id: 3,
    title: "طرز تهیه یک فنجان کافه زینو برزیلی",
    date: 21,
    month: "مرداد",
    year: "1402",
    img: "/CoffeeShop-Files/blogs/blog-3.png",
  },
  {
    id: 4,
    title: "طرز تهیه قهوه دالگونا مناسب روز‌های کرونایی",
    date: 21,
    month: "مرداد",
    year: "1402",
    img: "/CoffeeShop-Files/blogs/blog-4.png",
  },
];
export default function Blog() {
  return (
    <>
      <div className="flex flex-col gap-5 md:gap-12">
        <div className="flex justify-between items-end">
          <div className="flex flex-col gap-0.5 md:gap-2 text-zinc-700 dark:text-white">
            <h3 className="font-MorabbaMedium text-2xl md:text-5xl ">
              مطالب خواندنی
            </h3>
          </div>
          <span className="inline-block">
            <a
              href=""
              className="inline-flex text-base md:text-xl items-center text-orange-300 gap-0 md:gap-1 hover:bg-orange-200/20 rounded-md h-10 pr-3  pl-1 transition-colors"
            >
              <span className="tracking-tightest hidden md:inline-block">
                مشاهده همه مطالب
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
        <div className="flex flex-col justify-center items-center gap-y-[14px] md:grid md:grid-cols-2 md:gap-4 xl:grid-cols-4  xl:gap-5">
          {blogs.map((items) => (
            <BlogPosts key={items.id} {...items} />
          ))}
        </div>
      </div>
    </>
  );
}
