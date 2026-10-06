// import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import business from "../../data/business";
import { H5, Small } from "../ui/Typography";
import footerBackground from "../../assets/images/maker/footerBg.jpg";

const Footer = () => {
  return (
    <footer className="border-t textshade shadow-lg border-neutral-200 px-5 pb-2 pt-8 text-center sm:px-6 sm:pb-6 sm:pt-10 lg:px-8" style={{backgroundImage: `url(${footerBackground})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
      <div className="mx-auto max-w-md sm:max-w-2xl lg:max-w-6xl">
        {/* Brand */}
        <H5 className="-mb-3 uppercase sm:mb-0">{business.name}</H5>
        <Small className="uppercase shade"> {business.tagline} </Small>
        {/* Main contact actions */}
        <div className="mt-2 flex flex-wrap items-center justify-center gap-5 text-sm sm:mt-4 sm:gap-10">
          <div className="flex flex-col items-center gap-1">
            <a
              href={`https://wa.me/${business.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-xs sm:min-h-10 sm:gap-2 sm:text-base"
            >
              <FaWhatsapp className="text-green-900 " />
              WhatsApp
            </a>
          </div>
          <div className="flex flex-col items-center gap-1">
            <a
              href={`tel:${business.phone}`}
              className="flex items-center gap-1 text-xs sm:min-h-10 sm:gap-2 sm:text-base"
            >
              <FaPhoneAlt size={9} />
              Call
            </a>
          </div>
          <div className="flex flex-col items-center gap-1">
            <a
              href={business.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-xs sm:min-h-10 sm:gap-2 sm:text-base"
            >
              <FaInstagram className="text-primary " />
              Instagram
            </a>
          </div>
        </div>

        <div className="mt-6 flex w-full items-center gap-3">
          <span className="h-px flex-1 bg-neutral-300" />

          <p className="text-[8px] tracking-wider text-primary/60 sm:text-xs">
            © {new Date().getFullYear()} {business.name}
          </p>

          <span className="h-px flex-1 bg-neutral-300" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
