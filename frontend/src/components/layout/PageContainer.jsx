import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";

const PageContainer = ({ title, children, wide = false }) => (
  <div className="min-h-screen bg-offwhite">
    <Navbar />
    <main className={`mx-auto mt-20 w-full space-y-4 px-3 pb-8 pt-4 ${wide ? "max-w-5xl sm:px-6" : "max-w-[320px]"}`}>
      <Link to="/" className="inline-flex items-center gap-2 text-[10px] font-semibold text-inverted hover:text-primary">
        <FaArrowLeft size={8} aria-hidden="true" />
        Home
      </Link>
      {title && <h1 className="font-display text-[20px] font-semibold text-inverted">{title}</h1>}
      <div className="space-y-4 text-[12px] leading-relaxed text-body">{children}</div>
      <Footer />
    </main>
  </div>
);

export default PageContainer;
