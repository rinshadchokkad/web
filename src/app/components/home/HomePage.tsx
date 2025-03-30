import { useAppSelector } from "@/app/store/store";
import Navbar from "./Navbar";
import { selectCurrentNavBar } from "@/app/store/navbar/navbarSlice";
import Banner from "./Banner";

export default function HomePage() {
  const currentNavbar = useAppSelector(selectCurrentNavBar);
  return (
    <>
      <div className="flex justify-center items-center min-h-[100vh] gradient-color relative">
        <Navbar />
        {currentNavbar === 0 ? (
          <Banner />
        ) : currentNavbar === 1 ? (
          <>Works</>
        ) : currentNavbar === 2 ? (
          <>Education</>
        ) : currentNavbar === 3 ? (
          <>Contacts</>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
