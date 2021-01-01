import { commerce } from "faker";

const products = Array.from({ length: 5 }, () => "").reduce((acc, value) => {
  const productName = commerce.productName();
  acc += `<div>${productName}</div>`;
  return acc;
}, "");

document
  .querySelector("#dev-products")
  .insertAdjacentHTML("afterbegin", products);
