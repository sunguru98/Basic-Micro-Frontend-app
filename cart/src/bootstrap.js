import faker from "faker";

export const mount = (element) => {
  const cartMessage = `<h1>You have ${faker.random.number()} items in your cart</h1>`;

  element.insertAdjacentHTML("afterbegin", cartMessage);
};

if (process.env.NODE_ENV === "development") {
  const cartContainer = document.querySelector("#dev-cart");
  if (cartContainer) mount(cartContainer);
}
