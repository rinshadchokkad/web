"use client";
import {
  closeNavBar,
  openNavBar,
  selectCurrentNavBar,
  selectNavBarOpen,
  setCurrentNavbar,
} from "@/app/store/navbar/navbarSlice";
import { useAppDispatch, useAppSelector } from "@/app/store/store";
import { motion } from "framer-motion";

export default function Navbar() {
  const dispatch = useAppDispatch();
  const currentNavbar = useAppSelector(selectCurrentNavBar);
  const isNavbarOpen = useAppSelector(selectNavBarOpen);
  const navList = ["home", "works", "education", "contact"];

  return (
    <>
      {/* desktop navbar */}
      <div className="hidden sm:flex absolute bottom-11 right-20  gap-3">
        {navList.map((e, i) => {
          return (
            <div
              key={i}
              className={`${
                currentNavbar === i ? "nav-item-selected" : "nav-item"
              } uppercase`}
              onClick={() => dispatch(setCurrentNavbar(i))}
            >
              {e}
            </div>
          );
        })}
      </div>
      {/* mobile navbar */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={isNavbarOpen ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.3 }}
        onClick={() => {
          dispatch(openNavBar());
        }}
        className="absolute top-2 left-2 rounded-2xl sm:hidden border-2 p-3 z-10"
      >
        Menu
      </motion.div>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={isNavbarOpen ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute sm:hidden h-[100vh] w-screen flex flex-col  justify-around  left-0  bg-white text-black items-center "
      >
        <ul className="flex flex-col gap-12 justify-center items-center">
          {navList.map((e, i) => {
            return (
              <li
                key={i}
                className={`${
                  currentNavbar === i
                    ? "nav-item-selected-mobile"
                    : "nav-item-mobile"
                } uppercase`}
                onClick={() => {
                  dispatch(setCurrentNavbar(i));
                  dispatch(closeNavBar());
                }}
              >
                {e}
              </li>
            );
          })}
        </ul>
        <div
          onClick={() => dispatch(closeNavBar())}
          className="text-white text-2xl rounded-full gradient-color p-4 px-6  "
        >
          X
        </div>
      </motion.div>
    </>
  );
}
