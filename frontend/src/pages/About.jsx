import { useNavigate } from "react-router-dom";
import aboutData, { aboutHero } from "../data/about";
import business from "../data/business";
import PageContainer from "../components/layout/PageContainer";
import { Small } from "../components/ui/Typography";
import { buildWhatsAppUrl } from "../features/whatsapp/utils/buildWhatsAppUrl";
import { FaLocationDot } from "react-icons/fa6";
import { RiDoubleQuotesR } from "react-icons/ri";
import { TbShoe } from "react-icons/tb";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import Button from "../components/ui/Button";

const About = () => {
  const navigate = useNavigate();
  const whatsappUrl = buildWhatsAppUrl({
    number: business.whatsapp,
    text: "Hello, I'd like to discuss custom designs, adjustments and materials with the maker.",
  });

  return (
    <PageContainer wide>
      <div className="space-y-3 pb-1 sm:space-y-6 lg:space-y-8">
        {aboutHero && (
          <section
            aria-labelledby="about-title"
            className="grid min-h-48 grid-cols-[1.1fr_1fr] overflow-hidden rounded-xl bg-primary sm:min-h-80 lg:min-h-[420px]"
          >
            <div className="flex min-w-0 flex-col items-start p-2 py-3 text-white sm:p-6 lg:p-10">
              <span className="mb-3 h-px w-6 bg-tertiary" aria-hidden="true" />
              <Small className="uppercase tracking-wider leading-relaxed text-white/80">
                {aboutHero.eyebrow}
              </Small>
              <h1
                id="about-title"
                className="mb-2 mt-1 font-display text-[14px] font-semibold leading-snug sm:text-3xl lg:text-4xl"
              >
                {aboutHero.title}
              </h1>
              <p className="leading-relaxed text-white/85 text-[10px] sm:text-sm md:text-base">
                {aboutHero.description}
              </p>
              <div className="mt-auto flex items-start gap-1 pt-4">
                <FaLocationDot
                  size={10}
                  className="mt-0.5 shrink-0 text-tertiary"
                  aria-hidden="true"
                />
                <Small className="leading-relaxed tracking-wider text-white/80">
                  {aboutHero.location}
                </Small>
              </div>
            </div>
            <div className="relative min-w-0">
              <img
                src={aboutHero.image}
                alt="Shoemaker stitching a leather shoe in a workshop"
                className="absolute inset-0 h-full w-full object-cover object-center"
                fetchPriority="high"
              />
            </div>
          </section>
        )}

        {aboutData.map((item, index) => (
          <section
            key={item.id}
            aria-labelledby={`about-section-${item.id}`}
            className={`grid gap-1 overflow-hidden rounded-xl border border-tertiary/15 bg-white p-1 sm:gap-4 sm:p-3 lg:gap-8 lg:p-4 ${index % 2 === 0 ? "grid-cols-[2fr_3fr]" : "grid-cols-[3fr_2fr]"}`}
          >
            {/* Image */}
            <div
              className={`relative min-h-32 overflow-hidden rounded-lg bg-secondary sm:min-h-56 lg:min-h-72 ${index % 2 === 0 ? "" : "order-2"}`}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex min-w-0 flex-col justify-center p-1 py-2 sm:p-3 lg:p-6">
              {/* Number + Label */}
              <div className="mb-2 flex items-center gap-1 text-primary">
                <Small className="flex h-5 min-w-5 shrink-0 items-center justify-center rounded-full bg-tertiary/15 p-1 font-medium tracking-normal">
                  {item.numbering}
                </Small>
                <Small className="uppercase tracking-wider leading-relaxed">
                  {item.label}
                </Small>
              </div>

              {/* Title */}
              <h2
                id={`about-section-${item.id}`}
                className="mb-1 font-display font-semibold text-inverted text-[12px] leading-tight sm:text-2xl lg:text-3xl"
              >
                {item.title}
              </h2>

              {/* Description */}
              <p className="leading-relaxed text-[8px] sm:text-xs md:text-sm text-inverted/70">
                {item.description}
              </p>
            </div>
          </section>
        ))}
        <figure className="rounded-xl border border-tertiary/20 bg-secondary px-3 py-3 text-center sm:p-6 lg:p-10">
          <RiDoubleQuotesR
            size={18}
            className="text-tertiary mx-auto mb-1"
            aria-hidden="true"
          />
          <blockquote className="mx-auto max-w-[220px] sm:max-w-lg lg:max-w-2xl">
            <p className="leading-relaxed italic text-[9px] font-display font-normal text-inverted sm:text-xl lg:text-2xl">
              "Good shoes are not just made. They are made with intention."
            </p>
          </blockquote>
          <span
            className="mx-auto my-2 block h-px w-6 bg-tertiary/60"
            aria-hidden="true"
          />
          <figcaption>
            <Small className="leading-relaxed text-primary">
              THE AMBERFEETZ MAKER
            </Small>
          </figcaption>
        </figure>

        <div className="rounded-xl border border-tertiary/15 bg-white p-2 sm:p-6">
          <div className="flex flex-col gap-1 sm:mx-auto sm:max-w-2xl sm:flex-row sm:gap-4">
            <Button
              leftIcon={<TbShoe size={14} aria-hidden="true" />}
              rightIcon={<FaArrowRight size={10} aria-hidden="true" />}
              fullWidth
              className="min-h-8 rounded-lg text-white text-[8px] sm:text-xs md:text-sm uppercase shadow-none hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              size="sm"
              onClick={() => navigate("/how-to-order")}
            >
              Learn More
            </Button>
            <Button
              leftIcon={<FaWhatsapp size={14} aria-hidden="true" />}
              rightIcon={<FaArrowRight size={10} aria-hidden="true" />}
              variant="outline"
              fullWidth
              className="h-auto min-h-8 gap-1 rounded-lg border-primary/20 bg-offwhite p-1 text-inverted shadow-none hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              size="xs"
              onClick={() =>
                window.open(whatsappUrl, "_blank", "noopener,noreferrer")
              }
            >
              CHAT WITH AMBERFEETZ ON WHATSAPP
            </Button>
          </div>
          <p className="text-[8px] sm:text-xs md:text-sm leading-relaxed text-inverted/70 mt-1 text-center p-1 mx-auto">
            Discuss custom designs, adjustments, materials or any questions
            directly with the maker.
          </p>
        </div>
      </div>
    </PageContainer>
  );
};

export default About;
