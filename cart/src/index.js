import faker from "faker";

const cartMessage = `<h1>You have ${faker.random.number()} items in your cart</h1>`;

document
  .querySelector("#dev-cart")
  .insertAdjacentHTML("afterbegin", cartMessage);
