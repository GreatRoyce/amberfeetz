import { useNavigate } from "react-router-dom";
import { Small } from "../components/ui/Typography";
import orderData from "../data/order";
import business from "../data/business";
import orderHero from "../assets/images/maker/order-hero.jpg";
import PageContainer from "../components/layout/PageContainer";
import { FaArrowRight, FaCamera, FaWhatsapp } from "react-icons/fa";
import Button from "../components/ui/Button";
import { TbShoe } from "react-icons/tb";
import { buildWhatsAppUrl } from "../features/whatsapp/utils/buildWhatsAppUrl";

const HowToOrder = () => {
  const navigate = useNavigate();
  const whatsappUrl = buildWhatsAppUrl({
    number: business.whatsapp,
    text: "Hello, I'd like to discuss ordering a pair, custom designs, sizes and materials with the maker.",
  });

  return (
    <PageContainer>
      <header
        style={{ backgroundImage: `url(${orderHero})` }}
        className="relative isolate min-h-44 overflow-hidden rounded-md bg-primary bg-cover bg-center bg-no-repeat sm:min-h-72 lg:min-h-96"
      >
        <div
          className="absolute inset-0 -z-10 rounded-md border bg-black/40"
          aria-hidden="true"
        />
        <div className="flex w-3/4 flex-col space-y-1 p-4 sm:max-w-lg sm:space-y-3 sm:p-8 lg:max-w-xl lg:p-12">
          <Small className="text-offwhite leading-relaxed">
            Ordering & Customization
          </Small>
          <h1 className="text-offwhite text-lg font-semibold tracking-wide font-display sm:text-3xl lg:text-5xl">
            How to Order
          </h1>
          <p className="text-offwhite text-xs leading-relaxed sm:text-base">
            A pair from AmberFeetz doesn't come from a warehouse. It begins with
            a conversation and is crafted for you.
          </p>
        </div>
      </header>

      <div className="space-y-4 sm:space-y-6 lg:space-y-8">
        <ol className="grid gap-3 sm:gap-5 lg:grid-cols-2 lg:gap-6" aria-label="How to order a pair" role="list">
          {orderData.map((step) => (
            <li
              className="textshade grid grid-cols-[auto_minmax(0,1fr)_30%] items-start gap-2 rounded-md border p-2 sm:gap-4 sm:p-4"
              key={step.id}
            >
              <small className="rounded-full border bg-tertiary/30 p-1 font-semibold text-inverted">
                {step.numbering}
              </small>
              <div className="flex min-w-0 flex-col items-start space-y-1 break-words text-left">
                <Small className="text-gray-500 leading-relaxed">
                  {step.label}
                </Small>
                <h2 className="text-sm font-display font-semibold sm:text-xl">
                  {step.title}
                </h2>
                <p className="text-gray-700 text-xs leading-relaxed sm:text-base">
                  {step.description}
                </p>
              </div>
              <img
                src={step.image}
                alt=""
                loading="lazy"
                decoding="async"
                className="h-32 w-full rounded-sm object-cover sm:h-44 lg:h-full lg:min-h-44"
              />
            </li>
          ))}
        </ol>

        <div className="h-fit bg-gray-500/10 justify-center items-center grid grid-cols-[auto_minmax(0,1fr)] shadow-md rounded-md my-2 p-1 sm:gap-3 sm:p-5">
          <FaCamera
            size={18}
            aria-hidden="true"
            className="rounded-full p-1 border border-primary bg-primary text-offwhite m-1"
          />
          <div className="flex flex-col justify-start text-left mx-auto p-1">
            <h2 className="text-[10px] sm:text-sm md:text-base leading-relaxed font-display text-inverted pt-1">
              Our Craft Guarantee
            </h2>
            <small className="text-[10px] sm:text-sm md:text-base leading-relaxed text-inverted/70 pt-1">
              All repairs use genuine materials such as vegetable-tanned leather
              insoles, English oak bark soles and traditional stitching methods
              to preserve the original character and lasting quality of your
              shoes.
            </small>
          </div>
        </div>

        <div className="rounded-xl border border-tertiary/15 bg-white p-2 sm:p-6">
          <div className="flex flex-col gap-1 sm:mx-auto sm:max-w-2xl sm:flex-row sm:gap-4">
            <Button
              leftIcon={<TbShoe size={14} aria-hidden="true" />}
              rightIcon={<FaArrowRight size={10} aria-hidden="true" />}
              fullWidth
              className="min-h-11 rounded-lg text-white uppercase shadow-none hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              size="sm"
              onClick={() => navigate("/catalogue")}
            >
              Browse Designs
            </Button>
            <Button
              leftIcon={<FaWhatsapp size={14} aria-hidden="true" />}
              rightIcon={<FaArrowRight size={10} aria-hidden="true" />}
              variant="outline"
              fullWidth
              className="h-auto min-h-11 gap-1 rounded-lg border-primary/20 bg-offwhite py-2 text-inverted shadow-none hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              size="sm"
              onClick={() =>
                window.open(whatsappUrl, "_blank", "noopener,noreferrer")
              }
            >
              CHAT ON WHATSAPP
            </Button>
          </div>
          <p className="text-[10px] sm:text-sm md:text-base leading-relaxed text-inverted/70 mt-1 text-center p-1 mx-auto">
            Discuss custom designs, adjustments, materials or any questions
            directly with the maker.
          </p>
        </div>
      </div>
    </PageContainer>
  );
};

export default HowToOrder;
