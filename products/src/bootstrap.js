import { commerce } from "faker";

export const mount = (element) => {
  const products = Array.from({ length: 5 }, () => "").reduce((acc, value) => {
    const productName = commerce.productName();
    acc += `<div>${productName}</div>`;
    return acc;
  }, "");

  element.insertAdjacentHTML("afterbegin", products);
};

if (process.env.NODE_ENV === "development") {
  const element = document.querySelector("#dev-products");
  if (element) {
    mount(element);
  }
}
