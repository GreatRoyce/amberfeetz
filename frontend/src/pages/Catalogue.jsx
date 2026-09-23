import { useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineChat } from "react-icons/md";
import Navbar from "../components/layout/Navbar";
import Reveal from "../components/ui/Reveal";
import { Small } from "../components/ui/Typography";
import business from "../data/business";
import products from "../data/product";
import { buildWhatsAppUrl } from "../features/whatsapp/utils/buildWhatsAppUrl";
import Footer from "../components/layout/Footer";

const categories = ["All", "Slips", "Shoes", "Sandals"];
const genders = ["All", "Men", "Women"];
const pageSize = 6;
const priceFormatter = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
  maximumFractionDigits: 0,
});

const Catalogue = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const category = categories.find(
    (item) => item.toLowerCase() === searchParams.get("category")?.toLowerCase(),
  ) ?? "All";
  const gender = genders.find(
    (item) => item.toLowerCase() === searchParams.get("gender")?.toLowerCase(),
  ) ?? "All";
  const [pagination, setPagination] = useState({ key: location.key, count: pageSize });
  // A new URL or history entry starts with the first page of its results.
  const visibleCount = pagination.key === location.key ? pagination.count : pageSize;

  const changeFilter = (name, value) => {
    const nextParams = new URLSearchParams(searchParams);
    if (value === "All") nextParams.delete(name);
    else nextParams.set(name, value.toLowerCase());
    setSearchParams(nextParams);
  };

  const filteredProducts = products.filter(
    (product) =>
      product.isVisible &&
      (category === "All" || product.category === category.toLowerCase()) &&
      (gender === "All" || product.gender === gender.toLowerCase()),
  );
  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const remainingCount = filteredProducts.length - visibleProducts.length;
  const inquiryUrl = buildWhatsAppUrl({
    number: business.whatsapp,
    text: "Hello, I have a specific design in mind and would like to share reference photos with the workshop.",
  });

  return (
    <div className="min-h-screen bg-offwhite">
      <Navbar />
      <main className="mx-auto mt-20 flex w-full max-w-[320px] flex-col gap-4 px-3 pb-8 pt-4">
        <Reveal className="w-full" btn="w-full">
          <header>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-wider text-inverted hover:text-primary"
            >
              <FaArrowLeft size={8} aria-hidden="true" />
              Home
            </Link>
            <p className="mt-4 font-code text-[11px] uppercase leading-6 tracking-wide text-tertiary">
              The Complete Catalogue
            </p>
            <h1 className="font-display text-[20px] font-semibold leading-tight tracking-[0.18em] text-inverted shade">
              Our Designs
            </h1>
            <p className="mt-2 text-[11px] leading-relaxed text-body">
              Find a pair you like, then order or customize it directly with the
              master cordwainer.
            </p>
          </header>
        </Reveal>

        <Reveal className="w-full" btn="w-full" delay={0.15}>
          <div className="space-y-3">
            <div
              role="group"
              aria-label="Filter by category"
              className="grid grid-cols-4 gap-2"
            >
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => changeFilter("category", item)}
                  aria-pressed={category === item}
                  className={`rounded px-2 py-2 text-[10px] font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary ${
                    category === item
                      ? "bg-primary text-offwhite"
                      : "text-inverted hover:bg-primary/10"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2">
              <div
                role="group"
                aria-label="Filter by gender"
                className="flex gap-1 rounded-full border border-inverted/10 bg-inverted/10 p-1"
              >
                {genders.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => changeFilter("gender", item)}
                    aria-pressed={gender === item}
                    className={`rounded-full px-2 py-1 text-[10px] font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary ${
                      gender === item
                        ? "bg-primary text-offwhite"
                        : "text-inverted/60 hover:text-primary"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <p role="status" className="text-[10px] text-inverted/60">
                Showing {visibleProducts.length} of {filteredProducts.length}
              </p>
            </div>
          </div>
        </Reveal>

        <section aria-label="Footwear designs" className="grid grid-cols-2 gap-3">
          {visibleProducts.map((product, index) => {
            const primaryImage =
              product.images.find((image) => image.isPrimary) ?? product.images[0];

            return (
              <Reveal
                key={product.id}
                className="h-full w-full"
                btn="h-full w-full"
                delay={(index % pageSize) * 0.05}
              >
                <Link
                  to={`/design/${product.referenceCode}`}
                  className="block h-full overflow-hidden rounded-lg border border-inverted/10 bg-white transition-colors hover:border-primary/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:-outline-offset-2"
                >
                  <img
                    src={primaryImage?.url}
                    alt={primaryImage?.alt || product.name}
                    loading="lazy"
                    className="h-32 w-full bg-secondary/40 object-contain p-2"
                  />
                  <div className="space-y-1.5 p-2">
                    <Small className="block leading-relaxed text-tertiary">
                      Ref: {product.referenceCode}
                    </Small>
                    <h2 className="text-[11px] font-semibold leading-snug text-inverted">
                      {product.name}
                    </h2>
                    <p className="text-[10px] font-semibold text-body">
                      {priceFormatter.format(product.price)}
                    </p>
                  </div>
                </Link>
              </Reveal>
            );
          })}
          {filteredProducts.length === 0 && (
            <p className="col-span-2 rounded-lg border border-inverted/10 px-3 py-6 text-center text-[11px] leading-relaxed text-body">
              No designs match these filters. Try another category or select All.
            </p>
          )}
        </section>

        <Reveal className="w-full" btn="w-full" delay={0.1}>
          <aside className="flex flex-wrap items-center gap-2 rounded-lg border border-inverted/10 bg-body/10 p-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-900 text-offwhite">
              <MdOutlineChat size={16} aria-hidden="true" />
            </span>
            <div className="min-w-0 flex-1">
              <h2 className="text-[11px] font-semibold leading-snug text-inverted">
                Have a specific design in mind?
              </h2>
              <p className="mt-1 text-[10px] leading-relaxed text-inverted/70">
                Send reference photos to the workshop.
              </p>
            </div>
            <a
              href={inquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-inverted/10 bg-white px-3 py-2 text-[10px] font-semibold uppercase text-inverted hover:text-primary"
            >
              Inquire
            </a>
          </aside>
        </Reveal>

        {remainingCount > 0 && (
          <button
            type="button"
            onClick={() => setPagination({ key: location.key, count: visibleCount + pageSize })}
            className="rounded-lg border border-inverted/10 bg-body/10 p-3 text-center text-[11px] text-inverted hover:bg-body/20"
          >
            <span className="font-semibold">Load More Pairs </span>
            <span className="text-inverted/60">({remainingCount} Remaining)</span>
          </button>
        )}
        <Footer></Footer>
      </main>
    </div>
  );
};

export default Catalogue;
