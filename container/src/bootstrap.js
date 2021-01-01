import { mount } from "products/ProductsList";
import { mount as cartMount } from "cart/CartIndex";

const find = (selector) => document.querySelector(selector);

mount(find("#prod-products"));
cartMount(find("#prod-cart"));
