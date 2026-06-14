import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="max-w-5xl mx-auto min-h-svh w-full px-4 sm:px-6 flex flex-col">
        <main className="pt-6 sm:pt-10 flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
