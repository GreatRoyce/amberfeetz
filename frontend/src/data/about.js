import makerHeroImage from "../assets/images/maker/shoemaker2.jpg";
import makerStory from "../assets/images/maker/shoesworkshop.jpg";
import makerCraft from "../assets/images/maker/shoesbeenmade.jpg";
import makerIndividual from "../assets/images/maker/shoesdisplayed.jpg";

export const aboutHero = {
  eyebrow: "ABOUT THE MAKER",
  title: "Meet the Maker.",
  description:
    "Every pair begins with a conversation, then takes shape by hand.",
  image: makerHeroImage,
  location: "Lagos, Nigeria",
};

const aboutData = [
  {
    id: 1,
    numbering: "I",
    label: "THE STORY",
    title: "The Maker's Story",
    description:
      "AmberFeetz is built around handcrafted footwear made with attention to detail, comfort and individual style. Behind every pair is a hands-on process — from discussing the design with the customer to shaping, finishing and preparing the final pair.",
    image: makerStory,
  },

  {
    id: 2,
    numbering: "II",
    label: "THE CRAFT",
    title: "Craft & Process",
    description:
      "Each pair is approached individually. Materials are selected, components prepared and the footwear assembled and finished by hand. The details of your pair can be discussed directly with the maker before production begins.",
    image: makerCraft,
  },

  {
    id: 3,
    numbering: "III",
    label: "MADE FOR YOU",
    title: "Made for the Individual",
    description:
      "A design in the catalogue is a starting point. If you would like something changed or have an idea of your own, start a conversation on WhatsApp. Share your size, preferences and reference images directly with the maker.",
    image: makerIndividual,
  },
];

export default aboutData;