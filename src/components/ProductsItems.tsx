import CoffeeItems from "./CoffeeItems";

export default function ProductsItems() {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4  gap-[14px] md:gap-5">
        <CoffeeItems />
        <CoffeeItems />
        <CoffeeItems />
        <CoffeeItems />
        <CoffeeItems />
        <CoffeeItems />
        <CoffeeItems />
        <CoffeeItems />
      </div>
    </>
  );
}
