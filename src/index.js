import { landingContent } from "./pageLoad.js"
import { menuContent } from "./menu.js"
import { contactContent } from "./contact.js"

landingContent();

const content = document.getElementById("content");

const home = document.getElementById("home");
home.addEventListener("click", () => {
  content.innerHTML = "";
  landingContent();
});

const menu = document.getElementById("menu");
menu.addEventListener("click", () => {
  content.innerHTML = "";
  menuContent();
});

const contact = document.getElementById("contact");
contact.addEventListener("click", () => {
  content.innerHTML = "";
  contactContent();
});