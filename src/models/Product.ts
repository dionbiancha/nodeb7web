type Product = {
  title: string;
  price: number;
};

const data: Product[] = [
  { title: "Produto X", price: 10 },
  { title: "Produto Y", price: 15 },
  { title: "Produto Z", price: 20 },
];

export const Product = {
  getAll: () => {
    return data;
  },
  getFromPriceAfter: (price: number): Product[] => {
    return data.filter((item) => item.price >= price);
  },
};
