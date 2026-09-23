import { Link } from "react-router-dom";
import { FaArrowRight, FaChevronRight, FaRegClock, FaRegCalendarAlt, FaRegHandshake } from "react-icons/fa";
import PageContainer from "../components/layout/PageContainer";
import { Small } from "../components/ui/Typography";
import { Logo } from "../components/ui/Logo";
import business from "../data/business";
import { contactHero, contactMethods, workshop, visitingHours, connectLinks, personalApproach } from "../data/contact";
import { buildWhatsAppUrl } from "../features/whatsapp/utils/buildWhatsAppUrl";

const focusStyle = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tertiary";
const cardStyle = "rounded-xl border border-tertiary/20 p-4 sm:p-5";
const iconStyle = "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-tertiary/20 text-primary";
const externalProps = { target: "_blank", rel: "noopener noreferrer" };

const Contact = () => {
  const whatsappUrl = business.whatsapp ? buildWhatsAppUrl({ number: business.whatsapp }) : "";
  const destinations = {
    whatsapp: whatsappUrl,
    phone: business.phone ? `tel:${business.phone.replace(/[^+\d]/g, "")}` : "",
    email: business.email ? `mailto:${business.email}` : "",
    instagram: business.instagram,
  };
  const availableMethods = contactMethods.filter((method) => destinations[method.type]);
  const address = workshop.location.address || business.address;
  const LocationIcon = workshop.location.icon;
  

  return (
    <PageContainer wide>
      <div className="mx-auto max-w-3xl space-y-2 sm:space-y-2">
        <header style={{ backgroundImage: `url(${contactHero.image})` }}
          className="relative isolate overflow-hidden rounded-xl bg-primary bg-cover bg-center text-offwhite">
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/65 to-black/20" aria-hidden="true" />
          <div className="flex min-h-52 flex-col justify-center p-5 sm:min-h-80 sm:p-8">
            <Small className="leading-relaxed text-offwhite/80">{contactHero.eyebrow}</Small>
            <h1 className="mt-3 max-w-sm font-display text-2xl font-semibold leading-tight sm:text-5xl">{contactHero.title}</h1>
            <p className="mt-3 max-w-sm text-xs leading-relaxed text-offwhite/90 sm:text-base">{contactHero.description}</p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
              {availableMethods.map(({ id, icon: Icon, type, label }) => (
                <a key={id} href={destinations[type]} {...(type === "whatsapp" ? externalProps : {})}
                  className={`inline-flex min-h-11 items-center gap-2 text-xs text-offwhite hover:text-tertiary ${focusStyle}`}>
                  <Icon size={18} className="shrink-0 text-tertiary" aria-hidden="true" />{label}
                </a>
              ))}
            </div>
          </div>
        </header>

        <section aria-label="Contact options" className="grid gap-3 sm:grid-cols-2">
          {contactMethods.map(({ id, icon: Icon, title, description, label, type, recommended }) => (
            <article key={id} className={`${cardStyle} ${recommended ? "bg-secondary sm:col-span-2" : "bg-white/60"}`}>
              <div className={`flex items-start gap-3 ${recommended ? "sm:items-center" : ""}`}>
                <span className={recommended ? "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-offwhite" : iconStyle}><Icon size={23} aria-hidden="true" /></span>
                <div className={`min-w-0 flex-1 ${recommended ? "sm:flex sm:items-center sm:gap-5" : ""}`}>
                  <div className="min-w-0 flex-1">
                    {recommended && <Small className="leading-relaxed text-primary">Recommended</Small>}
                    <h2 className="font-display text-lg font-semibold text-headline sm:text-xl">{title}</h2>
                    {!recommended && destinations[type] && (
                      <a href={destinations[type]} className={`mt-1 inline-block break-all text-sm text-inverted hover:text-primary ${focusStyle}`}>
                        {type === "phone" ? business.phone : business.email}
                      </a>
                    )}
                    <p className="mt-1 text-sm leading-relaxed">{description}</p>
                    {!destinations[type] && <p className="mt-2 text-xs text-primary">
                      {whatsappUrl ? "Please contact us on WhatsApp for now." : "Contact details will be available soon."}
                    </p>}
                  </div>
                  {recommended && destinations[type] && (
                    <a href={destinations[type]} {...externalProps}
                      className={`mt-3 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-xs font-semibold uppercase text-offwhite hover:opacity-90 sm:mt-0 sm:shrink-0 ${focusStyle}`}>
                      <Icon size={20} aria-hidden="true" />{label}<FaArrowRight size={12} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </section>

        <section aria-labelledby="workshop-title" className={cardStyle}>
          <div className="grid items-center gap-5 sm:grid-cols-2">
            <div>
              <Small className="leading-relaxed text-primary">{workshop.eyebrow}</Small>
              <h2 id="workshop-title" className="mt-1 font-display text-2xl font-semibold text-headline">{workshop.title}</h2>
              <p className="mt-2 text-sm leading-relaxed">{workshop.description}</p>
              <div className="mt-4 flex items-start gap-3">
                <span className={iconStyle}><LocationIcon size={24} aria-hidden="true" /></span>
                <div className="min-w-0">
                  <p className="font-medium text-inverted">{workshop.location.label}</p>
                  {address ? <address className="mt-1 not-italic">{address}</address> : <p className="mt-1">Contact us to confirm the workshop location.</p>}
                  {workshop.location.directionsUrl && (
                    <a href={workshop.location.directionsUrl} {...externalProps}
                      className={`mt-2 inline-flex min-h-11 items-center gap-2 font-medium text-primary ${focusStyle}`}>
                      Get directions <FaArrowRight size={12} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </div>
            <img src={workshop.image} alt="Shoes and tools in the AmberFeetz workshop" loading="lazy" decoding="async"
              className="aspect-[4/3] w-full rounded-lg object-cover" />
          </div>
          {address && (
            <iframe title={`${workshop.location.label} location`} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
              className="mt-4 h-52 w-full rounded-lg border-0 sm:h-60" allowFullScreen />
          )}
        </section>

        <section aria-labelledby="visiting-hours-title" className={cardStyle}>
          <div className="flex items-start gap-3">
            <span className={`${iconStyle} hidden sm:flex`}><FaRegClock size={23} aria-hidden="true" /></span>
            <div className="min-w-0 flex-1">
              <h2 id="visiting-hours-title" className="font-code text-xs uppercase tracking-wider text-primary">{visitingHours.eyebrow}</h2>
              <dl className="mt-3 divide-y divide-tertiary/20">
                {visitingHours.hours.map(({ id, days, time, note }) => (
                  <div key={id} className="grid grid-cols-2 gap-3 py-2 text-sm">
                    <dt className="text-inverted">{days}</dt>
                    <dd>{time || "Contact us to confirm"}{note && <span className="block text-xs">{note}</span>}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 flex items-start gap-3 border-t border-tertiary/20 pt-3 text-xs leading-relaxed">
                <FaRegCalendarAlt className="mt-0.5 shrink-0 text-primary" size={16} aria-hidden="true" />{visitingHours.description}
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="connect-title" className={cardStyle}>
          <h2 id="connect-title" className="font-code text-xs uppercase tracking-wider text-primary">More ways to connect</h2>
          <div className="mt-2 divide-y divide-tertiary/20">
            {connectLinks.filter((link) => link.type === "internal" || destinations[link.type]).map(({ id, icon: Icon, title, description, type, path }) => {
              const content = <>
                <span className={iconStyle}><Icon size={22} aria-hidden="true" /></span>
                <span className="min-w-0 flex-1">
                  <span className="block font-medium text-inverted">{title}</span>
                  <span className="mt-1 block text-xs leading-relaxed text-body">{description}</span>
                </span>
                <FaChevronRight size={12} className="shrink-0" aria-hidden="true" />
              </>;
              const className = `flex items-center gap-3 py-3 text-primary hover:opacity-80 ${focusStyle}`;
              return type === "internal"
                ? <Link key={id} to={path} className={className}>{content}</Link>
                : <a key={id} href={destinations[type]} {...externalProps} className={className}>{content}</a>;
            })}
          </div>
        </section>

        <section aria-labelledby="personal-approach-title" className={`${cardStyle} flex items-start gap-3 bg-secondary`}>
          <span className={iconStyle}><FaRegHandshake size={25} aria-hidden="true" /></span>
          <div className="min-w-0">
            <h2 id="personal-approach-title" className="font-display text-lg font-semibold text-headline">{personalApproach.title}</h2>
            <p className="mt-1 text-sm leading-relaxed">{personalApproach.description}</p>
          </div>
        </section>

      </div>
    </PageContainer>
  );
};

export default Contact;

