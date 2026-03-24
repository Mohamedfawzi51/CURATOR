import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollRestoration from "./ScrollRestoration";
import { AnimatePresence } from "framer-motion";
import PageWrapper from "./PageWrapper";

const Layout = () => {
  const location = useLocation();
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-secondary-container selection:text-on-secondary-container">
      <Navbar />
      <ScrollRestoration />
      <AnimatePresence mode="wait">
        <PageWrapper key={location.pathname}>
          <Outlet />
        </PageWrapper>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default Layout;
