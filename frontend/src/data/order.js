import findDesignImage from "../assets/images/maker/slipsorder.jpg";
import customizeImage from "../assets/images/maker/sketchorder.png";
import whatsappImage from "../assets/images/maker/whatsapporder.png";
import finalizeImage from "../assets/images/maker/shoeorder.jpg";

const orderData = [
  {
    id: 1,
    numbering: "01",
    label: "BROWSE & CHOOSE",
    title: "Find a Design",
    description:
      "Browse the designs on our homepage or explore the full catalogue. Each pair has a reference code, price and product details to help you identify the design you want.",
    image: findDesignImage,
    action: {
      label: "Go to Catalogue",
      path: "/catalogue",
      type: "link",
    },
  },

  {
    id: 2,
    numbering: "02",
    label: "ORDER OR CUSTOMIZE",
    title: "Choose Order or Customize",
    description:
      'Select "Order This Pair" to request the design as shown, or "Customize Your Pair" if you would like to discuss changes to the design, material or other details.',
    image: customizeImage,
    action: null,
  },

  {
    id: 3,
    numbering: "03",
    label: "CONTINUE ON WHATSAPP",
    title: "Chat with the Maker",
    description:
      "Your selected action opens WhatsApp with a pre-filled message containing the design name, reference code, displayed price and a direct link to the design.",
    image: whatsappImage,
    action: {
      label: "Open WhatsApp",
      type: "whatsapp",
    },
  },

  {
    id: 4,
    numbering: "04",
    label: "CONFIRM & PROCEED",
    title: "Finalize with the Maker",
    description:
      "Discuss your size, preferred details, any customizations, delivery arrangements and final price directly with the maker on WhatsApp.",
    image: finalizeImage,
    action: null,
  },
];

export default orderData;