import Title from "./Title";
import CircleDownPagination from "./CircleDownPagination";
import Products from "./Products";
import CategoryBanner from "./CategoryBanner";
import CategoryProducts from "./CategoryProducts";
import BestSellingProducts from "./BestSellingProducts";
import Club from "./Club";
import Blog from "./Blog";
import ContactUs from "./ContactUs";
import Services from "./Services";

export default function HomePage() {
  return (
    <>
      <main>
        <section className="home h-[200px] xs:h-auto xs:aspect-[2/1] bg-home-mobile md:bg-home-desktop bg-no-repeat bg-cover bg-[center_top] relative">
          <div className="container">
            <Title />
          </div>
          <CircleDownPagination />
        </section>
        <section className="pruducts bg-transparent xl:bg-picture-body xl:bg-no-repeat min-h-[900px] bg-[center_top] pt-8 md:pt-24 lg:pt-48 ">
          <div className="container">
            <Products />
          </div>
        </section>
        <section className="mt-8 md:mt-20 ">
          <div className="container">
            <CategoryBanner />
          </div>
        </section>
        <section className=" mt-10 md:mt-20">
          <div className="container">
            <CategoryProducts />
          </div>
        </section>
        <section className=" mt-10 md:mt-20">
          <div className="container">
            <BestSellingProducts />
          </div>
        </section>
        <section className=" mt-8 md:mt-20">
          <div className="container">
            <Club />
          </div>
        </section>
        <section className=" mt-8 md:mt-20">
          <div className="container">
            <Blog />
          </div>
        </section>
        <section className=" mt-7 md:mt-28">
          <div className="container">
            <ContactUs />
          </div>
        </section>
        <section className=" mt-[76px] md:mt-28 mb-12 md:mb-36">
          <div className="container">
            <Services />
          </div>
        </section>
      </main>
    </>
  );
}
