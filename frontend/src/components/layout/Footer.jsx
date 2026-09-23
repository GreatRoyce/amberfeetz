// import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import business from "../../data/business";
import { H5, Small } from "../ui/Typography";
import footerBackground from "../../assets/images/maker/footerBg.jpg";

const Footer = () => {
  return (
    <footer className="border-t  textshade shadow-lg border-neutral-200 px-5 pb-2 pt-8 text-center " style={{backgroundImage: `url(${footerBackground})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
      <div className="mx-auto max-w-md">
        {/* Brand */}
        <H5 className="-mb-3 uppercase">{business.name}</H5>
        <Small className="uppercase shade"> {business.tagline} </Small>
        {/* Main contact actions */}
        <div className="mt-2 flex items-center justify-center gap-5 text-sm">
          <div className="flex flex-col items-center gap-1">
            <a
              href={`https://wa.me/${business.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-xs"
            >
              <FaWhatsapp className="text-green-900 " />
              WhatsApp
            </a>
          </div>
          <div className="flex flex-col items-center gap-1">
            <a
              href={`tel:${business.phone}`}
              className="flex items-center gap-1 text-xs"
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
              className="flex items-center gap-1 text-xs"
            >
              <FaInstagram className="text-primary " />
              Instagram
            </a>
          </div>
        </div>

        <div className="mt-6 flex w-full items-center gap-3">
          <span className="h-px flex-1 bg-neutral-300" />

          <p className="whitespace-nowrap text-[8px] tracking-wider text-primary/60">
            © {new Date().getFullYear()} {business.name}
          </p>

          <span className="h-px flex-1 bg-neutral-300" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
