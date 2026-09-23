// src/data/contact.js

import workshopImage from "../assets/images/maker/shoesworkshop.jpg";
import contactHeroImage from "../assets/images/maker/order-hero.jpg";

import { FaWhatsapp, FaPhoneAlt, FaInstagram } from "react-icons/fa";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";

export const contactHero = {
  eyebrow: "CONTACT THE MAKER",
  title: "Let's Talk About Your Pair.",
  description:
    "Questions, custom orders, size advice or repairs — reach out directly. We're here to help.",
  image: contactHeroImage,
};

export const contactMethods = [
  {
    id: 1,
    title: "WhatsApp the Maker",
    description:
      "The fastest and easiest way to discuss designs, customizations, pricing and delivery.",
    label: "Chat on WhatsApp",
    type: "whatsapp",
    icon: FaWhatsapp,
    recommended: true,
  },

  {
    id: 2,
    title: "Call the Workshop",
    description:
      "Speak directly with us during available workshop hours.",
    label: "Call Now",
    type: "phone",
    icon: FaPhoneAlt,
    recommended: false,
  },

  {
    id: 3,
    title: "Send an Email",
    description:
      "For detailed enquiries, collaborations or other requests.",
    label: "Send Email",
    type: "email",
    icon: MdOutlineEmail,
    recommended: false,
  },
];

export const workshop = {
  eyebrow: "OUR WORKSHOP",
  title: "The Workshop",

  description:
    "This is where each AmberFeetz pair takes shape. Contact us before visiting to discuss your pair, view available materials or learn more about the process.",

  image: workshopImage,

  location: {
    icon: MdOutlineLocationOn,
    label: "AmberFeetz Workshop",
    address: "",
    directionsUrl: "",
  },
};

export const visitingHours = {
  eyebrow: "VISITING & CONSULTATION HOURS",

  description:
    "We recommend contacting us before visiting so we can confirm availability and give you proper attention.",

  hours: [
    {
      id: 1,
      days: "Monday – Friday",
      time: "",
      note: "",
    },
    {
      id: 2,
      days: "Saturday",
      time: "",
      note: "",
    },
    {
      id: 3,
      days: "Sunday",
      time: "Closed",
      note: "",
    },
  ],
};

export const connectLinks = [
  {
    id: 1,
    title: "Follow us on Instagram",
    description:
      "See our latest designs, workshop moments and completed pairs.",
    type: "instagram",
    icon: FaInstagram,
  },

  {
    id: 2,
    title: "The Maker's Story",
    description:
      "Learn more about the craft, process and person behind AmberFeetz.",
    type: "internal",
    path: "/about",
    icon: IoBookOutline,
  },
];

export const personalApproach = {
  title: "A Personal Approach",

  description:
    "Every pair is treated as a personal project. Whether you're ordering a design from our catalogue or bringing your own idea, we take the time to understand what you want before the work begins.",
};
