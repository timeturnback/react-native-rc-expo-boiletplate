export function convertToSlug(string) {
  if (!string) return "";
  return string
    .trim()
    .normalize("NFC")
    .replace(/ /g, "-")
    .replace(/[^a-zA-Z0-9-]/g, "")
    .toLowerCase();
}

export function numberWithCommas(value, thousandComma, floatSymbol) {
  if (value !== null && value !== undefined && !isNaN(value)) {
    const [currency, cents] = value.toString().split(".");
    if (cents === undefined) {
      return value
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, thousandComma || ",");
    } else {
      return `${currency
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, thousandComma || ",")}${
        floatSymbol || "."
      }${cents || ""}`;
    }
  }
  return "0";
}

export const addThousandSeparator = (value, country, fixed = 0) => {
  if (isNaN(value)) return "-";
  value = parseFloat(value).toFixed(fixed);
  switch (country) {
    case "SGP":
      return numberWithCommas(value, ",", ".");
    case "IDN":
      return numberWithCommas(value, ".", ",");
    default:
      return numberWithCommas(value, ",", ".");
  }
};

export const getCurrencyString = (value, country, fixed = 0) => {
  if (isNaN(value)) return "-";
  value = parseFloat(value).toFixed(fixed);
  switch (country) {
    case "SGP":
      return `$${numberWithCommas(value, ",", ".")}`;
    case "IDN":
      return `Rp ${numberWithCommas(value, ".", ",")}`;
    default:
      return `${numberWithCommas(value, ",", ".")} VND`;
  }
};

export const stripNonNumbericChar = (str) => {
  if (!str) return "0";
  return str.replace(/\D/g, "");
};

export const inputOnlyInteger = (text, setStateCB) => {
  text = text.replace(/\D/g, "");
  if (!text || isNaN(text)) text = "0";
  setStateCB({ value: parseInt(text, 10), error: "" });
};
