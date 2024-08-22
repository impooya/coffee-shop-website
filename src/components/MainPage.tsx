import { useEffect, useState } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import ShoppingSideBar from "./ShoppingSideBar";
import HomePage from "./HomePage";
import Footer from "./Footer";

export default function MainPage() {
  const [dark, setDark] = useState<boolean>(() => {
    // Check localStorage for the saved theme preference
    const savedTheme = localStorage.getItem("darkMode");
    return savedTheme === "true"; // Return true if dark mode was saved
  });

  const darkModeHandler = () => {
    setDark((prevDark) => {
      const newDark = !prevDark;
      // Save the new preference to localStorage
      localStorage.setItem("darkMode", newDark.toString());
      document.querySelector("html")?.classList.toggle("dark", newDark); // Add or remove the dark class
      return newDark;
    });
  };

  useEffect(() => {
    // Set the initial class based on the saved preference
    document.querySelector("html")?.classList.toggle("dark", dark);
  }, [dark]);

  const [openSideBar, setOpenSidebar] = useState<boolean>(false);
  const [openShoppingCart, setOpenShoppingCart] = useState<boolean>(false);
  useEffect(() => {
    if (openSideBar) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [openSideBar]);
  useEffect(() => {
    if (openShoppingCart) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [openShoppingCart]);

  return (
    <>
      <Header
        onChangeTheme={darkModeHandler}
        darkModeOn={dark}
        onOpenSideBar={() => {
          if (openSideBar) {
            setOpenSidebar(false);
          } else {
            setOpenSidebar(true);
          }
        }}
        onOpenShoppingCart={() => {
          if (openShoppingCart) {
            setOpenShoppingCart(false);
          } else {
            setOpenShoppingCart(true);
          }
        }}
      />
      <SideBar
        onChangeMobileTheme={darkModeHandler}
        darkModeOn={dark}
        isOpenSideBar={openSideBar}
        onCloseSideBar={() => {
          if (!openSideBar) {
            setOpenSidebar(true);
          } else {
            setOpenSidebar(false);
          }
        }}
      />
      <ShoppingSideBar
        isOpenShoppingCart={openShoppingCart}
        onCloseCart={() => {
          if (!openShoppingCart) {
            setOpenShoppingCart(true);
          } else {
            setOpenShoppingCart(false);
          }
        }}
      />

      <HomePage />
      <Footer />
      {/*screen overlay */}
      {(openSideBar || openShoppingCart) && (
        <div
          onClick={() => {
            setOpenSidebar(false);
            setOpenShoppingCart(false);
          }}
          className="fixed inset-0 w-full h-full bg-black/40 z-10 overflow-hidden"
        ></div>
      )}
    </>
  );
}
