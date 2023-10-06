export const formatPrice = (price) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format((price / 100) * 82);
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  if(type === "colors"){
    unique = unique.flat()
  }
  return ['all',...new Set(unique)]
};
