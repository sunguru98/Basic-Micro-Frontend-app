import { commerce } from "faker";

const products = Array.from({ length: 3 }, () => "").map((value) => {
  const productName = commerce.productName();
  return `
    <div>
      ${productName}
    </div>
  `;
});

console.log(products);
