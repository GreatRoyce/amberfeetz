export const buildOrderMessage = (product) => {
  const productName = product?.name || "this product";
  const productCode = product?.referenceCode || "";
  const message = `Hello, I would like to order ${productName}${productCode ? ` (${productCode})` : ""}. Please share availability and payment details.`;

  return message;
};

export const buildCustomizationMessage = () => {
  const message = "Hello, I would like a custom pair of footwear. Can we discuss the type, design, materials, sizing, and ordering process?";

  return message;
};
