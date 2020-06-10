// Filter for bolder text
export const bolderFilter = (text, value) => {
  return text.replace(value, `<strong>${value}</strong>`);
};

// Filter for currency format
export const currencyFormatter = (num) => {
  return parseInt(num)
    .toLocaleString()
    .replace(",", ".");
};
