export const normalizeWhatsAppNumber = (value = "") => {
  const digits = String(value).replace(/\D/g, "");

  if (!digits) {
    return "";
  }

  if (digits.startsWith("234")) {
    return digits;
  }

  if (digits.startsWith("0")) {
    return `234${digits.slice(1)}`;
  }

  return digits;
};

export const buildWhatsAppUrl = ({ number = "", text = "" } = {}) => {
  const normalizedNumber = normalizeWhatsAppNumber(number);

  if (!normalizedNumber) {
    return "https://wa.me/";
  }

  const encodedText = text ? `?text=${encodeURIComponent(text)}` : "";

  return `https://wa.me/${normalizedNumber}${encodedText}`;
};
