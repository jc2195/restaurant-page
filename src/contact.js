const contactContent = () => {
  const title = document.createElement("h1");
  title.innerHTML = "Contact Us";

  const address = document.createElement("h2");
  address.innerHTML = "Address";
  const addressContents = document.createElement("p");
  addressContents.innerHTML = "130 Wheresville Avenue<br>Notown<br>NW8 3WA<br><br>Tel: 07463 098765<br>Email: info@arestaurant.com";

  const openingTimes = document.createElement("h2");
  openingTimes.innerHTML = "Opening Times";
  const openingTimesContents = document.createElement("p");
  openingTimesContents.innerHTML = "Mon - Fri: 17.00 – 22.00<br>Sat: 12.00 – 22.30<br>Sun: 12.00 – 21.30"

  const container = document.getElementById("content");
  container.appendChild(title);
  container.appendChild(address);
  container.appendChild(addressContents);
  container.appendChild(openingTimes);
  container.appendChild(openingTimesContents);

  const nav = document.querySelectorAll(".navlink");
  nav.forEach(function(link) {
    link.style.borderBottom = "solid 1px";
    link.style.backgroundColor = "rgb(207, 207, 207)";
  });

  const navElement = document.getElementById("contact");
  navElement.style.borderBottom = "none";
  navElement.style.backgroundColor = "white";
}
export { contactContent }