import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";

const PageContainer = ({ title, children, wide = false }) => (
  <div className="min-h-screen bg-offwhite">
    <Navbar />
    <main className={`page-shell space-y-4 sm:space-y-6 lg:space-y-8 ${wide ? "page-shell-wide" : ""}`}>
      <Link to="/" className="inline-flex items-center gap-2 text-[10px] font-semibold text-inverted hover:text-primary sm:text-sm md:text-base">
        <FaArrowLeft size={8} aria-hidden="true" />
        Home
      </Link>
      {title && <h1 className="font-display text-[20px] font-semibold text-inverted sm:text-3xl lg:text-4xl">{title}</h1>}
      <div className="space-y-4 text-[12px] leading-relaxed text-body sm:space-y-6 sm:text-base lg:space-y-8">{children}</div>
    </main>
    <Footer />
  </div>
);

export default PageContainer;
