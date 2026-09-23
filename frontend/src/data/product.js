const products = [
  {
    id: "1",

    // Product identification
    name: "Heritage Leather Slip",
    referenceCode: "SL-M-001",

    // Classification
    category: "slips",
    gender: "men",

    // Product details
    material: "Genuine Leather",
    shortDescription:
      "A clean handcrafted leather slip designed for everyday comfort and effortless styling.",

    // Pricing
    price: 28000,
    previousPrice: null,

    // Images
    images: [
      {
        url: "https://i.pinimg.com/736x/90/64/dc/9064dcba5f1a6528a285e7dec7282091.jpg",
        alt: "Heritage Leather Slip",
        isPrimary: true,
      },
      {
        url: "/images/slips/SL-M-001-side.webp",
        alt: "Side view of Heritage Leather Slip",
        isPrimary: false,
      },
    ],

    // Display controls
    isVisible: true,
    showOnHome: true,

    // System data
    createdAt: "2026-09-17T10:00:00.000Z",
    updatedAt: "2026-09-17T10:00:00.000Z",
  },
  {
    id: "2",

    // Product identification
    name: "Amani Leather Sandal",
    referenceCode: "SA-F-001",

    // Classification
    category: "sandals",
    gender: "women",

    // Product details
    material: "Premium Leather",
    shortDescription:
      "A lightweight handcrafted sandal with a refined leather finish, made for relaxed everyday wear.",

    // Pricing
    price: 22000,

    // Previous price allows the website to display:
    // ₦27,000 → ₦22,000
    previousPrice: 27000,

    // Images
    images: [
      {
        url: "https://i.pinimg.com/1200x/3e/e1/81/3ee1811e66a2791c8b6be7847e8cdfd1.jpg",
        alt: "Amani Leather Sandal",
        isPrimary: true,
      },
      {
        url: "/images/sandals/SA-F-001-side.webp",
        alt: "Side view of Amani Leather Sandal",
        isPrimary: false,
      },
      {
        url: "/images/sandals/SA-F-001-top.webp",
        alt: "Top view of Amani Leather Sandal",
        isPrimary: false,
      },
    ],

    // Display controls
    isVisible: true,
    showOnHome: true,

    // System data
    createdAt: "2026-09-17T10:15:00.000Z",
    updatedAt: "2026-09-17T14:30:00.000Z",
  },
  {
    id: "3",

    // Product identification
    name: "Executive Oxford",
    referenceCode: "SH-M-001",

    // Classification
    category: "shoes",
    gender: "men",

    // Product details
    material: "Full-Grain Leather",
    shortDescription:
      "A classic handcrafted Oxford with a polished leather upper and structured silhouette for formal and professional wear.",

    // Pricing
    price: 45000,
    previousPrice: 50000,

    // Images
    images: [
      {
        url: "https://i.pinimg.com/1200x/a8/c3/da/a8c3dad72427b64a3c37238873210454.jpg",
        alt: "Executive Oxford",
        isPrimary: true,
      },
    ],

    // Display controls
    isVisible: true,
    showOnHome: true,

    // System data
    createdAt: "2026-09-17T11:00:00.000Z",
    updatedAt: "2026-09-17T15:00:00.000Z",
  },
];

export default products;
