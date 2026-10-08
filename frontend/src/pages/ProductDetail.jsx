import { Link, useParams } from "react-router-dom";
import products from "../data/product";
import Navbar from "../components/layout/Navbar";
import PageContainer from "../components/layout/PageContainer";
import Button from "../components/ui/Button";
import { H5, Small, H2, P } from "../components/ui/Typography";
import { FaArrowLeft, FaArrowRight, FaWhatsapp } from "react-icons/fa";
import Carousel from "../components/ui/Carousel";
import { motion } from "framer-motion";
import { BiShieldAlt } from "react-icons/bi";
import { GoDotFill, GoShieldCheck } from "react-icons/go";
import { IoChatboxEllipses } from "react-icons/io5";
import Footer from "../components/layout/Footer";
import { TbTruckDelivery } from "react-icons/tb";
import business from "../data/business";
import { buildWhatsAppUrl } from "../features/whatsapp/utils/buildWhatsAppUrl";
import {
  buildCustomizationMessage,
  buildOrderMessage,
} from "../features/whatsapp/utils/whatsappMessages";

const ProductDetail = () => {
  const { reference = "" } = useParams();

  const product = products.find(
    (item) => item.referenceCode.toLowerCase() === reference.toLowerCase(),
  );

  if (!product) {
    return (
      <PageContainer wide>
        <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm sm:p-8">
          <h1 className="text-lg font-semibold text-headline sm:text-3xl">
            Design not found
          </h1>
          <Link
            to="/catalogue"
            className="mt-3 inline-flex items-center gap-2 text-[10px] sm:text-sm md:text-base font-semibold uppercase tracking-[0.18em] text-primary"
          >
            <FaArrowLeft size={8} />
            Back to Catalogue
            
          </Link>
        </div>
      </PageContainer>
    );
  }

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0,
    }).format(price);

  const orderUrl = buildWhatsAppUrl({
    number: business.whatsapp,
    text: buildOrderMessage(product),
  });

  const customizeUrl = buildWhatsAppUrl({
    number: business.whatsapp,
    text: buildCustomizationMessage(),
  });

  return (
    <div className="min-h-screen bg-[#f9f6f2]">
      <Navbar />

      <main className="page-shell pt-6">
        <div className="mb-3 flex items-center justify-between font-semibold text-headline">
          <div className="flex items-center gap-1">
            <FaArrowLeft size={8} />
            <Link
              className="text-[8px] sm:text-xs md:text-sm tracking-[0.18em] text-primary hover:underline"
              to="/catalogue"
            >
              Back to Catalogue
            </Link>
          </div>

          <Small className="text-[8px] sm:text-xs md:text-sm tracking-[0.18em] text-tertiary">
            {product.referenceCode}
          </Small>
        </div>

        <div className="grid min-w-0 gap-3 sm:gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-start lg:gap-10 xl:gap-14">
          <Carousel
            key={product.referenceCode}
            images={product.images}
            className="mx-auto min-w-0 w-full"
          />

          <motion.div
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, type: "spring" }}
            className="min-w-0 text-left lg:pt-4"
          >
            <div className="flex items-center gap-2 text-left uppercase font-semibold text-tertiary">
              <H5>{product.category}</H5>
              <GoDotFill size={8} />
              <H5>{product.gender}</H5>
            </div>

            <H2 className="mt-1 text-left text-[20px] leading-tight">
              {product.name}
            </H2>

            <Small className="mt-1 block text-left text-[10px] sm:text-sm md:text-base text-body shade">
              Ref: {product.referenceCode}
            </Small>

            <P className="mt-2 max-w-sm text-left text-[11px] sm:text-sm md:text-base leading-relaxed text-body sm:max-w-none">
              {product.shortDescription}
            </P>

            <div className="mt-2 flex items-center justify-start gap-1 text-tertiary">
              <BiShieldAlt size={12} />
              <H5>{product.material}</H5>
            </div>

            <div className="mt-3 flex flex-wrap items-center justify-start gap-2 sm:mt-6">
              <H2 className="text-[22px] sm:text-2xl lg:text-3xl">{formatPrice(product.price)}</H2>

              {product.previousPrice && (
                <Small className="text-[10px] sm:text-sm md:text-base text-body line-through opacity-60">
                  {formatPrice(product.previousPrice)}
                </Small>
              )}
            </div>

            <div className="mt-4 flex flex-col gap-2 sm:gap-3">
              <a href={orderUrl} target="_blank" rel="noreferrer">
                <Button
                  className="w-full"
                  leftIcon={<FaWhatsapp size={16} />}
                  rightIcon={<FaArrowRight size={12} />}
                  size="sm"
                >
                  Order This Pair
                </Button>
              </a>

              <a href={customizeUrl} target="_blank" rel="noreferrer">
                <Button
                  variant="outline"
                  className="w-full"
                  leftIcon={<FaWhatsapp size={16} />}
                  size="sm"
                >
                  Customize Your Pair
                </Button>
              </a>
            </div>

            <div className="mb-2 mt-4 grid grid-cols-3 gap-1 border-b border-gray-300 pb-2 sm:mt-6 sm:gap-3 sm:pb-4">
              <div className="grid grid-rows-2 items-center justify-center border-r border-gray-300 bg-offwhite px-1 py-2 text-center text-tertiary">
                <TbTruckDelivery size={18} className="mx-auto" />
                <Small className="capitalize text-[8px] sm:text-xs md:text-sm leading-tight">
                  National Delivery
                </Small>
              </div>

              <div className="grid grid-rows-2 items-center justify-center border-r border-gray-300 bg-offwhite px-1 py-2 text-center text-blue-900">
                <GoShieldCheck size={18} className="mx-auto" />
                <Small className="capitalize text-[8px] sm:text-xs md:text-sm leading-tight">
                  Quality Guaranteed
                </Small>
              </div>

              <div className="grid grid-rows-2 items-center justify-center bg-offwhite px-1 py-2 text-center text-green-900">
                <IoChatboxEllipses size={18} className="mx-auto" />
                <Small className="capitalize text-[8px] sm:text-xs md:text-sm leading-tight">
                  Chat on WhatsApp
                </Small>
              </div>
            </div>

          </motion.div>
        </div>

          <section aria-label="Related designs" className="mt-4 flex flex-col gap-2 sm:mt-8 sm:gap-4 lg:mt-12">
            <div className="flex items-center justify-between">
              <P className="text-[10px] sm:text-sm md:text-base font-semibold uppercase tracking-[0.18em] text-headline">
                You may also like
              </P>

              <Link
                to="/catalogue"
                className="flex items-center gap-1 text-[8px] sm:text-xs md:text-sm font-semibold uppercase tracking-[0.16em] text-primary"
              >
                View All
                <FaArrowRight size={9} />
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-5 lg:gap-6">
              {products
                .filter((item) => item.referenceCode !== product.referenceCode)
                .slice(0, 3)
                .map((item) => (
                  <Link
                    key={item.id}
                    to={`/design/${item.referenceCode}`}
                    className="flex min-w-0 flex-col rounded-md border border-gray-300 bg-white p-1.5 shadow-sm sm:p-4"
                  >
                    <img
                      src={item.images[0]?.url}
                      alt={item.images[0]?.alt || item.name}
                      className="h-20 w-full rounded-sm object-contain sm:h-44 lg:h-60"
                    />
                    <P className="mt-1 text-[8px] sm:text-xs md:text-sm font-semibold uppercase text-headline">
                      {item.name}
                    </P>
                    <P className="mt-1 text-[9px] sm:text-sm md:text-base font-semibold text-primary">
                      ₦{item.price.toLocaleString()}
                    </P>
                  </Link>
                ))}
            </div>

            <a
              href={buildWhatsAppUrl({
                number: business.whatsapp,
                text: "Hello, I need help choosing a pair of shoes.",
              })}
              target="_blank"
              rel="noreferrer"
              className="mt-3 grid grid-cols-[32px_1fr_20px] items-center gap-2 rounded-lg border border-gray-300 bg-offwhite p-2"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-700 text-offwhite">
                <FaWhatsapp size={12} />
              </div>

              <div>
                <P className="text-left text-[10px] sm:text-sm md:text-base font-semibold text-headline">
                  Need help choosing?
                </P>
                <P className="text-left text-[8px] sm:text-xs md:text-sm text-body">
                  Chat with us on WhatsApp
                </P>
              </div>

              <FaArrowRight size={12} className="ml-auto text-primary" />
            </a>
          </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
