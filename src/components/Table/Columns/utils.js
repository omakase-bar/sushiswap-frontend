export const formatNumber = (x, decimal) => {
  return Number(x)
    .toFixed(decimal)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const sum = (items, prop) => {
  return items.reduce(function(a, b) {
    return a + b[prop];
  }, 0);
};
