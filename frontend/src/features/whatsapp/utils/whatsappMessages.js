export const buildOrderMessage = (product) => {
  const productName = product?.name || "this product";
  const productCode = product?.referenceCode || "";
  const message = `Hello, I would like to order ${productName}${productCode ? ` (${productCode})` : ""}. Please share availability and payment details.`;

  return message;
};

export const buildCustomizationMessage = (product) => {
  const productName = product?.name || "this pair";
  const message = `Hello, I would like to customize ${productName}. Please tell me the available options, sizes, and process.`;

  return message;
};
