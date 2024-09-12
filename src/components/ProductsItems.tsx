import CoffeeItems from "./CoffeeItems";

export default function ProductsItems() {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4  gap-[14px] md:gap-5">
        <CoffeeItems img={"/CoffeeShop-Files/products/p4.png"} />
        <CoffeeItems img={"/CoffeeShop-Files/products/p3.png"} />
        <CoffeeItems img={"/CoffeeShop-Files/products/p1.png"} />
        <CoffeeItems img={"/CoffeeShop-Files/products/p2.png"} />
        <CoffeeItems img={"/CoffeeShop-Files/products/p5.png"} />
        <CoffeeItems img={"/CoffeeShop-Files/products/p6.png"} />
        <CoffeeItems img={"/CoffeeShop-Files/products/p7.png"} />
        <CoffeeItems img={"/CoffeeShop-Files/products/p8.png"} />
      </div>
    </>
  );
}
