import { useState } from "react";
import { useNavigate } from "react-router-dom";
import products from "../data/product";
import { motion } from "framer-motion";

import { H2, H5, Small, P } from "../components/ui/Typography";
import Reveal from "../components/ui/Reveal";

import Button from "../components/ui/Button";

import { FaArrowLeft, FaArrowRight, FaWhatsapp } from "react-icons/fa";

import { BiShieldAlt } from "react-icons/bi";
import { GoDotFill } from "react-icons/go";

const ProductShowcase = () => {
  const navigate = useNavigate();
  // Only show products meant for the homepage
  const homeProducts = products.filter(
    (product) => product.isVisible && product.showOnHome,
  );

  const [activeIndex, setActiveIndex] = useState(0);

  const activeProduct = homeProducts[activeIndex];

  const nextProduct = () => {
    setActiveIndex((current) =>
      current === homeProducts.length - 1 ? 0 : current + 1,
    );
  };

  const previousProduct = () => {
    setActiveIndex((current) =>
      current === 0 ? homeProducts.length - 1 : current - 1,
    );
  };

  // Find the primary image.
  // If none is marked primary, use the first image.
  const primaryImage =
    activeProduct?.images?.find((image) => image.isPrimary) ||
    activeProduct?.images?.[0];

  // Format Nigerian currency properly
  const formatPrice = (price) =>
    new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0,
    }).format(price);

  if (!activeProduct) {
    return null;
  }

  return (
    <Reveal className="w-full" btn="w-full">
      <section className="mx-auto mt-20 w-full max-w-7xl overflow-hidden py-4 sm:px-6 sm:py-8 lg:grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-center lg:gap-12 lg:px-8 lg:py-12">
        <div className="min-w-0">
          {/* =========================
            PRODUCT CAROUSEL
        ========================== */}

          <div className="relative flex items-center justify-center">
            {/* Previous arrow */}
            <button
              type="button"
              onClick={previousProduct}
              aria-label="Previous product"
              className="
              absolute left-3 z-20
              flex h-10 w-10
              items-center justify-center
              rounded-full bg-white
              shadow-md transition
              hover:scale-105
            "
            >
              <FaArrowLeft size={14} />
            </button>

            {/* Product image */}
            <div
              className="
              relative
              h-[320px] sm:h-[420px] lg:h-[520px] xl:h-[600px]
              w-[82%] lg:w-full
              max-w-sm sm:max-w-lg lg:max-w-none
              overflow-hidden
              rounded-2xl
              bg-neutral-100
              shadow-lg
            "
            >
              <img
                src={primaryImage?.url}
                alt={primaryImage?.alt || activeProduct.name}
                className="h-full w-full object-contain "
              />

              {/* Reference code */}
              <Small
                className="
                absolute left-3 top-3
                rounded-md
                bg-white/95
                px-3 py-1.5
                font-semibold
                tracking-wider
                text-tertiary
                shadow-sm
              "
              >
                {activeProduct.referenceCode}
              </Small>
            </div>

            {/* Next arrow */}
            <button
              type="button"
              onClick={nextProduct}
              aria-label="Next product"
              className="
              absolute right-3 z-20
              flex h-10 w-10
              items-center justify-center
              rounded-full bg-white
              shadow-md transition
              hover:scale-105
            "
            >
              <FaArrowRight size={14} />
            </button>
          </div>

          {/* =========================
            CAROUSEL INDICATORS
        ========================== */}

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, type: "spring" }}
            className="mt-4 flex justify-center gap-1"
          >
            {homeProducts.map((product, index) => (
              <button
                key={product.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`View ${product.name}`}
              >
                <GoDotFill
                  size={index === activeIndex ? 18 : 12}
                  className={
                    index === activeIndex ? "text-tertiary" : "text-neutral-300"
                  }
                />
              </button>
            ))}
          </motion.div>

        </div>

        {/* =========================
          PRODUCT INFORMATION
      ========================== */}

        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, type: "spring" }}
          className="mx-auto mt-1 w-full max-w-md px-5 text-center sm:mt-6 sm:max-w-lg lg:mt-0 lg:px-0 lg:text-left"
        >
          {/* Category + Gender */}
          <div
            className="
            flex items-center
            justify-center gap-2 lg:justify-start
            uppercase
            text-tertiary
          "
          >
            <H5>{activeProduct.category}</H5>

            <GoDotFill size={8} />

            <H5>{activeProduct.gender}</H5>
          </div>

          {/* Name */}
          <H2 className="mt-2">{activeProduct.name}</H2>

          {/* Reference */}
          <Small className="mt-1 block text-body shade">
            Ref: {activeProduct.referenceCode}
          </Small>

          {/* Description */}
          <P className="mx-auto mt-3 max-w-sm leading-relaxed text-body lg:mx-0 lg:max-w-none">
            {activeProduct.shortDescription}
          </P>

          {/* Material */}
          <div
            className=" shade
            mt-3 flex
            items-center justify-center lg:justify-start
            gap-2 text-tertiary
          "
          >
            <BiShieldAlt size={16} />

            <H5>{activeProduct.material}</H5>
          </div>

          {/* =========================
            PRICE
        ========================== */}

          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <H2 className="sm:text-2xl lg:text-3xl">{formatPrice(activeProduct.price)}</H2>

            {activeProduct.previousPrice && (
              <Small className="text-body line-through opacity-60">
                {formatPrice(activeProduct.previousPrice)}
              </Small>
            )}
          </div>

          {/* =========================
            ACTIONS
        ========================== */}

          <div className="mt-5 flex flex-col gap-2">
            <Button
              className="w-full"
              leftIcon={<FaWhatsapp size={18} />}
              rightIcon={<FaArrowRight size={14} />}
            >
              Order This Pair
            </Button>

            <Button
              variant="outline"
              className="w-full"
              leftIcon={<FaWhatsapp size={18} />}
            >
              Customize Your Pair
            </Button>
          </div>

          {/* View catalogue */}

          <Button
            className="mt-1 w-full"
            variant="ghost"
            onClick={() => navigate("/catalogue")}
          >
            View All Designs
            <FaArrowRight size={12} className="text-tertiary" />
          </Button>
        </motion.div>
      </section>
    </Reveal>
  );
};

export default ProductShowcase;
