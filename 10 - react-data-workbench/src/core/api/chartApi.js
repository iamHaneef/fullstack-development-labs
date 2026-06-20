// core/api/chartApi.js

export const getBarChartData = async () => {
  const res = await fetch("https://dummyjson.com/products?limit=5");
  const data = await res.json();

  // we return the data in the form of name, month and value
  return data.products.map((item) => ({
    name: item.category,
    month: item.title.slice(0, 5),
    value: item.price,
  }));
};

export const getPieChartData = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  // we initialize an empty object to store the data
  const categoryMap = {};

  data.products.forEach((item) => {
    const category = item.category;

    if (!categoryMap[category]) {
      categoryMap[category] = 0;
    }

    categoryMap[category] += 1;
  });

  // we return the data in the form of category and value according to their count
  return Object.entries(categoryMap).map(([category, value]) => ({
    category,
    value,
  }));
};

export const getDonutChartData = async () => {
  const res = await fetch("https://dummyjson.com/products?limit=5");
  const data = await res.json();

  // we return the data in the form of genre and value according to their stock 
  return data.products.map((item) => ({
    genre: item.category,
    value: item.stock * 10,
  }));
};
