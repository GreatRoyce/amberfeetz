import PageContainer from "../components/layout/PageContainer";
import business from "../data/business";
import { buildWhatsAppUrl } from "../features/whatsapp/utils/buildWhatsAppUrl";
import repairSteps from "../data/repairSteps";
import repairFAQs from "../data/repairFAQs";
import Accordion from "../components/ui/Accordion";
import beforeImage from "../assets/images/maker/beforerepair.jpg";
import afterImage from "../assets/images/maker/afterrepair.jpg";

import shoemaker from "../assets/images/maker/shoemaker.jpg";

import { Small } from "../components/ui/Typography";

import { FaRegHeart } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import { IoRibbonOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaArrowRight, FaTools, FaWhatsapp } from "react-icons/fa";

const Repairs = () => {
  const repairWhatsAppUrl = buildWhatsAppUrl({
    number: business.whatsapp,
    text: "Hello, I'd like to discuss repairing a pair of shoes. I'll send photos of the footwear here so you can assess it.",
  });
  return (
    <PageContainer>
      <main className="space-y-3">
        {/* =====================
            HERO
        ====================== */}

        <section
          className="
            relative h-56
            overflow-hidden
            rounded-xl
            bg-cover bg-center
          "
          style={{
            backgroundImage: `url(${shoemaker})`,
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Hero content */}
          <div
            className="
              absolute inset-x-0 bottom-0
              z-10 p-2
              text-offwhite
            "
          >
            <Small className="uppercase tracking-[0.2em]">
              Shoe Repair & Restoration
            </Small>

            <h2 className="mt-1 font-display text-[20px] font-semibold leading-tight tracking-wide text-offwhite">
              Give Your Shoes Another Life.
            </h2>

            <p className="mt-1 max-w-xs text-[8px] leading-relaxed text-offwhite/80">
              Expert repair and careful restoration for footwear worth keeping.
            </p>
          </div>
        </section>

        {/* =====================
            REPAIR PROCESS
        ====================== */}

        <section aria-labelledby="repair-process-heading">
          <div className="mb-1 flex flex-wrap items-center justify-between gap-1 p-1">
            <h2
              id="repair-process-heading"
              className="font-display text-[12px] font-semibold text-inverted"
            >
              How It Works
            </h2>
            <span className="text-[8px] uppercase tracking-wider text-body">
              3 simple steps
            </span>
          </div>

          <ol className="grid grid-cols-3 gap-1">
            {repairSteps.map((step) => {
              const Icon = step.icon;

              return (
                <li
                  key={step.id}
                  className="min-w-0 rounded-lg border border-tertiary/20 bg-tertiary/10 p-1"
                >
                  <div className="mb-1 flex items-center justify-between gap-1">
                    <span
                      className="text-[8px] font-semibold tracking-wider text-primary"
                      aria-hidden="true"
                    >
                      {step.id}
                    </span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-offwhite text-primary">
                      <Icon size={16} aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="flex min-h-7 items-center font-display text-[10px] font-semibold leading-tight text-inverted">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-[8px] leading-relaxed text-body">
                    {step.description}
                  </p>
                </li>
              );
            })}
          </ol>
        </section>

        <div className="flex items-center justify-between">
          <p className="text-[11px] font-display text-inverted">
            Real Repairs. Real Results.
          </p>
          <div className="flex justify-center items-center gap-1 text-inverted/60">
            <Small>Before </Small>
            <span>
              <FaArrowRight size={6} />
            </span>{" "}
            <Small>After.</Small>
          </div>
        </div>
        <div className="my-1 grid grid-cols-[1fr_auto_1fr] h-24 relative">
          <div
            style={{
              backgroundImage: `url(${beforeImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className=""
          ></div>
          <MdOutlineArrowForwardIos
            size={14}
            className="self-center rounded-full p-1 z-10 justify-self-center"
          />
          <div
            style={{
              backgroundImage: `url(${afterImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className=""
          ></div>
        </div>

        {/* =====================
            WHATSAPP CTA
        ====================== */}

        <section>
          <a
            href={repairWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex w-full
              items-center justify-center
              gap-1
              rounded-xl
              bg-green-900
              px-1 py-2
              text-[8px]
              font-semibold
              uppercase
              tracking-wider
              text-offwhite
              transition
              hover:opacity-90
            "
          >
            <FaWhatsapp size={18} />
            Discuss a Repair on WhatsApp
            <MdKeyboardArrowRight size={18} />
          </a>

          <p
            className="
              mx-auto mt-1 p-1
              max-w-xs
              text-center
              text-[8px]
              leading-tight
              text-inverted/70
            "
          >
            Send photos of the footwear on WhatsApp and tell us what happened.
            Typically assessed within a few hours.
          </p>

          <div className="h-fit grid grid-cols-4 bg-gray-500/10 rounded-md my-1 p-[0.5px] shadow-md">
            <div className="flex flex-col justify-center items-center text-center mx-auto p-1">
              <CiDeliveryTruck />
              <p className="text-[7px] leading-tight text-inverted/70 pt-1">
                Local Drop-off & Nationwide Shipping
              </p>
            </div>

            <div className="flex flex-col justify-center items-center text-center mx-auto border ">
              <IoRibbonOutline />
              <p className="text-[7px] leading-tight text-inverted/70 pt-1">
                Quality Materials & Finishing
              </p>
            </div>

            <div className="flex flex-col justify-center items-center text-center mx-auto p-1 border border-l-0">
              <FaRegClock />
              <p className="text-[7px] leading-tight text-inverted/70 pt-1">
                Transparent Advice and Timelines
              </p>
            </div>

            <div className="flex flex-col justify-center items-center text-center mx-auto p-1">
              <FaRegHeart />
              <p className="text-[7px] leading-tight text-inverted/70 pt-1">
                Extend the Life of Your Footwear
              </p>
            </div>
          </div>

          <div className="h-fit bg-gray-500/10 justify-center items-center grid grid-cols-[auto_5fr] shadow-md rounded-md my-2 p-1">
            <FaTools
              size={18}
              className="rounded-full p-1 border border-primary bg-primary text-offwhite m-1"
            />
            <div className="flex flex-col justify-start text-left mx-auto p-1 ">
              <p className="text-[10px] leading-tight font-display text-inverted pt-1">
                Our Craft Guarantee
              </p>
              <small className="text-[8px] leading-tight text-inverted/70 pt-1">
                All repairs use genuine materials such as vegetable-tanned
                leather insoles, English oak bark soles and traditional
                stitching methods to preserve the original character and lasting
                quality of your shoes.
              </small>
            </div>
            
          </div>
          <div>
            <div className="mt-3">
              <div className="mb-1 flex items-center justify-between gap-1">
                <p className="font-display text-[12px] text-inverted">
                  Frequently Asked Questions
                </p>

                <Small className="uppercase tracking-wider">Repairs</Small>
              </div>

              <Accordion items={repairFAQs} />
            </div>
          </div>
        </section>
      </main>
    </PageContainer>
  );
};

export default Repairs;
